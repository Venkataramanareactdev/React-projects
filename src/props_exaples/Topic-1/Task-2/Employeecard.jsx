import React from 'react'
import Employeedetails from './Employeedetails'

const Employeecard = () => {
  return (
    <div>
      <Employeedetails
      name="Anil"
      title="Devloper"
      company="tcs"
      
      />

      <Employeedetails
        name="Sita"
        title="Tester"
        company="Infoys"
      />

     
    </div>
  )
}

export default Employeecard
