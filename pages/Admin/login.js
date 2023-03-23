import React,{useState} from 'react'
import { useRouter } from 'next/router';
import {FaStaylinked} from 'react-icons/fa'
import Link from 'next/link';




function setCookie(key,value,duration){
  document.cookie = key + "=" + value +";path=/"+";max-age=" + duration*24*60*60;
}


function login() {
  const [formdata, _formdata] = useState({ email: "", password: "" });
  const change = (e) => {
    _formdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const router = useRouter();
  const Sup = async (data) => {
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dt = await response.json();
    if(response.status ===200){
      localStorage.setItem('Auth',JSON.stringify(dt));
      setCookie('Auth',dt.token,7);
      router.push('/Admin/home')
    }else{
      localStorage.removeItem('Auth')
    }
  };
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
    <div className="flex flex-col w-2/6 p-4 my-40 m-auto">
      <FaStaylinked className="text-[50px] m-auto" />
      <div className="text-center text-3xl">Admin - Login</div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          onChange={change}
          value={formdata.email}
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="password" className="leading-7 text-sm text-gray-600">
          Password
        </label>
        <input
          type="password"
          onChange={change}
          value={formdata.password}
          id="password"
          name="password"
          className="w-full bg-white rounded border focus:border-gray-500 focus:ring-2 focus:ring-gray-200  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>

      <button className="border-2 border-black p-2 rounded-lg hover:bg-black hover:text-white" onClick={()=>Sup(formdata)}>
        Login
      </button>
      <Link href={"/"}>Go Back</Link>
    </div>
    </>
  )
}

export default login