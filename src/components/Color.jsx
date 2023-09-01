import React, { useState } from 'react'

const Color = () => {
    const [color, setColor] = useState()

    const body = document.querySelector('body')
    function changeColor (){
        setColor(col.value)
        body.style.backgroundColor = color
    }
    const [text, setText] = useState()
    function changeTextColor() {
        setText(textColor.value)
        body.style.color = text

    }
  return (
    <div className='w-50'>
        <label htmlFor="">Change Background Color</label>
        <input type="color" name="" id="col" className='form-control' onChange={changeColor}/>

        <label htmlFor="">Change Text Color</label>
        <input type="color" name="" id="textColor" className='form-control' onChange={changeTextColor}/>
    </div>
  )
}

export default Color