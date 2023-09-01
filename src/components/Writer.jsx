import React, { useState } from 'react'
import Color from './Color'

const Writer = () => {
    const [name, setName] = useState()
    function type() {
        
        setName(inputBox.value)
    }
  return (
    <div className='row mx-0 px-3'>

    <div className='w-50 mt-4'>
        <h5>{name}</h5>
        <input type="text" id='inputBox' className="form-control" placeholder='Enter Your name' onChange={type}/>
    </div>
    <Color />
    </div>
  )
}

export default Writer