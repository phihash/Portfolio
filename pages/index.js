import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>phihash</title>
        <link rel="icon" href="/vercel.svg" />
        <link rel="apple-touch-icon-precomposed" href="/vercel.svg"></link>
        <meta property="og:site_name" content="phihash" />
        <meta property="og:url" content="phihash.net" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="phihash" />
        <meta property="og:description" content="phihashのポートフォリオサイトです"/>
        <meta property="og:image" content="/images/hero.png" />
        <meta name="description" content="phihashのポートフォリオサイトです"></meta>
        {/* 本当はだめ */}
      </Head>

      <main>
<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="xl:w-4/5 mx-auto flex flex-wrap">
      <Image class="lg:w-1/2 w-full lg:h-auto h-68 object-cover object-center rounded" alt="ヒーロー画像" src="/images/hero.png" width={500} height={300}></Image>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 class="text-gray-900 text-3xl title-font font-medium mt-1 mb-6">基本情報</h1>
        <h2 class="text-lg title-font font-bold tracking-widest">生年月日</h2>
         <p class="leading-relaxed">
         1998年9月16日
         </p>
      <h2 class="text-lg title-font font-bold mt-2 tracking-widest">出身地</h2>
      <p class="leading-relaxed">
      奈良県
      </p>
      <h2 class="text-lg title-font font-bold mt-2  tracking-widest">使用言語</h2>
      <p class="leading-relaxed">
      主にJavaScriptやRubyをさわっています。
      </p>

      <h2 class="text-lg title-font font-bold mt-2  tracking-widest">そのほか</h2>
      <p class="leading-relaxed">
      ITと全然関係ないとこで働いてます。<br/>
      Webアプリを作成したくプログラミングをはじめました。<br/>
      JavaScript,TypeScript,Next.jsを触ることが多いです。<br/>
          </p>
      </div>
    </div>
  </div>
</section>
      </main>

    </div>
  )
}
