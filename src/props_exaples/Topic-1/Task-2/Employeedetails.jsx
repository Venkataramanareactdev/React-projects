import React from 'react'

const Employeedetails = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.title}</p>
      <p>{props.company}</p>
    </div>
  )
}

export default Employeedetails
