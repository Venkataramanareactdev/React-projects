import React, { useState } from 'react'

const Login = () => {
    const [login,setLogin]=useState(true)
  return (
    <div>
      <h3>{login ? "welcome user":"please log in"}</h3>
      <button onClick={()=>setLogin(!login)}>
      {login ?"Login":"Logout"}</button>
    </div>
  )
}

export default Login
