import React from "react";
import ProductModel from "@/backend/models/Productmodel";
import db from "@/backend/db";
import router from 'next/router'
import {motion} from 'framer-motion'

function cloths(props) {
  const list = JSON.parse(props.data);
  const redirect = (id)=>{
    router.push(`/product/${id}`);
  }
  return (
    <motion.div initial={{x:-1000, opacity: 0 }} animate={{x:0, opacity: 1 }} className="text-gray-600 body-font">
  <div className="container px-5 py-4 mx-auto">
      <div className="m-5 font-bold text-3xl">cloths</div>
    <div className="flex flex-wrap -m-4">
    {list.map((item, ind) => {
            return (
              <div onClick={()=>redirect(item._id)} className="lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-gray-100 duration-300  hover:relative hover:-translate-y-6" key={ind}>
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={item.image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {item.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {item.title}
                  </h2>
                  <p className="mt-1">{item.price}</p>
                </div>
              </div>
            );
          })}
    </div>
  </div>
</motion.div>
  )
}


export async function getStaticProps() {
  db();
  let data = await ProductModel.find({ category: "Cloth" });
  data = JSON.stringify(data);
  return {
    props: { data },
  };
}

export default cloths
