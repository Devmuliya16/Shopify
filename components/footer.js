import React from 'react'
import Link from 'next/link'

import {FaStaylinked} from 'react-icons/fa'

function footer() {
  return (
    <footer className="text-gray-600 body-font bg-gray-200">
  <div className="container px-5 py-24 mx-auto flex items-center  md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 items-center flex flex-col md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <FaStaylinked className="text-[40px]"/>
        <span className="ml-3 text-3xl">Shopify</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">Selling love and happiness</p>
      
      <Link href='/about' className='underline hover:font-semibold'>About&#8594;</Link>
      <Link href='/contact' className='underline hover:font-semibold'>Contact&#8594;</Link>
      
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">LAPTOPS</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">APPLE</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Lenovo</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">HP</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">DELL</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">ASUS</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">MOBLIE</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">SAMSUNG</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">APPLE</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">MI</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">ONE PLUS</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CLOTHS</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">NIKE</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">DENIM</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">GUCCI</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">LEVI`S</a>
          </li>
        </nav>
      </div>
      
    </div>
     
  </div>
  
</footer>
  )
}

export default footer
