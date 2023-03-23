import Product from "@/components/Admin/Product";
import Producttab from "@/components/Admin/Producttab";
import Sidebar from "@/components/Admin/Sidebar";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";


const searchItem = async (search)=>{
  const response = await fetch(`/api/Search?search=${search}`,{
    method:"GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if(response.status===200)
  return data;
  return [];

}




function upload() {
  const [table,_table] = useState({category:"Select Product",list:[]});
  const [search,_search] = useState([]);

  const changesearch =async (e)=>{
    if(e.target.value==="")
    _search([]);
    else
   _search(await searchItem(e.target.value));
  }

  const setlist= (table)=>{
    _table(table);
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
        <div className=" col-start-3 col-span-full p-10 overflow-y-auto overflow-hidden">
          <div className="text-3xl flex justify-between items-center">
            View items
            <form className="w-full sm:w-1/2 flex ">
              <input
                type="search"
                id="default-search"
                className="block w-full outline-none p-2  text-gray-900 text-sm  rounded-lg bg-gray-100 focus:ring-black/20 focus:ring-2"
                placeholder="Search Products"
                onChange={changesearch}
                required
              />
              <button
                type="submit"
                className="text-white bg-black text-center focus:ring-2 focus:outline-none focus:ring-black/50 font-medium rounded-lg text-sm px-4"
              >
                <BsSearch />
              </button>
                </form>
            {search.length!==0 && <div  className="absolute sm:top-20 top-24 shadow-2xl text-sm space-y-4 bg-white p-8 flex flex-col items-center right-10 h-4/6 w-5/6 overflow-hidden overflow-y-auto">
              <span className="text-xl place-self-start">Search</span>
              {
                search.map((item,key)=>(
                  <Product key={key} item={item}/>
                  ))
                }
            </div>}
          </div>

          <Producttab setlist={setlist}/>
          <div className="text-3xl m-4">{table.category}</div>
          
          <div className="flex flex-col items-center h-4/6 space-y-3 overflow-hidden overflow-y-auto">
          {table.list.map((item,key) => (
                <Product key={key} item={item}/>
          ))}
        
          </div>
       
        </div>
        </div>


    </>
  );
}

export default upload;
