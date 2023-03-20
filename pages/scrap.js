import Head from 'next/head';
import Scrapbox from '../components/scrapbox';


export default function Works() {
  return (
    <div>
       <Head>
        <title>phihash</title>
        <link rel="icon" href="/vercel.svg" />
        {/* 本当はだめ */}
      </Head>
      <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap m-4">
        <Scrapbox></Scrapbox>
        <Scrapbox></Scrapbox>
        <Scrapbox></Scrapbox>
        <Scrapbox></Scrapbox>
        </div>
      </div>
      </section>
    </div>
  );
}
