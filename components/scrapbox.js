
export default function Scrapbox({title,link,description}) {
  console.log(title)
  return (

  <div class="xl:w-1/4 lg:w-1/3 md:w-1/2 p-4 w-full">
    {/* <a class="block relative h-48 rounded overflow-hidden">
      <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
    </a> */}
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div class="m-4 pt-12 pb-5 px-10 bg-slate-200 hover:bg-slate-300 hover:cursor-pointer rounded-xl" style={{height:"25vh"}}>
        <h2 class="text-gray-800 title-font text-lg font-bold text-xl mb-2">{title}</h2>
        <p class="mt-1  text-gray-600 font-semibold">{description}</p>
      </div>
    </a>
    </div>


  );
}

