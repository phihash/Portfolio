---
sidebar: auto
lastUpdated : true
---

## Chrome拡張機能まとめ

### 1 Chrome.action

```js
//1 Chrome.action(アイコン)の有効化と無効化
chrome.action.disable(); //アイコンを無効にする
chrome.action.disable(tabId); //アイコンを無効にする
chrome.action.enable(tabId); //アイコンを有効にする

```

:::warning 以降注意
❌ addEventListener  ○ addListener
:::


### 2 Chrome.tabs.onUpdated

```js
//2  タブ更新(現在のタブのリロード)のイベントリスナー　厳密にいうとさまざまなプロパティ(ミュート、ピン留めetc)が更新されるとonUpdated イベントが発生する
// @background.js permisssionsにtabsを記載
chrome.tabs.onUpdated.addListener((tabId,changeInfo,tabInfo)　=> { //statusとurlはchangeInfoとtabInfo両方に存在
    //loading、completeというスタータス2回以上はイベント発生する その他faviconなどさまざまなプロパティが更新されるとonUpdatedイベントが発生するとされる
    changeInfo.status,
    tabInfo.audible,
    tabInfo.favIconUrl,
    tabInfo.url,
    tabInfo.title,
    tabInfo.status,
})
```


### 3 Chrome.tabs.onActivated　

```js
function handleActivated(activeInfo) { //ウィンドウ内のアクティブなタブが変更されたときに発生する //移動 titleとかは取得できない
  console.log(`Tab ${activeInfo.tabId} was activated`);
  console.log(`Window ${activeInfo.windowId} was activated`);
}
chrome.tabs.onActivated.addListener(handleActivated);
```


### 4 Chrome.tabs.query

```js
//指定されたプロパティを持つ全てのタブを取得します。何も指定しない場合、全てのタブを取得します。

//全てのタブを取得する例
function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var querying = chrome.tabs.query({});
querying.then(logTabs, onError);

//-------------------------------------------------------------


//カレントウインドウの全てのタブを取得する例：

function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var querying = browser.tabs.query({currentWindow: true , active:true /* +alphaアクティブなタブを取得する例：*/});
querying.then(logTabs, onError);


```



```js
//5  permissionにてscripting指定 かつ host_permissionsにて<all_urls>指定
//chrome.scripting API を使用すると、Web サイトに JavaScript と CSS を注入することができます。これはコンテンツスクリプトでできることと似ていますが、chrome.scripting APIを使用することで、拡張機能が実行時に判断することができます。
chrome.scripting.executeScript(
  {
    target: {tabId: tabId}, //必須項目
    // target: {tabId: tabId, allFrames: true}, 指定したタブのすべてのフレームで実行するには、allFramesブール値をtrueに設定します。
    func: hoge, //関数名
    // files: ['hoge.js'], 関数名の代わりに実行ファイル
  }
)

```



```js

```
```js

```

```js

```

```js

```
