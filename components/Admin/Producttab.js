import React from 'react'

const products = [
  {name:"Laptops",image:"/images/laptop1.jpg",category:"Laptop"},
  {name:"Phones",image:"/images/phones1.jpg",category:"Phone"},
  {name:"Cloths",image:"/images/cloths1.jpg",category:"Cloth"},
  {name:"Mugs",image:"/images/mugs1.jpg",category:"Mug"}
]


function Producttab(props) {
  
const getcategory = async (cat)=>{
  const response = await fetch(`/api/admin/getcategory?category=${cat}`,{
    method:"GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if(response.status===200){
    props.setlist({category:cat,list:data});
  }
  else props.setlist({category:"Invalid Input",list:[]});
  
}

  return (
    <div className="w-full my-2 rounded-lg flex justify-start space-x-2 items-center pl-2 border-2 p-2 overflow-hidden overflow-x-auto">
    { products.map((product,ind)=>{
        return  <button onClick={()=>getcategory(product.category)} key={ind} className="bg-cover p-4 rounded-lg " style={{backgroundImage: `url(${product.image})`}} >
      <div className="text-white bg-black/30">{product.name}</div>
    </button>
    })
     
    }

    
  </div>
  )
}

export default Producttab
