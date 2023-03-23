import Link from "next/link";
import React, {  useEffect, useMemo, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import Carttab from "./carttab";

import funcs from "./functions";




function cart(props) {
  const [list,_list] = useState(props.list);
  const [total,_total] = useState(0);

  //remove item from list
  const remove = (id)=>_list([...funcs.remove(id)]);
  //clear items from list
  const clear = ()=> _list(funcs.setCart([]));
  //to count total values
  useMemo(()=>{
    var total=0;
    list.forEach((item)=>total+=item.price * item.qty)
    _total(total);
  },[list])

  //increment count
  const addt = (id)=>_list([...funcs.add(id)]);
  //decrement count
  const subt = (id) => _list([...funcs.sub(id)]);
  
  useEffect(()=>{
    _list(props.list)
    funcs.init(props.list);
  },[props.list])



 
  
  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="absolute sm:w-2/6 w-full inset-0 overflow-hidden">
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="pointer-events-auto w-screen max-w-md">
            <div className="flex h-full flex-col bg-white shadow-xl">
              <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2
                    className="text-lg font-medium text-gray-900"
                    id="slide-over-title"
                  >
                    Shopping cart
                  </h2>
                  <div className="ml-3 flex h-7 items-center">
                    <button
                      onClick={props.togglecart}
                      className=" text-gray-400 hover:text-gray-500"
                    >
                      <GrFormClose className="w-8 h-8" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">total products: {list.length}</p>
                <div className="mt-8">
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {list.map((item,key) => (
                        <Carttab 
                        key={key}
                        id={item._id}
                        ind={key}
                        itemdata={item}
                        remove={remove}
                        sub = {subt}
                        add = {addt} 
                        togglecart={props.togglecart}/>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>total</p>
                  <p>${total}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>

                <div className="flex justify-center">
                  <Link href="/checkout" >
                  <button onClick={props.togglecart} className="duration-500 border-2 p-2 m-2  border-black rounded-lg hover:bg-black hover:text-white">
                    Checkout
                  </button>
                  </Link>
                  <button className="duration-500 border-2 p-2 m-2  border-black rounded-lg hover:bg-black hover:text-white" onClick={clear}>
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cart;
