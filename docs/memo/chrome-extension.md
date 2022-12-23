---
sidebar: auto
lastUpdated : true
---

# Chrome拡張機能開発の備忘録

## 注意

2023年にManifest V2を段階的に廃止する予定で、今後はManifest V3を使用する。

詳細については[Manifest V2サポートタイムライン](https://developer.chrome.com/docs/extensions/mv3/mv2-sunset/)を参照する。

[Chrome 拡張機能の新機能](https://developer.chrome.com/docs/extensions/whatsnew/)と[Chrome Developer Blog](https://developer.chrome.com/tags/extensions-news/)で最新情報チェックする

## 最初に

<br>

### Chrome拡張機能のAPI
<br>

拡張機能は、ブラウザが提供するすべての[JavaScript API](https://developer.mozilla.org/ja/docs/Web/API)を使用でき,[Chrome API](https://developer.chrome.com/docs/extensions/reference/)
にアクセスできるのが強みである。

API 機能の完全なリストは、[拡張機能の開発概要](https://developer.chrome.com/docs/extensions/mv3/devguide/)を参照。

<br>

### 拡張機能のファイル
<br>

1.manifest.jsonファイル

必須ファイルで、拡張機能のルートディレクトリに配置する。
マニフェストは、メタデータを記録する。

2.サービスワーカー

拡張機能サービスワーカーは、新しいページに移動、ブックマークを削除、タブを閉じるなど、さまざまな種類ブラウザイベントを処理する。
Chrome のすべての API を使用できるが、ウェブページのコンテンツと直接やり取りすることはできません。

3.コンテンツ スクリプト

コンテンツスクリプトは、ウェブページのコンテキストで Javascript を実行し、ページのDOMを読み取り、変更することができる。
コンテンツスクリプトは Chrome API のサブセットしか使用できないが、
サービス ワーカーとメッセージを交換し、残りのAPIに間接的にアクセスできる。

4.ポップアップとその他のページ(必須でない)

拡張機能には、ポップアップ、オプション ページ、その他の HTML ページなど、
さまざまな HTML ファイルを含めることができます。
これらのページはすべて、Chrome API にアクセスすることができる。


## 拡張機能開発の基礎

ツールバーのアイコンをクリックすると、"Hello Extensions"を表示する
という簡易的な拡張機能を作成する。
[完全なソースコード](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/tutorials/hello-world)


### まずmanifest.jsonを作成する

このJSONファイルには、拡張機能の機能と構成を記述し、ルートディレクトリに 配置する。

[アイコンの画像](https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/gmKIT88Ha1z8VBMJFOOH.png)


変更確認のために、全てのコンポーネントの再読み込みが必要ではない。
[詳細](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/)

## ログの確認


## エラーログ
Extensionsのページを開き、ポップアップを開きます。Errors]ボタンが表示されます。




# Reading

読書時間
ページに新しい要素を挿入する最初の拡張機能を作成します。



#概要
このチュートリアルでは、任意のChrome拡張機能およびChrome Web Storeのドキュメントページに予想読了時間を追加する拡張機能を構築します。

このガイドでは、以下の概念について説明します。

拡張機能マニフェスト。
拡張機能が使用するアイコンサイズ
コンテンツスクリプトを使用してページにコードを注入する方法。
マッチパターンの使用方法
拡張機能のパーミッション

拡張機能の構築
まず、reading-time というディレクトリを新規に作成して、拡張モジュールのファイルを格納します。必要であれば、[GitHub](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/tutorials/reading-time) からソースコード全体をダウンロードすることができます。

マニフェスト JSON ファイルは、唯一の必須ファイルです。これは、拡張機能に関する重要な情報を保持しています。プロジェクトのルートに manifest.json ファイルを作成し、次のコードを追加します。

これらのキーには、拡張機能の基本的なメタデータが含まれています。これらのキーは、拡張機能ページや、公開時にChromeウェブストアで拡張機能がどのように表示されるかを制御します。マニフェストの概要ページで、「name」、「version」、「description」キーを詳しく見てみましょう。

💢 拡張機能マニフェストに関するその他の情報

プロジェクトのルートに配置する必要があります。
必須キーは "manifest_version"、"name"、"version" のみです。
開発中のコメント (//) をサポートしていますが、これらはコードを Chrome ウェブストアにアップロードする前に削除する必要があります。


## ドキュメント読了進捗

- [Welcome](https://developer.chrome.com/docs/extensions/mv3/)
  概要のみ

- [What's new in Chrome extensions](https://developer.chrome.com/docs/extensions/whatsnew/) 最新情報

- [Getting Started Guides](https://developer.chrome.com/docs/extensions/mv3/getstarted/)
   入門ガイド、チュートリアル3つ

- [Extensions 101](https://developer.chrome.com/docs/extensions/mv3/getstarted/extensions-101/)　拡張機能の基本構成などがかかれる

- [Development basics](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/) "Hello Extension"という超基礎的な拡張機能開発を行う

ドキュメントの[入門ガイド](https://developer.chrome.com/docs/extensions/mv3/getstarted/)のチュートリアルは3つある。

1.読書時間
記事を読み終えるのに必要な時間を知ることは、とても良いことです。
Reading time は、すべての拡張機能ドキュメントのページに、
推定読了時間を含む要素を挿入する方法を教えます。

2.フォーカスモード
ページから余分なものを取り除くことで、最も関連性の高い情報に集中することができます。
フォーカスモードでは、拡張機能のドキュメントページのスタイルを変更し、
邪魔な要素をいくつか非表示にする方法を説明します。

3.タブマネージャ
拡張機能の開発について調べていると、
複数のウィンドウにわたって多くのドキュメントタブを持つことになります。
タブ マネージャーは、Chrome 拡張機能や Chrome ウェブストアのドキュメント タブを整理します。


## 参考とリンク

[Chrome拡張機能ドキュメント](https://developer.chrome.com/docs/extensions/mv3/)

[Github](https://github.com/GoogleChrome/chrome-extensions-samples)

[コミュニティ](https://groups.google.com/a/chromium.org/g/chromium-extensions)

[SOF](https://stackoverflow.com/questions/tagged/google-chrome-extension)

[Chrome 拡張機能の新機能](https://developer.chrome.com/docs/extensions/whatsnew/)

[MDNのmanifest.json](https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json)

## Hello Extensions

この拡張機能は、拡張機能のアイコンをクリックすると、"Hello Extensions "が表示される。

1.まずはmanifest.jsonをつくる

```json

{
  "manifest_version": 3,
  "name": "拡張機能の名前",
  "description": "拡張機能の説明",
  "version": "1.0",
  "action": {
    "default_popup": "hello.html",　//ポップアップで表示したいHTMLファイル
    "default_icon": "hoge.png" //アイコン
  }
}
```

2.ポップアップ用のhtmlファイルを作成する

```html
<html>
  <body>
    <h1>Hello Extensions</h1>
    <script src="popup.js"></script>
  </body>
</html>
```

3.そのほか
popupのhtmlファイルに記載されているjsファイルにエラーが存在すると、拡張機能管理画面にてエラーボタンが出現する。

