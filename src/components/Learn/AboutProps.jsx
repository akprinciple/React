import React from 'react'
import Nested from './Nested'

const AboutProps = ({person, greeting}) => {
    console.log(person, greeting);


    let obj = {name: 'oslim', email: 'oslim@gmail.com'}
    let anme = 'tstsin'


    const {name, email} = obj
    console.log(name, email);

  return (
    <div>AboutProps &nbsp; {person}
        
        <Nested/>
    </div>
  )
}

export default AboutProps