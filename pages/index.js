
import {AiOutlineStar , AiOutlineHome} from 'react-icons/ai'
import {MdSpeed} from 'react-icons/md'
import Image from 'next/image'


export default function Home() {
  

  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto flex flex-wrap">
    <div className="flex w-full mb-12 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div className="flex flex-wrap flex-col sm:flex-row items-center">
      <div className="flex flex-wrap sm:w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <Image alt="gallery" width={100} height={100} unoptimized={true} placeholder="blur" blurDataURL='/images/laptop1.jpg' className="w-full h-full object-cover object-center block" src="/images/laptop1.jpg" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
        <Image alt="gallery" width={100} height={100} unoptimized={true} placeholder="blur" blurDataURL='/images/phones1.jpg' className="w-full h-full object-cover object-center block" src="/images/phones1.jpg" />
          
        </div>
        <div className="md:p-2 p-1 w-full">
        <Image alt="gallery" width={100} height={100} unoptimized={true} placeholder="blur" blurDataURL='/images/cloths1.jpg' className="w-full h-full object-cover object-center block" src="/images/cloths1.jpg" />
          
        </div>
      </div>
      <div className="flex flex-wrap sm:w-1/2">
        <div className="md:p-2 p-1 w-full">
        <Image alt="gallery" width={100} height={100} unoptimized={true} placeholder="blur" blurDataURL='/images/laptop2.jpg' className="w-full h-full object-cover object-center block" src="/images/laptop2.jpg" />
          
        </div>
        <div className="md:p-2 p-1 w-1/2">
        <Image alt="gallery" width={100} height={100} unoptimized={true} placeholder="blur" blurDataURL='/images/mugs1.jpg' className="w-full h-full object-cover object-center block" src="/images/mugs1.jpg" />
        
        </div>
        <div className="md:p-2 p-1 w-1/2">
        <Image alt="gallery" width={100} height={100} unoptimized={true} placeholder="blur" blurDataURL='/images/cloths2.jpg' className="w-full h-full object-cover object-center block" src="/images/cloths2.jpg" />
        
        </div>
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font mb-8">
  <div className="container px-5 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Raw Denim Heirloom Man Braid</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-gray-500 inline-flex" />
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-300 underline  text-black cursor-pointer mb-5 flex-shrink-0">
          <AiOutlineHome className="text-[40px]"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Home delivery</h2>
          <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a className="mt-3 underline text-black cursor-pointer inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-300 underline text-black cursor-pointer mb-5 flex-shrink-0">
          <AiOutlineStar className="text-[40px]"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Easy to use</h2>
          <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a className="mt-3 underline text-black cursor-pointer inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-300 underline text-black cursor-pointer mb-5 flex-shrink-0">
          <MdSpeed className="text-[40px]"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Fast service</h2>
          <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a className="mt-3 underline text-black cursor-pointer  inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



    </>
  )
}
