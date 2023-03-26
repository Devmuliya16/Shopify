import React, { useState } from 'react'
import Login from 'components/auth/login'
import Signup from 'components/auth/signup'
import Loading from "./loading"


function login() {
  const [tog,_tog] = useState(true);
  const [loading,_loading] = useState(false);
  if(loading)
  return <div className='w-14 h-14 m-auto animate-spin rounded-full border-4 border-l-black my-[200px]'></div>;
  return (
    <>
    {(tog) ? <Login tog={()=>_tog(false)} setloading={(set)=>_loading(set)}/> : <Signup tog={()=>_tog(true)} setloading={(set)=>_loading(set)}/>}
    </>
  )
}

export default login
