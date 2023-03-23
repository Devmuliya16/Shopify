import React, { useEffect, useState } from 'react'
import Invoicetab from '@/components/cart/invoicetab';

function order() {
  const [orders, _orders] = useState([]);
  const getorders = async () => {
    const response = await fetch("/api/user/listorder", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authToken": localStorage.getItem('Auth')
      }
    });
    const data = await response.json();
    if (response.status === 200) {
      _orders(data); 
    }
  }

  useEffect(() => {
    getorders();
  }, [])

  return (
    <>
     
      <div className="relative h-screen sm:w-1/2 space-y-4 flex flex-col items-center m-auto overflow-x-hidden overflow-auto">
          {
            orders.map((order, id) => {
              return (
                <Invoicetab order={order} key={id}/>
              )
            })
          }
      </div>
   



    </>
  )
}


export default order
