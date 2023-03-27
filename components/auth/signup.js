import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaStaylinked } from "react-icons/fa";




function signup(props) {
  const [formdata, _formdata] = useState({ name: "", email: "", password: "" });
  const change = (e) => {
    _formdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const router = useRouter();

  const Sup = async (data) => {
    props.setloading(true);
    const response = await fetch("/api/Signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dt = await response.json();
    if(response.status===200) {
      localStorage.setItem('Auth',JSON.stringify(dt));
      localStorage.setItem('Cart',"[]");
      router.push('/');
    }
    else{
      localStorage.removeItem('Auth')
      localStorage.removeItem('Cart');
      window.alert(dt.message);
    }
    props.setloading(false);

  };
  return (
    <div className="flex flex-col w-2/6 p-4 my-36 m-auto">
      <FaStaylinked className="text-[50px] m-auto" />
      <div className="text-center text-3xl">Signup</div>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          onChange={change}
          value={formdata.name}
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          onChange={change}
          value={formdata.email}
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border focus:border-gray-500 focus:ring-2 focus:ring-gray-200  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="password" className="leading-7 text-sm text-gray-600">
          Password
        </label>
        <input
          onChange={change}
          value={formdata.password}
          type="password"
          id="password"
          name="password"
          className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>

      <button
        className="border-2 border-black p-2 rounded-lg hover:bg-black hover:text-white"
        onClick={() => Sup(formdata)}
      >
        Signup
      </button>
      <p className="text-xs text-gray-500 mt-3">
        Already have account ?{" "}
        <a href="#" onClick={props.tog}>
          click here
        </a>
      </p>
      
    </div>
  );
}

export default signup;
