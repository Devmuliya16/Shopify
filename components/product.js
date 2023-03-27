import React from 'react'

const deleteItem =async (id)=>{
    const response = await fetch(`/api/admin/delete?id=${id}`,{
      method:"DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data =  await response.json();
    if(response.status===200)
    window.alert(`Product ${data.title} is deleted successfully`);
  }


function Product(props) {
  return (
    <div className="bg-gray-200 w-full flex flex-col sm:flex-row items-center p-4 rounded-lg">
    <img src={props.item.image} alt={props.item.category} className="object-fill h-4/6 rounded-lg w-1/6"/>
    <div className="w-full gap-4 grid  sm:grid-cols-2 px-6 py-2">
      <span className="text-xl font-bold">{props.item.title}</span>
      <span className="text-sm m-auto">{props.item.category}</span>
      <p className="col-span-full p-2 text-sm rounded-lg bg-gray-300">{props.item.desc}</p>
      <span className="bg-black rounded-lg text-white p-2">Price: &#8377;{props.item.price}</span>
      <span className="border-black border-2 rounded-lg p-2">Stock: {props.item.inStock}</span>
    </div>

  </div>
  )
}

export default Product
