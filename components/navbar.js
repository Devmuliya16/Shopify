import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import Cart from "./cart/cart.js";
import { useRouter } from "next/router";
import Product from "./product.js";
import { motion } from "framer-motion";

import { FaStaylinked ,FaCartArrowDown} from "react-icons/fa";
import { BiUserCircle, BiSearch } from "react-icons/bi";
import {AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'

const searchItem = async (search) => {
  const response = await fetch(`/api/Search?search=${search}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (response.status === 200) return data;
  return [];
};

function navbar() {
  const ref = useRef();
  const router = useRouter();
  const [user, _user] = useState(true);
  const [items, _items] = useState([]);
  const [show, _show] = useState(false);
  const [load, _load] = useState(0);
  const [search, _search] = useState([]);
  const [togsearch, _togsearch] = useState(false);
  const [ismobile,_ismobile] = useState(false);

  const togglecart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
      _items(JSON.parse(localStorage.getItem("Cart")) || []);
    } else {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const logout = () => {
    localStorage.removeItem("Auth");
    // localStorage.setItem("Cart","[]");
    router.push("/");
    window.location.reload();
  };
  useEffect(() => {
    router.events.on("routeChangeStart", () => _load(100));
    router.events.on("routeChangeComplete", () => _load(0));
    _user(localStorage.getItem("Auth"));
  }, [router.pathname]);

  const changesearch = async (e) => {
    if (e.target.value === "") _search([]);
    else _search(await searchItem(e.target.value));
  };

  

  return (
    <>
    <nav>
      <div
        className={`${styles.nav}  m-auto duration-1000 w-full   flex-row items-center flex justify-between flex-wrap p-2 drop-shadow-lg`}
      >
        <Link href="/">
          <button className="text-xl flex items-center">
            <FaStaylinked /> Shopify
          </button>
        </Link>
       {!togsearch && <ul className="hidden sm:flex flex-row  sm:space-x-8 items-center">
          <Link href="/laptops">
            <li>Laptops</li>
          </Link>
          <Link href="/phones">
            <li>Phones</li>
          </Link>
          <Link href="/cloths">
            <li>Cloths</li>
          </Link>
          <Link href="/mugs">
            <li>Mugs</li>
          </Link>
        </ul>}
       {ismobile && <ul className="sm:hidden space-y-2 animate-dropdown bg-white/90  absolute overflow-hidden top-12 left-0  flex flex-col w-full p-4">
          <Link href="/laptops">
            <li>Laptops</li>
          </Link>
          <Link href="/phones">
            <li>Phones</li>
          </Link>
          <Link href="/cloths">
            <li>Cloths</li>
          </Link>
          <Link href="/mugs">
            <li>Mugs</li>
          </Link>
        </ul>}

        {togsearch && <form className="w-1/2 flex items-stretch h-8">
          <input
            type="search"
            id="default-search"
            className="block w-full text-black outline-none p-4 text-sm  rounded-lg hover:bg-gray-100 focus:ring-black/20 focus:ring-2"
            placeholder="Search Products"
            onChange={changesearch}
            required
          />
            <button className="text-xl" onClick={()=>{_togsearch(false); _search([])}}><AiOutlineClose/></button>
     
        </form>}
        <div className={`${togsearch && "hidden"} flex flex-wrap text-2xl items-center space-x-2`}>
          {!togsearch && <button onClick={()=>_togsearch(true)}><BiSearch/></button>}
          {user && (
            <button onClick={togglecart}>
              <FaCartArrowDown />
            </button>
          )}
          <div
            className="flex"
            onMouseOver={() => {
              _show(true);
            }}
            onMouseOut={() => {
              _show(false);
            }}
          >
            <button>
              <BiUserCircle />
            </button>

            {show && (
              <div className="absolute text-sm w-fit flex flex-col items-start top-10 right-2 rounded-lg text-white bg-black p-2">
                <button>My Account</button>
                <Link href="/order">Orders</Link>
                {user && <button onClick={logout}>Logout</button>}
                {!user && <Link href={"/auth"}>Login</Link>}
              </div>
            )}
          </div>
            <button className=" sm:hidden" onClick={()=>_ismobile(!ismobile)}><GiHamburgerMenu /></button>
        </div>
      </div>

      <div
        ref={ref}
        className="fixed duration-500 z-[500] top-0 right-0 w-full translate-x-full h-full backdrop-blur-[5px] ease-in-out"
      >
        <Cart togglecart={togglecart} list={items} />
      </div>
    </nav>
     {search.length !== 0 && (
       <motion.div initial={{ x:-100, opacity: 0 }}
       whileInView={{x:0, opacity: 1 }} className="absolute z-20 h-screen shadow-2xl text-sm space-y-4 bg-white p-8 flex flex-col items-center overflow-hidden overflow-y-auto">
        {search.map((item, key) => (
          <Link href={`/product/${item._id}`} onClick={()=>_search([])}><Product key={key} item={item} /></Link>
          ))}
      </motion.div>
    )}
    </>
  );
}

export default navbar;
