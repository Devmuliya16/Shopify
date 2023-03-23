import React from 'react'
import {FaQuoteRight} from 'react-icons/fa'

function about() {
  return (
   <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto ">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center border-2 border-black drop-shadow-lg p-8 rounded-lg">
      
        <FaQuoteRight className='text-3xl m-auto w-fit '/>
  
      <p className="leading-relaxed text-lg">Shopify website is an NextJs project. 
      it simply stores user information. where user can iterate through various products, by simply storeing basic user information for authentication, gives experiance of a shopping website. it is totally made for 
      learning purpose. </p>
      <span className="inline-block h-1 w-10 rounded bg-black mt-8 mb-6" />
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">MULIYA DEV</h2>
      <p className="text-gray-500">Developer and Engineer</p>
    </div>
  </div>
</section>

  )
}

export default about
