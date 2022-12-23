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

h3,
p {
  margin: 0;
}
```

ポップアップはウェブページと似ていますが、1つだけ例外があります：インラインJavaScriptを実行できません。popup.html ファイルを作成し、以下のコードを追加します。
💢 ヒント：script タグに type="module" を追加すると、トップレベルの await を使用することができます。

次に、ポップアップをスタイル付けしましょう。popup.css ファイルを作成し、以下のコードを追加します。


## Step2 TabAPIで管理する


Tabs APIを使用すると、タブを作成、照会、変更、並べ替えできるようになります。

#パーミッションのリクエスト
Tabs API の多くのメソッドは、パーミッションを要求することなく使用できる。
しかし、タブのタイトルやURLなどのセンシティブなプロパティにアクセスするにはパーミッションが必要です。
タブ」パーミッションを要求することもできますが、これはすべてのタブの機密プロパティにアクセスすることになります。特定のタブのみを管理したいとき、ホスト権限を狭めてリクエストする。

狭域ホスト権限では、特定のサイトに対して昇格した権限を付与することで、ユーザーのプライバシーを保護することができます。これにより、タイトル、URL プロパティ、およびその他の機能へのアクセスが許可されます。ハイライトされたコードを manifest.json ファイルに追加します。


```js
chrome.tabs.query({//第一引数に取得したい条件を記載したオブジェクトで渡す
  'active':true, //アクティブとは、各ウィンドウで表示されている状態
  'currentWindow':true//カレントウィンドウの中のタブか
},

)

```

[オプションについて](https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query)

## 参考

[Tab](https://qiita.com/gacky35/items/4b0aac15cc7d6b6a34b5)