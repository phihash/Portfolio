---
sidebar: auto
lastUpdated : true
---

## Focus Mode と　Service Worker

アイコンをクリックして、現在のページのスタイリングを簡素化します。

拡張機能サービスワーカーをイベントコーディネーターとして使用する。
ActiveTab パーミッションによってユーザーのプライバシーを保護する。
ユーザが拡張機能ツールバーのアイコンをクリックしたときにコードを実行する。
Scripting API を使用してスタイルシートを挿入および削除する。
キーボードショートカットを使用してコードを実行する。


1.manifest.json作成

```json

{
  "manifest_version": 3,
  "name": "Focus Mode",
  "description": "Enable reading mode on Chrome's official Extensions and Chrome Web Store documentation.",
  "version": "1.0",
  "icons": {
    "16": "images/icon-16.png",
    "32": "images/icon-32.png",
    "48": "images/icon-48.png",
    "128": "images/icon-128.png"
  },
  "background": { //2 拡張機能の初期化
    "service_worker": "background.js"
  },
  "action": { //3 拡張機能アクションの動作を有効にする
    "default_icon": {
      "16": "images/icon-16.png",
      "32": "images/icon-32.png",
      "48": "images/icon-48.png",
      "128": "images/icon-128.png "
    }
  },
  "permissions": ["activeTab", "scripting"],//3,5
}

```

2.拡張機能の初期化

拡張機能は、サービスワーカーを使ってバックグラウンドで、ブラウザのイベントを監視する。サービスワーカーとは、イベントを処理するためにロードされ、不要になったら終了する特別な JavaScript環境です。

```js
chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});
const extensions = 'https://developer.chrome.com/docs/extensions'
const webstore = 'https://developer.chrome.com/docs/webstore'

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {
    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Next state will always be the opposite
    const nextState = prevState === 'ON' ? 'OFF' : 'ON'

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });

    if (nextState === "ON") {
      // Insert the CSS file when the user turns the extension on
      await chrome.scripting.insertCSS({
        files: ["focus-mode.css"],
        target: { tabId: tab.id },
      });
    } else if (nextState === "OFF") {
      // Remove the CSS file when the user turns the extension off
      await chrome.scripting.removeCSS({
        files: ["focus-mode.css"],
        target: { tabId: tab.id },
      });
    }
  }
});
```

***サービスワーカーが聞く最初のイベントは runtime.onInstalled() です。***
このメソッドにより、拡張機能はインストール時に初期状態を設定したり、いくつかのタスクを完了させたりすることができます。
拡張機能は、Storage API と IndexedDB を使ってアプリケーションの状態を保存することができます。しかし今回は、2つの状態しか扱わないので、アクションのバッジテキストそのものを使って、拡張機能が「ON」なのか「OFF」なのかを追跡することにします。


ちなみに

バッジ
アクションは、オプションで「バッジ」（アイコンの上に重ねられたちょっとしたテキスト）を表示できます。これにより、アクションを更新してカウンターのような拡張機能の状態に関する少量の情報を表示することが容易になります。バッジはテキストコンポーネントと背景色を持っています。

バッジはスペースが限られ、通常4文字以下を使用する.

バッジはマニフェストから取得したデフォルトを持ちません。プログラムで設定するには、 action.setBadgeBackgroundColor() と action.setBadgeText() を使用します。色を設定する場合、値はバッジの RGBA カラーを構成する 0 から 255 までの 4 つの整数の配列、または CSS カラー値を持つ文字列のいずれかになります。

```
chrome.action.setBadgeBackgroundColor(
  {color: [0, 255, 0, 0]},  // Green
  () => { /* ... */ },
);

chrome.action.setBadgeBackgroundColor(
  {color: '#00FF00'},  // Also green
  () => { /* ... */ },
);

chrome.action.setBadgeBackgroundColor(
  {color: 'green'},  // Also, also green
  () => { /* ... */ },

```

3.拡張機能アクションの動作を有効にする

拡張機能アクションは拡張機能のツールバーアイコンを制御します。したがって、拡張機能アクションをクリックするたびに、何らかのコードが実行されるか (この例のように) ポップアップが表示されます。

ユーザーのプライバシーを保護するためにactiveTabパーミッションを使用する

activeTabパーミッションは、現在アクティブなタブ上でコードを実行する一時的な能力を拡張機能に与える。また、現在のタブのセンシティブなプロパティへのアクセスも許可されます。

このパーミッションは、ユーザーが拡張機能を呼び出したときに有効になります。この場合、ユーザーは拡張機能のアクションをクリックすることで拡張機能を呼び出します。

私自身の拡張機能でactiveTabパーミッションを有効にする他のユーザーインタラクションは何ですか?

キーボードショートカットの組み合わせを押す。
コンテキストメニューの項目を選択する。
omnibox からの提案を受け入れる。
拡張機能のポップアップを開く

 activeTabパーミッションは、ユーザーが意図的にフォーカスされたタブ上で拡張機能を実行することを選択できるようにします; この方法で、ユーザーのプライバシーを保護します。別の利点は、パーミッションの警告を発生させないことです。

activeTab パーミッションを使用するには、マニフェストのパーミッション配列に追加します。


---

4.現在のタブの状態を追跡する

ユーザーが拡張機能のアクションをクリックした後、拡張機能はURLがドキュメントのページに一致するかどうかをチェックします。
次に、現在のタブの状態をチェックし、次の状態を設定します。次のコードをbackground.jsに追加してください。


5.スタイルシートの追加・削除
さて、いよいよページのレイアウトを変更します。focus-mode.cssという名前のファイルを作成し、以下のコードを記述します。

Scripting API を使用して、スタイルシートを挿入または削除してみましょう。まず、マニフェストで「スクリプティング」権限を宣言することから始めます。

```css

body > .scaffold > :is(top-nav, navigation-rail, side-nav, footer),
main > :not(:last-child),
main > :last-child > navigation-tree,
main .toc-container {
  display: none;
}

main > :last-child {
  margin-top: min(10vmax, 10rem);
  margin-bottom: min(10vmax, 10rem);
}
```


scripting.executeScript()を使って、JavaScriptを注入することができます。

オプションで キーボードショートカットを設定する
お遊びで、フォーカス モードの有効化または無効化を簡単に行うためのショートカットを追加してみましょう。マニフェストに「commands」キーを追加します。

{
  ...
  "commands": {
    "_execute_action": {
      "suggested_key"（提案されたキー）。{
        "デフォルト": "Ctrl+U"。
        "mac": "Command+U"（コマンド+U
      }
    }
  }
}
_execute_action "キーは、action.onClicked()イベントと同じコードを実行するので、追加のコードは必要ありません!

CSSスタイルシートを改善する。
別のキーボードショートカットを割り当てる。
お気に入りのブログやドキュメントサイトのレイアウトを変更する。
#Keep building!

---

## [サービスワーカーでイベントを管理する](https://developer.chrome.com/docs/extensions/mv3/service_workers/)

イベントとは、新しいページに移動したり、ブックマーク削除、タブを閉じたりといった、ブラウザーのトリガーとなるもので,
拡張機能は、バックグラウンドサービスワーカー内のスクリプトを使用してこれらのイベントを監視し、指定された指示に従って反応します。

必要なときバックグラウンドサービスワーカーはロードされ、アイドル状態になったときにアンロードされます。

以下例

1.拡張機能が初めてインストールされるか、新しいバージョンに更新されたとき。
2.バックグラウンドページがイベントをリッスンしており、そのイベントがディスパッチされたとき。
3.コンテンツスクリプトや他の拡張機能からメッセージが送信される。
4.ポップアップなどの拡張機能の別のビューが **runtime.getBackgroundPage** を呼び出したとき

拡張機能のサービスワーカーはロードされると、Chrome API の呼び出しやネットワークリクエストの発行などのアクションを実行する限り、実行されつづけます。

ビューを開いてもサービスワーカーはロードされませんが、一度ロードされたビューが閉じるのを防ぐだけです。

効果的なバックグラウンドスクリプトは、待機しているイベントが発生するまで休眠状態となり、指定された指示で反応した後、アンロードされます。

### サービスワーカーを登録する
```json
"background": {
    "service_worker": "background.js",
    "type": "module" //サービスワーカーをESモジュールとして含めることができ、さらなるコードのインポートが可能になります。
  },
```

エクステンションの初期化
runtime.onInstalled イベントをリッスンして、インストール時に拡張機能を初期化します。
このイベントは、状態を設定するため、コンテキストメニューのような一回限りの初期化のために使用します。

```js
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "サンプルコンテキストメニュー",
    "contexts": ["選択"].
  });
});
```

リスナーを設定する
拡張機能が依存するイベントを中心にバックグラウンドスクリプトを構成します。
機能的に関連するイベントを定義しておくと、 バックグラウンドスクリプトはそのイベントが発生するまで待機しておくことができ、
 拡張モジュールが重要なトリガーを見逃してしまうのを防ぐことができます。

リスナーは、ページの開始と同期して登録する必要があります。

```js
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Sample Context Menu",
    "contexts": ["selection"],
  });
});

// This will run when a bookmark is created.
chrome.bookmarks.onCreated.addListener(() => {
  // do something
});
```

リスナーを非同期で登録すると、正しく起動しないので、登録しないでください。

```js
chrome.runtime.onInstalled.addListener(() => { }; //非同期にリスナーを登録してはいけません。
  // ERROR! イベントはページの先頭から同期的に登録する必要があります。
  // イベントの登録は、ページの先頭から同期的に行う必要があります。
  chrome.bookmarks.onCreated.addListener(() => {
    // 何かする
  });
});
```

エクステンションは、removeListener を呼び出すことでバックグラウンドスクリプトからリスナーを削除することができます。イベントのリスナーがすべて削除されると、Chrome はそのイベントに対する拡張機能のバックグラウンド スクリプトを読み込まなくなります。

```js
chrome.runtime.onMessage.addListener((message, sender, reply) => {
  chrome.runtime.onMessage.removeListener(event);
});
```


イベントのフィルタリング
イベントフィルタをサポートする API を使用して、リスナーを拡張機能が必要とするケースに限定します。
拡張機能が tabs.onUpdated イベントをリスニングしている場合、
代わりに webNavigation.onCompleted イベントをフィルタリングして使用してみてください（tabs API はフィルタをサポートしていません）。

```js

const filter = {
  url: [
    {
      urlMatches: 'https://www.google.com/',
    },
  ],
};

chrome.webNavigation.onCompleted.addListener(() => {
  console.info("The user has loaded my favorite website!");
}, filter);
```


---

探索を続ける


Chrome 拡張機能アーキテクチャは、拡張機能アーキテクチャ全般について詳しく説明しています。

デベロッパーズ ガイドには、高度な拡張機能の作成に関連するドキュメントへの追加リンクが多数掲載されています。

拡張機能では、オープン ウェブで利用可能なものを超える強力な API にアクセスできます。Chrome API のドキュメントでは、各 API を詳しく説明しています。
