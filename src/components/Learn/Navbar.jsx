import React, { useState } from 'react'
import Button from './Button'

const Navbar = () => {
    const [text, settext] = useState('this tecxt must change')

    function handleClick(){
        settext(Math.floor(Math.random() * 300))
    }
  return (
    <div>Navbar


    <p>{text}</p>
        <Button settext={settext} handleClick={handleClick}/>
    </div>
  )
}

export default Navbar