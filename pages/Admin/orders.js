import Sidebar from "@/components/Admin/Sidebar";
import OrderTab from "@/components/Admin/OrderTab";
import Pagination from "@/components/pagination";
import React, { useEffect, useState } from "react";


const category = [
  {name:"Pending",category:"Pending"},
  {name:"Dispatched",category:"Dispatched"},
  {name:"On way",category:"Out for delivery"},
  {name:"Delivered",category:"Delivered"},
]


function order() {
  const [orders, _orders] = useState([]);
  const [cate,_cate] = useState("Pending");
  const [pages,_pages]= useState(2);
  const [page,_page] = useState(1);

  const getOrders = async (page,status) => {
    const response = await fetch(`/api/admin/listorders?page=${page}&status=${status}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await response.json();
    if (response.status == 200){
      _orders(data.orderlist);
      _page(data.page);
      _pages(data.pages);
    }
  }
  
  useEffect(()=>{
    getOrders(1,cate);
  },[cate]);

  const setpage = (number)=>{
    _page(number)
    getOrders(number,cate)
  }
  


  return (
    <>
      <style jsx global>
        {`
          nav {
            display: none;
          }
          footer {
            display: none;
          }
        `}
      </style>

      <div className="absolute inset-0 grid grid-rows-1 grid-cols-12">
        <div className="col-start-1 col-end-3">
          <Sidebar />
        </div>
        <div className="space-y-2 col-start-3 col-span-full p-10 overflow-y-auto overflow-hidden">
          <div className="text-3xl flex flex-col sm:flex-row items-center justify-between">Orders

          <ul className="flex flex-wrap text-sm font-medium items-center text-center text-gray-500 dark:text-gray-400">
            <span className="-translate-y-6 pb-2 translate-x-full">status</span>
            {category.map((cat,ind)=>{
              return (
              <li key={ind} className="mr-2" onClick={()=>_cate(cat.category)}>
                <a href="#" className={`${(cate==cat.category) && "bg-black text-white"} inline-block p-2 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white`}>{cat.name}</a>
              </li>
              )
            })}
           </ul>
          </div>
          {orders.map((order, ind) => <OrderTab key={ind} order={order} />)}
            <Pagination pages={pages} page={page} setpage={setpage}/>
            
        </div>
            

      </div>
    </>
  );
}

export default order;
