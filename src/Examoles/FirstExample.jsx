import React from 'react'

const FirstExample = (props) => {
  return (
    <div>
      {props.Products.map((prduct ,k)=>(
        <div key={k}>
           {prduct.name} - {prduct.price}
        </div>
      ))}
    </div>
  )
}

export default FirstExample
