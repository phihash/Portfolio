---
sidebar: auto
lastUpdated : true
---

## Chrome


```js
chrome.action.disable(); //アイコンを無効にする

```

```js
//permisssionsにtabsを記載する必要あり background.js
//background.js
chrome.tabs.onUpdated.addListener((tabId,changeInfo,tab)　=> { //　タブ更新のイベントリスナー
  //すでにあるタブに移動しても意味ない感じする
  //タブ更新のイベントは 2 回発生する??
  console.log({
    tabId: tabId,
    changeInfo: changeInfo,
    tab: tab,
    tabUrl: tab.url,
    locationHref: location.href,
    this: this
  });
})
```

:::warning
addListener
:::


```js

```
```js

```

```js

```

```js

```
```js

```

```js

```

```js

```
