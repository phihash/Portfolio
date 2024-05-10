import Link from 'next/link';

export default function Header() {
  return (
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link legacyBehavior href="/">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Hashtag"><path d="M10 3L6 21"/><path d="M18 3l-4 18"/><path d="M4 8h17"/><path d="M3 16h17"/></svg>
      <span class="ml-1 text-xl font-bold">phihash</span>
    </a>
    </Link>
  

  </div>
</header>
  );
}
