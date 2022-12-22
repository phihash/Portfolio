---
sidebar: auto
lastUpdated : true
---

# Chrome拡張機能開発の備忘録

## 注意

2023年にManifest V2を段階的に廃止する予定で、今後はManifest V3を使用する。

詳細については[Manifest V2サポートタイムライン](https://developer.chrome.com/docs/extensions/mv3/mv2-sunset/)を参照する。


## 入門ガイド

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

---

## 拡張機能入門
[101](https://developer.chrome.com/docs/extensions/mv3/getstarted/extensions-101/)

拡張機能は、ブラウザが提供するすべての[JavaScript API](https://developer.mozilla.org/ja/docs/Web/API)
 を使用でき,[Chrome API](https://developer.chrome.com/docs/extensions/reference/)
にアクセスできるのが強みである。


API 機能の完全なリストについては、[拡張機能の開発概要](https://developer.chrome.com/docs/extensions/mv3/devguide/)を参照してください。

## sa
<br/>

---
<br/>

## manifest.jsonとは

#マニフェストとは何ですか？

マニフェストとは、最も重要なファイルや拡張機能が使用する可能性のある機能など
拡張機能に関する情報をブラウザに提供します。拡張機能プラットフォームの機能は、
新しいマニフェストのバージョンがあるときに変更されます。

#マニフェスト V3 の紹介
Manifest V3 の拡張機能は、セキュリティ、プライバシー、およびパフォーマンスが強化され、
サービスワーカーやプロミスなどの最新のオープン Web テクノロジーも使用できるようになりました。

#Manifest V3 のリソース
Manifest V3の概要、その背景となる理由、アプローチ方法について説明しています。

プラットフォーム・ビジョン
Manifest V3の変更が、プラットフォームが目指す方向性の全体像にどのようにフィットするかについて説明します。
Manifest V3の概要
Manifest V3で導入された技術的な変更点をまとめています。
移行ガイド
Manifest V2拡張機能をManifest V3で動作させるためのアップデートを開始する方法について説明します。
移行チェックリスト
拡張機能をManifest V3に適合させるのに役立つクイックチェックリストを提供します。


[Chrome 拡張機能の新機能](https://developer.chrome.com/docs/extensions/whatsnew/)と[Chrome Developer Blog](https://developer.chrome.com/tags/extensions-news/)で最新情報をチェックする

<br/>

## ドキュメント読了進捗





---

## 参考とリンク

[Chrome拡張機能ドキュメント](https://developer.chrome.com/docs/extensions/mv3/)

[Github](https://github.com/GoogleChrome/chrome-extensions-samples)

[コミュニティ](https://groups.google.com/a/chromium.org/g/chromium-extensions)

[SOF](https://stackoverflow.com/questions/tagged/google-chrome-extension)

[Chrome 拡張機能の新機能](https://developer.chrome.com/docs/extensions/whatsnew/)

[MDNのmanifest.json](https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
