import React from 'react'

const Employeedetails = ({name,title,company}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{title}</p>
      <p>{company}</p>
    </div>
  )
}

export default Employeedetails
