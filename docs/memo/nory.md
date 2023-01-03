---
sidebar: auto
lastUpdated : true
---

# Chrome拡張機能まとめ

## Chrome.tabs


### 1 Chrome.tabs.create|reload|update

```js
  chrome.tabs.update({ url: "https://github.com/phihash" }); //現在のタブを違うサイトに
  chrome.tabs.create({ //新規タブ作成しそのサイトに
    url:"https://youtube.com"
  });
  chrome.tabs.reload(); //タブをリロードする
```

:::warning Chrome.tabsの権限
新しいタブの作成createやリロードreload、別のURLへの遷移updateなどはpermission**不要**
tabsパーミッションを追加すると、favIconUrl、pendingUrl、title、urlなどが取得できる。
:::

:::warning 以降注意
❌ addEventListener  ○ addListener
:::

### 2 Chrome.tabs.onUpdated タブの更新

```js
//2 タブの更新,さまざまなプロパティ(ミュート、ピン留めetc)が更新されるとonUpdatedイベントが発生する
// @background.js permisssionsにtabsを記載
chrome.tabs.onUpdated.addListener((tabId,changeInfo,tabInfo)　=> { //statusとurlはchangeInfoとtabInfo両方に存在
    //loading、completeというスタータス2回以上はイベント発生する その他faviconなどさまざまなプロパティが更新されるとonUpdatedイベントが発生するとされる
})
```

### 3 Chrome.tabs.onActivated タブの移動

```js
function handleActivated(activeInfo) {
   //ウィンドウ内のアクティブなタブが変更されたときに発生する. titleなどは取得できない
  console.log(`Tab ${activeInfo.tabId} was activated`);
  console.log(`Window ${activeInfo.windowId} was activated`);
}
chrome.tabs.onActivated.addListener(handleActivated);
```

### 4 Chrome.tabs.get タブIDから情報を取得する

```js
async function logListener(activeInfo) {
  try {
    let tabInfo = await chrome.tabs.get(activeInfo.tabId);
    console.log(tabInfo);
  } catch (error) {
    console.error(error);
  }
}

chrome.tabs.onActivated.addListener(logListener);
```


### 5 Chrome.tabs.query オプションを記載したオブジェクトを指定してタブを取得する

```js
//指定されたプロパティを持つ全てのタブを取得します。何も指定しない場合、全てのタブを取得します。
function logTabs(tabs) {
  for (let tab of tabs) {
    console.log(tab.url);
  }
}
function onError(error) {
  console.log(`Error: ${error}`);
}

let querying1 = chrome.tabs.query({});//全てのタブを取得する例
querying1.then(logTabs, onError);

let querying2 = chrome.tabs.query({currentWindow: true , active : true /* +alphaアクティブなタブを取得する例：*/});
querying2.then(logTabs, onError);

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
```

::: warning tabs 権限
// tab.url requires the `tabs` permission
:::

### 6 Chrome.tabs.sendMessage

指定されたタブのコンテンツスクリプトにメッセージを送信します。runtime.onMessageイベントは、指定されたタブで実行中の各コンテンツスクリプトで、現在の拡張機能に対して発生します。

```js

```


### 7 Chrome.tabs.group


```js

```

## Chrome.scripting

::: tip
permissionにて**scripting** かつ host_permissionsにて<all_urls>指定
popup.jsでも使用可能
:::

```js
//5
//chrome.scripting API を使用すると、Web サイトに JavaScript と CSS を注入することができます。
//コンテンツスクリプト似るが、拡張機能が実行時に判断することができる点で異なる。
//　ボタンを押した時点で発火させるなど?
chrome.scripting.executeScript(
  {
    target: {tabId: tabId}, //必須項目
    // target: {tabId: tabId, allFrames: true}, 指定したタブのすべてのフレームで実行するには、allFramesブール値をtrueに設定します。
    func: hoge, //関数名
    // files: ['hoge.js'], 関数名の代わりに実行ファイル
  }
)

function hoge(){
  console.log("foo");
}

```

## Chrome.contextMenus

```js
//　右クリックのメニューにいれる
chrome.contextMenus.create({
  id:"ユニークなID",
  title:"表示名",
  type:"normal",
  contexts:["selection"],   //どの表示要素の上でコンテキストメニューを表示するか
},callback)
```

## Chrome.Alarm

```js

chrome.alarms.create("start_1", { "periodInMinutes": 1 /*指定した周期ごとに発火する*/});

chrome.alarms.create("start_2", { "delayInMinutes": 5 });

// alarmsイベント取得
chrome.alarms.onAlarm.addListener(function (alarm) {
    if (alarm.name == "start_1") { //発火したアラームを判別するには Alarm.name が利用できます。
        alert("1分経過しました。");
    } else if (alarm.name == "start_2"){
        alert("5分経過しました。");
        chrome.alarms.clearAll(); //予約されたアラームすべてを解除。
    }
});
```

[Alarm.create()](https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/API/alarms/create)

## Chrome.action

### 1 Chrome.action 無効と有効

```js
//1 Chrome.action(アイコン)の有効化と無効化
chrome.action.disable(); //アイコンを無効にする
chrome.action.disable(tabId); //アイコンを無効にする
chrome.action.enable(tabId); //アイコンを有効にする

```

### 3,4 onActivatedとquery

```js
async function handleActivated(activeInfo) {
  // 2. タブIDとwindowIdくらいしか取得できないので
  console.log(`Tab ${activeInfo.tabId} was activated`);
  console.log(`Window ${activeInfo.windowId} was activated`);
  const tabs = await chrome.tabs.query({ // 3. tabs.queryで.以下のオプションにてタブのリストを取得する
    currentWindow: true, //現在開くウィンドウかどうか
    pinned: false, //ピン留めしてるかどうか
    url: ['http://*/*', 'https://*/*'],
  });

  for(let i = 0; i < tabs.length ;i++){
    console.log(tabs[i].title,tabs[i].url);
  }
}
chrome.tabs.onActivated.addListener(handleActivated);
// 1. タブが移動すると、handleActivatedが呼び出される
```

## Chrome.storage

::: tip s
permissionでstorage宣言して

サービスワーカーとコンテンツスクリプトを含むすべての拡張機能は、Storage APIにアクセスできる。
Storage APIは、一括読み取りと一括書き込みが可能な非同期型で、キャッシュや閲覧履歴を消去しても、データは永続的に保存されます。

sync: クラウドに保存され、アカウント内で共有される。
容量制限厳し目、キー数も上限あり（512）

local: ローカルで沢山保存するものは local に保存する。
unlimitedStorage 権限を渡せば、いくらでも保存できる。

:::

### 1 setとget

```js
chrome.storage.local.set({'hoge': hogeValue}); //保存方法

chrome.storage.local.get("hoge", function (value) { //取得方法
  let value_data = value.hoge;
});

```



### 2 setとget

## Chrome.runtime

### chrome.runtime.onInstalled

::: warning
runtime.onInstalled は management.onInstalled と同じではないことに注意してください。runtime.onInstalledイベントは、あなたの拡張機能に対してのみ発生します。browser.management.onInstalledイベントは、すべてのエクステンションに対して発生します。
:::
```js
// 拡張機能が最初にインストールされたとき、新しいバージョンに更新されたとき、ブラウザが新しいバージョンに更新されたときに発生。

function handleInstalled(details) {
  console.log(details.reason);
  chrome.tabs.create({
    url: "https://example.com"
  });
}

chrome.runtime.onInstalled.addListener(handleInstalled);
```

### chrome.runtime.sendMessage
::: warning
単一のメッセージを、自分や別の拡張機能が持つイベントリスナーに送信します。

自分自身の拡張機能に送信する場合は、引数 extensionId を省略してください。
自らの拡張機能に含まれる全てのページで runtime.onMessage イベントが起動されます。
ただし、runtime.sendMessage を実行したフレームは除きます。

別の拡張機能に送信する場合は、引数 extensionId に拡張機能の ID を設定してください。
その拡張機能で runtime.onMessageExternalイベントが起動されます。

このメソッドでコンテンツスクリプトにメッセージを**送信できません**
コンテンツスクリプトにメッセージを送信するには、tabs.sendMessage を使ってください。
:::
```js
let  sending = chrome.runtime.sendMessage(
  extensionId,             // optional string　自分自身に使うことがおおそうなので基本省略
  message,                 // any
  options                  // optional object
)
```

### chrome.runtime.onMessage

```js

```

## 参考

[参考1](https://zenn.dev/eetann/articles/2022-10-15-when-tabs-is-not-required)

[参考2](https://qyu555.blogspot.com/2021/01/chrome-ext-api-sendMessage.html)




## 退避

```json

{
  "commands": {
    "_execute_action": {
      "suggested_key": {
        "default": "Ctrl+Shift+F",
        "mac": "MacCtrl+Shift+F"
      },
    }
  }
}

```




## Theme

なんかLINEでいう着せ替えみたいなやつ


```json

{
  "manifest_version": 3,
  "version": "2.6",
  "name": "camo theme",
  "theme": {
    "images" : {
      "theme_frame" : "images/theme_frame_camo.png",
      "theme_frame_overlay" : "images/theme_frame_stripe.png",
      "theme_toolbar" : "images/theme_toolbar_camo.png",
      "theme_ntp_background" : "images/theme_ntp_background_norepeat.png",
      "theme_ntp_attribution" : "images/attribution.png"
    },
    "colors" : {
      "frame" : [71, 105, 91],
      "toolbar" : [207, 221, 192],
      "ntp_text" : [20, 40, 0],
      "ntp_link" : [36, 70, 0],
      "ntp_section" : [207, 221, 192],
      "button_background" : [255, 255, 255]
    },
    "tints" : {
      "buttons" : [0.33, 0.5, 0.47]
    },
    "properties" : {
      "ntp_background_alignment" : "bottom"
    }
  }
}

```

