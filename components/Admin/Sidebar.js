import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import  { useRouter } from 'next/router'

import { FaStaylinked } from "react-icons/fa";
import styles from '@/styles/Home.module.css'
import {AiOutlineHome,AiOutlineAppstoreAdd} from 'react-icons/ai'
import {BiCoinStack,BiArrowBack} from 'react-icons/bi'
import {RxDashboard} from 'react-icons/rx'
const pages = [
    {id:0,name:'Home',logo:AiOutlineHome,link:"/Admin/home"},
    {id:1,name:'Orders',logo:BiCoinStack,link:"/Admin/orders"},
    {id:2,name:'Upload products',logo:AiOutlineAppstoreAdd,link:"/Admin/add"},
    {id:3,name:'View products',logo:RxDashboard,link:"/Admin/products"},
    {id:4,name:"Back to Website",logo:BiArrowBack,link:"/"}
];



function Sidebar() {
  const router = useRouter();
  const [show,_show] = useState(false);
  useEffect(()=>(window.innerWidth < 640) ? _show(false) : _show(true),[])

  return (
    <div className='flex flex-col bg-gray-300 h-full space-y-4 p-2 pt-4'>
        <div className='flex items-center text-3xl mb-2'>
            <FaStaylinked className='m-2 shrink-0'/> {show && "Shopify"}
        </div>
      {
        pages.map((tab,key)=>{
            return <Link href={tab.link} key={key} className={`${styles.sidebtn} 
            ${(router.pathname===tab.link)? "bg-black rounded-lg text-white" : ""}`}
            >
                <tab.logo className='m-2 shrink-0'/>
                {show && tab.name}
            </Link>
        })
      }
    </div>
  )
}

export default Sidebar
