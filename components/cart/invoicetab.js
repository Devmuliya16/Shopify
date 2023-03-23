import Link from 'next/link'
import React, { useState } from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'

const mapitems = (products)=>{

    return products.map((prod,ind)=>{
      return(
  
          <Link href={`product/${prod.productId._id}`} key={ind} className="animate-redheight p-4 shrink-0 rounded-3xl">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-42 md:h-32 w-full object-cover object-center" src={prod.productId.image} alt="blog" />
              <div className="p-2">
                <h2 className="tracking-widest  title-font font-medium text-gray-400 mb-1">{prod.productId.category}</h2>
                <h1 className="title-font  font-medium text-gray-900 mb-3">{prod.productId.title}</h1>
                <div className='flex justify-between'>
                  <h3>{prod.productId.size}</h3>
                <h3 className='text-blue-700'>{prod.quentity} &#88; {prod.productId.price}</h3>
                </div>
              </div>
            </div>
          </Link>
  
  )
  })
  }
  

function invoicetab({order}) {
    const [show,_show] = useState(false);
  return (
    <div className="w-full  bg-gray-200 rounded-xl text-sm p-8">
                  <div className='w-full flex justify-between'>

                  <span>Name: {order.name.first} {order.name.last}</span>
                  <span className='text-blue-700'>&#8377; {order.amount}</span>
                  </div>
                  {show && <div className='animate-redheight flex flex-row items-center bg-gray-100  p-4 overflow-y-hidden overflow-auto'>

                  {mapitems(order.products)}
                  </div>}
                  <div  className='flex justify-between items-center'>
                   <div>Products: {order.products.length}</div> 
                   <button onClick={()=>_show(!show)} className='bg-black rounded-full text-white'>
                    <RiArrowDropDownLine className={`${show && "rotate-180"} text-xl`}/>
                   </button>  
                  </div>
                    <div className='flex justify-between'>
                    <span> Email: {order.email}</span>
                    <span> Phone: {order.phone}</span>
                    </div>
                  <p className='bg-gray-50 rounded-lg p-2'> {order.address}</p>
                </div>
  )
}

export default invoicetab