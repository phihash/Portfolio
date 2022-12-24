---
sidebar: auto
lastUpdated : true
---

# Tab Manager


## 学ぶこと

Action API を使用して拡張ポップアップを作成する。

Tabs API を使用して特定のタブを照会する。

狭いホストパーミッションによってユーザーのプライバシーを保護する。

タブのフォーカスを変更する。

タブを同じウィンドウに移動し、グループ化する。

TabGroups API を用いてタブグループの名前を変更する。

## コードリンク

[Tab Manager](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/tutorials/tabs-manager)

## Step1 manifest.json作成とポップアップファイル作成

```json

{
  "manifest_version": 3,
  "name": "Tab Manager for Chrome Dev Docs",
  "version": "1.0",
  "icons": {
    "16": "images/icon-16.png",
    "32": "images/icon-32.png",
    "48": "images/icon-48.png",
    "128": "images/icon-128.png"
  },
  "action": {
    "default_popup": "popup.html"
  },
  "host_permissions": [
    "https://developer.chrome.com/*"
  ],
  "permissions": [
    "tabGroups"
  ]
}

```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./popup.css" />
  </head>
  <body>
    <template id="li_template">
      <li>
        <a>
          <h3 class="title">Tab Title</h3>
          <p class="pathname">Tab Pathname</p>
        </a>
      </li>
    </template>

    <h1>Google Dev Docs</h1>
    <button>Group Tabs</button>
    <ul></ul>

    <script src="./popup.js" type="module"></script>
  </body>
</html>
```

```css
body {
  width: 20rem;
}

ul {
  list-style-type: none;
  padding-inline-start: 0;
  margin: 1rem 0;
}

li {
  padding: 0.25rem;
}
li:nth-child(odd) {
  background: #80808030;
}
li:nth-child(even) {
  background: #ffffff;
}

h3,p {
  margin: 0;
}
```

ポップアップはウェブページと似てるが、インラインJavaScriptを実行できない。

popup.html ファイルを作成し、以下のコードを追加します。
💢 ヒント：script タグに type="module" を追加すると、トップレベルの await を使用することができます。


## Step2 TabAPIで管理する


Tabs APIを使用すると、タブを作成、照会、変更、並べ替えできる。

#パーミッションのリクエスト
Tabs APIのメソッドの多くは、パーミッションなしに使用できるが、タブのタイトルやURLなどのセンシティブなプロパティにアクセスするにはパーミッションが必要。
タブのパーミッションを要求で、センシティブなプロパティにアクセスできても、すべてのタブのそれにアクセスすることになり、特定のタブのみを管理したいとき、ホスト権限を狭めてリクエストする必要がある。

狭域ホスト権限は、ユーザーのプライバシーを保護し特定のサイトに対して昇格した権限を付与する。
これによりタイトル、URL プロパティ、およびその他の機能へのアクセスが許可されます。(上記コードに狭域ホスト権限参照)


::: warning 注意
タブパーミッションとホストパーミッションの両方には欠点がある。

タブパーミッションは、タブの全てのデータを読み取り、時間が経つとこの情報はユーザーの閲覧履歴を収集するために使用される可能性があるため、この権限を要求すると、Chrome はインストール時警告メッセージを表示する。

ホスト権限は、クエリにマッチしたタブのセンシティブな情報を読み、スクリプトを注入できる。
よってインストール時警告メッセージを表示する。

これらの警告は、ユーザーにとって心配になりうる。
よって、[Implementing optional permissions](https://developer.chrome.com/docs/extensions/reference/permissions/)が推奨される
:::


tabs.query()メソッドを使用すると、特定のURLからタブを取得することができます。

```js
const tabs = await chrome.tabs.query({
  url: [
    "https://developer.chrome.com/docs/webstore/*",
    "https://developer.chrome.com/docs/extensions/*",
  ],
});
```
...


ポップアップやその他の拡張ページは、あらゆるクロームAPIを呼び出せる。


```js
chrome.tabs.query({//第一引数に取得したい条件を記載したオブジェクトで渡す
  'active':true, //アクティブとは、各ウィンドウで表示されている状態
  'currentWindow':true//カレントウィンドウの中のタブか
},

)
```

タブにフォーカスする

この拡張機能は、タブ名をアルファベット順に並べ、リスト項目がクリックされると,tabs.update()でそのタブにフォーカスし、windows.update()で
ウィンドウを前面に持ってくる。

```js
const collator = new Intl.Collator();
tabs.sort((a, b) => collator.compare(a.title, b.title));

const template = document.getElementById("li_template");
const elements = new Set();
for (const tab of tabs) {
  const element = template.content.firstElementChild.cloneNode(true);

  const title = tab.title.split("-")[0].trim();
  const pathname = new URL(tab.url).pathname.slice("/docs".length);

  element.querySelector(".title").textContent = title;
  element.querySelector(".pathname").textContent = pathname;
  element.querySelector("a").addEventListener("click", async () => {
    // need to focus window as well as the active tab
    await chrome.tabs.update(tab.id, { active: true });
    await chrome.windows.update(tab.windowId, { focused: true });
  });

  elements.add(element);
}
document.querySelector("ul").append(...elements);
```



Collator は、タブの配列をユーザーの優先言語でソートするために使用されます。
テンプレートタグは、各項目を作成するために document.createElement() を使用する代わりに、複製可能な HTML 要素を定義するために使用されます。
URL の作成と解析に使用する URL コンストラクタです。
append()呼び出しで要素のセットを引数に変換するために使用されるSpread構文。

#タブのグループ化
TabGroups API により、拡張機能でグループ名を付け、背景色を選択することができます。ハイライト表示されたコードを追加して、マニフェストに「tabGroups」権限を追加します。

tabs.group() を使ってすべてのタブをグループ化し、現在のウィンドウに移動させるボタンを作成します。

```js
const button = document.querySelector("button");
button.addEventListener("click", async () => {
  const tabIds = tabs.map(({ id }) => id);
  const group = await chrome.tabs.group({ tabIds });
  await chrome.tabGroups.update(group, { title: "DOCS" });
});
```

[オプションについて](https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query)

## 参考

[Tab](https://qiita.com/gacky35/items/4b0aac15cc7d6b6a34b5)


## Chrome permissions APIについて


chrome.permissions APIを使用して、インストール時でなく実行時に宣言されたオプションのパーミッションを要求する。



### オプションのパーミッションの実装

#Step 1: パーミッションの必須とオプションを決めるステップ 2: マニフェストでオプションのパーミッションを宣言する

permissions同様に、optional_permissionsキーでマニフェスト内にてパーミッションを宣言する。

実行時にのみ検出するホストを要求する場合、拡張機能の optional_host_permissions フィールドに「https://*/*」を含めます。これにより、一致するスキームがあれば、Permissions.origins で任意のオリジンを指定することができます。

オプションとして指定できないパーミッション

ほとんどのChrome拡張機能のパーミッションはオプションとして指定することができますが、以下の例外があります。
