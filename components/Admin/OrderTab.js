import React, { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const setstatus = async (status,id) => {
  const response = await fetch(`/api/admin/setstatus?status=${status}&id=${id}`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });
 const data = await response.json();
 if(response.status===200)
 toast.success(`set to ${data} successfully`, {
  position: "top-center",
  autoClose: 1000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
  });
}

const product = ({ productId, quentity },ind) => {
  return (
    <section key={ind} className="text-gray-600 body-font bg-gray-100 shrink-0">
      <div className="flex">

        <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="h-28 w-full object-cover object-center" src={productId.image} alt="blog" />
          <div className='px-4 text-sm'>
            <div className='flex items-center justify-between'>
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400">{productId.category}</h2>
              <span className='bg-black/40 text-white text-mc rounded-md'> &#8377; {productId.price}</span>
            </div>
            <h1 className="title-font font-medium text-gray-900 mb-1">{productId.title}</h1>
            <div className='w-full flex flex-row justify-between'>
              <span>Quentity: {quentity}</span>
              <span> in stock: {productId.inStock}</span>

            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

function OrderTab({ order }) {
  const [show, _show] = useState(false);

  const changestatus = (e)=>{
    setstatus(e.target.value,order._id)
  }

  return (

    <div className='w-full p-4 text-sm grid sm:grid-cols-2 rounded-lg bg-gray-200'>
      
    
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="light"
      />


      <button onClick={() => _show(!show)} className='items-center px-2 rounded-sm col-span-full flex justify-between bg-gray-300 active:bg-black active:text-white'>
        Products
        <RiArrowDropDownLine className={(show) ? "rotate-180 " : ""} />
      </button>
      <div className={`${(!show) ? "h-0" : "animate-redheight"} w-full pl-1 h-fit col-span-full shrink-0 overflow-x-auto overflow-hidden flex flex-row`}>
        {
          order.products.map((prod,ind) => {
            return product(prod,ind);
          })
        }
      </div>
      <span>amount:  &#8377; {order.amount}</span>
      <span>status:
        <select defaultValue={order.status} onChange={changestatus} id="small" className="ml-4 outline-none w-fit text-mc text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus">
          <option value="Pending">Pending</option>
          <option value="Dispatched">Dispatched</option>
          <option value="Out for delivery">Out for delivery</option>
          <option value="Delivered">Delivered</option>
        </select>
      </span>

      <span>email: {order.email}</span>
      <span>phone: {order.phone}</span>
      <span>name: {order.name.first} {order.name.last}</span>
      <p className='col-span-full rounded-md bg-gray-300'>address: {order.address}</p>

    </div>
  )
}

export default OrderTab