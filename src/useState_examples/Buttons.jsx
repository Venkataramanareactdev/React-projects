import React, { useState } from 'react'

const Buttons = () => {
  const[count, setcount]= useState(0)
  return (
    <div>
        <p>Count:{count}</p>
      <button onClick={()=>setcount(count + 1) }> increase</button>
      <button onClick={()=>count > 0 && setcount(count - 1) }>decrease</button>
      <button onClick={()=>setcount(0) }>Reset</button>
 </div>
  )
  }
export default Buttons
