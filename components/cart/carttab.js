import React from 'react'
import {AiOutlinePlus ,AiOutlineMinus} from 'react-icons/ai'


function carttab(props) {




  return (
    <div  className="flex w-full py-6">
    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <img src={props.itemdata.image} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
    </div>
    <div className="ml-4 flex flex-1 flex-col">
      <div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>
            <a href="#">{props.itemdata.title}</a>
          </h3>
         <p className="ml-4">{props.itemdata.price} X {props.itemdata.qty} = {props.itemdata.price * props.itemdata.qty} rs</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">{props.itemdata.desc}</p>
      </div>
      <div className="flex flex-1 items-end justify-between text-sm">
       <p className="text-gray-500">
      <button className="bg-black mx-2 active:bg-gray-500 text-white p-1 rounded-full" onClick={()=>props.sub(props.ind)}><AiOutlineMinus/></button> 
        Qty {props.itemdata.qty}
      <button className="bg-black mx-2 active:bg-gray-500 text-white p-1 rounded-full" onClick={()=>props.add(props.ind)}><AiOutlinePlus/></button> 
        </p> 
        <div className="flex">
          <button type="button" onClick={()=>props.remove(props.id)} className="font-medium underline  rounded-full hover:text-gray-600 active:text-black">Remove</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default carttab
