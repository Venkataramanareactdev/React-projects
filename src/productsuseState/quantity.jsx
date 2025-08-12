import React, { useState } from 'react'

const Quantity = (props) => {
const[Quantitys, setquantity]=useState(0)
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.price}</p>
       <p>Quantity : {Quantitys}</p>
      <p>total : {Quantitys * props.price}</p>
      <button onClick={()=> setquantity(Quantitys+1)}>Increase</button>
      <button onClick={()=> setquantity(Quantitys-1)}>Decrease</button>
    </div>
  )
}
export default Quantity
