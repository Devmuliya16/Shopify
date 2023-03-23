import React, { useEffect, useState,useMemo } from "react";
import Carttab from "../components/cart/carttab"
import funcs from "../components/cart/functions"
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const getproducts = ()=>{
  var products = JSON.parse(localStorage.getItem('Cart'))|| [];
  products = products.map((product)=>({productId:product._id,quentity:product.qty}))
  return products;
}

const placeorder = async (data,total)=>{
  if(total==0){
    toast.info('cart is empty', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    return
  }
  data.products = getproducts();
  data.amount = total;

  const response = await fetch("/api/user/placeorder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "authToken" :  localStorage.getItem('Auth')
    },
    body: JSON.stringify(data),
  });
  if(response.status ===200){
    toast.success('allownce and salary is meeting', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }else{
    toast.error('some error accured', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    
  }
}



function checkout() {
  const [list,_list] = useState([]);
  const [total,_total] = useState(0);
  const [formdata,_formdata] = useState({
    name:{
      first:"",
      last:""
    },
    email:"",
    company:"",
    phone:"",
    address:""
  })
  const change = (e)=>{
    _formdata((formdata)=>{
      var newform = {...formdata}
      if(e.target.name=="first" || e.target.name=="last")
      newform.name[e.target.name]=e.target.value;
      else
      newform[e.target.name]=e.target.value;
      return newform;
    })
  }

  //remove item from list
  const remove = (id)=>_list([...funcs.remove(id)]);

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
        _list(JSON.parse(localStorage.getItem("Cart")));
        funcs.init(JSON.parse(localStorage.getItem("Cart")))
    },[])
  return (
    <>
    <ToastContainer/>
      <div className="flex flex-col w-full items-center px-16">
            {list.map((item,key) => (
                <Carttab 
                key={key}
                ind={key}
                id={item._id}
                itemdata={item}
                remove={remove}
                sub = {subt}
                add = {addt} />
              ))}
      </div>
      <div className="m-auto w-fit font-bold text-xl">Items: {list.length}</div>
      <div className="m-auto w-fit font-bold text-xl">Amount: {total}/- Rs</div>

      <div className="m-auto p-5 w-fit font-bold text-3xl">Checkout</div>
    <div className="sm:w-1/2 w-11/12 m-auto">
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="first"
            onChange={change}
            value={formdata.name.first}
            id="floating_first_name"
            className="block p-2 w-full text-sm text-gray-900 bg-transparent  border-2 rounded-lg  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_first_name"
            className="bg-white  ml-2 px-2 peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="last"
            onChange={change}
            value={formdata.name.last}
            id="floating_last_name"
            className="block p-2 w-full text-sm text-gray-900 bg-transparent  border-2 rounded-lg  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_last_name"
            className="bg-white  ml-2 px-2 peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
        </div>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="email"
          name="email"
          onChange={change}
          value={formdata.email}
          id="floating_email"
          className="block p-2 w-full text-sm text-gray-900 bg-transparent  border-2 rounded-lg  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_email"
          className="bg-white  ml-2 px-2 peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email address
        </label>
      </div>

      <div className="relative z-0 w-full mb-6 group">
        <textarea
          type="text"
          name="address"
          onChange={change}
          value={formdata.address}
          id="floating_password"
          className="block p-2 w-full text-sm text-gray-900 bg-transparent  border-2 rounded-lg  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_password"
          className="bg-white  ml-2 px-2 peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Address
        </label>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            name="phone"
            onChange={change}
            value={formdata.phone}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            id="floating_phone"
            className="block p-2 w-full text-sm text-gray-900 bg-transparent  border-2 rounded-lg  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_phone"
            className="bg-white  ml-2 px-2 peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number (123-456-7890)
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="company"
            onChange={change}
            value={formdata.company}
            id="floating_company"
            className="block p-2 w-full text-sm text-gray-900 bg-transparent  border-2 rounded-lg  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_company"
            className="bg-white  ml-2 px-2 peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Company (Ex. Google)
          </label>
        </div>
      </div>
      <div className="flex mb-10">
      <button
        type="submit"
        onClick={()=>placeorder(formdata,total)}
        className="m-auto w-fit duration-500 border-2 p-2  border-black rounded-lg hover:bg-black hover:text-white"
      >
        Order now
      </button>
      </div>
    </div>
    </>
  );
}

export default checkout;
