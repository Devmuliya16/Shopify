import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";
import Router from 'next/router'
import { useEffect, useState } from "react";





export default function App({ Component, pageProps }) {

  const [loading,_loading] = useState(false);
  useEffect(()=>{
    if(!localStorage.getItem('Cart'))
    localStorage.setItem('Cart',[]);
    
    Router.events.on("routeChangeStart",()=>{_loading(true)});
    Router.events.on("routeChangeComplete",()=>{_loading(false)});
  },[])



  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
          />
      </Head>
        {loading && <div className="h-1 absolute top-0 w-full bg-gradient-to-r from-gray-500 to-black animate-pulse"></div>}
      <Navbar/>
      <Component {...pageProps}/>
      <Footer />
    </>  
  );
}
