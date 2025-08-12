import React from 'react'

const Profilecard = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <img src={props.imageurl} alt={props.name} />
    </div>
  )
}

export default Profilecard