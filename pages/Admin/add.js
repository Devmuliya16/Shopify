import Sidebar from "@/components/Admin/Sidebar";
import React, {  useState } from "react";

const additem = async (data) => {
  
  const response = await fetch("/api/admin/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.status===200) window.alert(`added ${data.title} successfully`);
};

function add() {
  const [formdata, _formdata ] = useState({
    title: "",
    desc: "",
    image: "",
    category: "",
    size: "",
    colors: [],
    price: 0,
    inStock: 0,
  });

  const change = (e) => {
    if(e.target.name==="colors"){
      formdata.colors.push(e.target.value)
      _formdata({...formdata,colors:formdata.colors});
    }
    else
    _formdata({...formdata,[e.target.name]:e.target.value})
  };

  const resetcolors = ()=>{
    _formdata({...formdata,colors:[]})
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
          <div className="text-3xl">Add items</div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product title
                </label>
                <input
                  type="text"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter title"
                  onChange={change}
                  name="title"
                  value={formdata.title}
                  required
                />
              </div>
              <div>
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select category
                  </label>
                  <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={change}
                    name="category"
                    value={formdata.category}
                    required
                  >
                    <option value="Laptop">Laptop</option>
                    <option value="Phone">Phone</option>
                    <option value="Cloth">Cloth</option>
                    <option value="Mug">Mug</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="desciption"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product description
                </label>
                <textarea
                  id="description"
                  rows={7}
                  className=" p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter product descriptions..."
                  onChange={change}
                  name="desc"
                  value={formdata.desc}
                  required
                />
              </div>
              <div className="flex flex-col ">
                <label
                  htmlFor="size"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Size
                </label>
                <input
                  type="text"
                  id="size"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Flowbite"
                  onChange={change}
                  name="size"
                  value={formdata.size}
                  required
                />
                <div>
                <label
                  htmlFor="color"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  colors
                </label>
                <input
                  type="color"
                  id="color"
                  placeholder="enter colors"
                  onChange={change}
                  name="colors"
                  required
                />
                <div className="flex w-full items-stretch overflow-hidden overflow-x-auto space-x-2">
                <button onClick={resetcolors} className="bg-gray-300 rounded-lg p-1">reset</button>
                  {
                    formdata.colors.map((color,ind)=>{
                      return <div style={{backgroundColor:color}}  key={ind}>{color}</div>
                    })
                  }
                </div>
                </div>
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  image URl
                </label>
                <input
                  type="url"
                  id="image"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="https://dummyimage.com"
                  onChange={change}
                  name="image"
                  value={formdata.image}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="stock"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  available stock
                </label>
                <input
                  type="number"
                  id="stock"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter instock value"
                  onChange={change}
                  name="inStock"
                  value={formdata.inStock}
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={change}
                  name="price"
                  value={formdata.price}
                  required
                />
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={()=>additem(formdata)}
              >
                Add item
              </button>
              <button
                type="reset"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default add;
