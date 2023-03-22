import Head from 'next/head';
import Scrapbox from '../components/scrapbox';


export default function Works() {
  const links = [
    {title:"Notta 🎧",link:"https://www.notta.ai/",description:"音声文字起こしサービス"},
    {title:"InFact 👁",link:"https://infact.press/",description:"ファクトチェック"},
    {title:"Have I Been Pwned 🔐",link:"https://haveibeenpwned.com/",description:"パスワード流失確認"},
    {title:"Cult of the Party Parrot 🦜",link:"https://cultofthepartyparrot.com/",description:"パーティパロット"},
    {title:"iconmonstr 🧐",link:"https://iconmonstr.com",description:"アイコン探し"},
    {title:"ferret 🎨",link:"hhttps://ferret-plus.com/7909",description:"代表的なサービスブランドカラーコード"},
    {title:"Have I Been Pwned",link:"https://cultofthepartyparrot.com/",description:"パーティパロット"},
    {title:"Have I Been Pwned",link:"https://cultofthepartyparrot.com/",description:"パーティパロット"},
    {title:"Have I Been Pwned",link:"https://cultofthepartyparrot.com/",description:"パーティパロット"},
    {title:"Have I Been Pwned",link:"https://cultofthepartyparrot.com/",description:"パーティパロット"},
  ]
  return (
    <div>
       <Head>
        <title>phihash</title>
        <link rel="icon" href="/vercel.svg" />
        {/* 本当はだめ */}
      </Head>
      <section class="text-gray-600 body-font">
      <div class="container py-12 mx-auto">
        <div class="flex flex-wrap m-4">
          {links.map((obj) => {
            return  <Scrapbox {...obj}></Scrapbox>
          })}
        </div>
      </div>
      </section>
    </div>
  );
}
