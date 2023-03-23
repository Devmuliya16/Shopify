import React, { useState } from 'react'
import Login from 'components/auth/login'
import Signup from 'components/auth/signup'


function login() {
  const [tog,_tog] = useState(true);
  
  return (
    <>
    {(tog) ? <Login tog={()=>_tog(false)}/> : <Signup tog={()=>_tog(true)}/>}
    </>
  )
}

export default login
