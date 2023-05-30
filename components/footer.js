import Link from "next/link";
export default function Footer() {
  return (
    <footer class="text-gray-600 body-font">
    <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <Link legacyBehavior href="/">
      <a  class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Hashtag"><path d="M10 3L6 21"/><path d="M18 3l-4 18"/><path d="M4 8h17"/><path d="M3 16h17"/></svg>
        <span class="ml-1 text-xl">phihash</span>
      </a>
      </Link>
      <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 phihash
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/phihash" class="text-gray-600 ml-1">@phihash</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/phihash" class="ml-3 text-gray-500" aria-label="link to Twitter">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/phihash_illust/" class="ml-3 text-gray-500" aria-label="link to Instagram">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500" target="_blank" rel="noopener noreferrer" href="https://github.com/phihash" aria-label="link to GitHub">
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a class="ml-3 text-gray-500" target="_blank" rel="noopener noreferrer" href="https://illust.phihash.net" aria-label="link to Illust Portfolio Site">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M8.983 10.232c.139.49-.186 1.014-.729 1.169-.542.154-1.094-.119-1.235-.61-.14-.491.187-1.014.729-1.168.543-.155 1.094.118 1.235.609zm12.017 10.781c0 1.655-1.317 2.987-3.281 2.987h-10.781c-3.07 0-3.656-3.875-1.266-4.75-.63-.792-.806-1.903-.427-3.303.298-1.107.024-1.292-.708-1.784-.588-.396-1.537-1.033-1.537-2.372 0-1.825 1.422-4.241 3.85-5.261 1.375-.578 1.815-1.397 2.422-2.53.271-.506.578-1.079.995-1.659 1.389-1.935 2.699-2.341 3.554-2.341.73 0 1.408.296 1.91.833.273.292.478.639.604 1.011.869.179 1.564.702 1.924 1.475.469 1.008.275 2.254-.507 3.253-.425.543-.999 1.05-1.606 1.586-.828.732-1.963 1.734-1.918 2.343.021.288.375.67.969 1.05 2.627 1.681 4.061 3.909 4.373 6.799.914.691 1.43 1.659 1.43 2.663zm-2.836-1.219c-.286-.166-.473-.47-.493-.808-.146-2.372-1.46-4.582-3.637-5.837-1.143-.659-1.676-1.553-1.746-2.495-.121-1.619 1.318-2.891 2.59-4.013.537-.475 1.046-.924 1.359-1.324.75-.96.121-1.679-.664-1.447-1.072.317-2.451 2.013-3.135 2.739.605-.793 1.709-2.456 2.015-3.448.294-.958-.437-1.57-1.493-.823-.866.613-1.484 1.695-1.982 2.626-.679 1.264-1.379 2.571-3.391 3.417-1.648.693-3.516 3.078-1.984 4.107.668.449 1.7 1.143 1.7 2.736 0 1.001-.958 2.541.683 4.572-2.314.485-2.048 2.204-1.071 2.204h2.144c-.499-1.581.271-3.521 2.192-3.521-.08-1.008.084-3.25 3.125-4.292-3.291 2.458-.838 6.119.396 6.729-1.236-.478-2.069-.712-2.631-.765-1.592-.148-1.548 1.849-.364 1.849h5.942c1.551 0 1.814-1.413.445-2.206z"/></svg>
        </a>
      </span>
    </div>
  </footer>
  );
}
