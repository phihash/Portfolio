---
sidebar: auto
lastUpdated : true
---

# Reading Time

## 学ぶこと

拡張機能のマニフェスト done

拡張機能が使用するアイコンサイズ done

コンテンツスクリプトを使用してページにコードを注入する方法

マッチパターンの使用方法 done

拡張機能のパーミッション

## コードのリンク

[GitHub Reading-time](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/tutorials/reading-time)

## Step1. manifest.json作成

::: tip
manifest.jsonを作成しルートに設置する。
このときファイル内で必須キーは "manifest_version"、"name"、"version".
:::

```json
{
  "manifest_version": 3,
  "name": "Reading time",
  "version": "1.0",
  "description": "Add the reading time to Chrome Extension documentation articles",
    "icons": { // 2PNG画像を読み込む
    "16": "images/icon-16.png",
    "32": "images/icon-32.png",
    "48": "images/icon-48.png",
    "128": "images/icon-128.png"
  },
  "content_scripts": [ // 3コンテンツスクリプトを宣言する
    {
      "js": ["scripts/content.js"],
      "matches": [
        "https://developer.chrome.com/docs/extensions/*",
        "https://developer.chrome.com/docs/webstore/*"
      ]
    }
  ]
}
```

## Step2. アイコン用に画像読み込み

::: warning 注意
アイコン用に画像を読み込む。PNGの使用推奨されるが、SVGファイルを除くファイル形式も可能。
:::

::: tip 各サイズ
16x16 拡張機能のページのファビコン、コンテキストメニューアイコン。
32x32 Windowsコンピュータはこのサイズを要求することが多い。
48x48 拡張機能のページに表示
128x128 インストール時やChromeウェブストアで表示されます。
:::


## Step3.コンテンツスクリプトを宣言する

拡張機能は、ページの内容を読み込み修正するスクリプトを実行することができる。このスクリプトをコンテンツスクリプトと呼ぶ。(上記コード参照)

コンテンツスクリプトは、ホストページや他の拡張機能のコンテンツスクリプトと衝突することなく、JavaScript環境に変更を加えることができる。

matchesには、複数のマッチパターンを指定でき、どのサイトにコンテンツスクリプトを注入すればよいかを特定できる。
matches パターンは scheme://host path の三つの部分から成り、 * 文字を含むことができる。
[詳細](https://developer.chrome.com/docs/extensions/mv3/match_patterns/)

## Step4. JSファイル作成

コンテンツスクリプトはDOMを用いて、コンテンツを読みこみ変更できる。
この例では、まずページ内にarticle要素が含まれているかを確認し、この要素内のすべての単語を数え、合計の読書時間を表示する段落を作成する。
以下のJSファイル

```js
const article = document.querySelector("article");

if (article) { // article要素があるとき
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // 正規表現で　空白以外の文字(直前の文字の1文字以上)
  const words = text.matchAll(wordMatchRegExp); //　イテレーター返す
  const wordCount = [...words].length; //　単語数
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption"); //クラス名追加
  badge.textContent = `⏱️ ${readingTime} min read`;

  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode; // オプションの連鎖は、未定義またはヌルの可能性があるオブジェクトプロパティにアクセスするために使用されます。

  (date ?? heading).insertAdjacentElement("afterend", badge); //指定された位置に、指定された要素ノードを挿入します。他にbeforebeginなど指定可能でNullish合体では、dateがNULLまたは未定義の場合、headingを返します。
}
```

---



