import React from 'react'

const Button = ({handleClick, settext}) => {
  let smallText = 'woowo'

  let obj = {}

  function changeText(){
    settext(smallText)
  }
  return (
    <div>
        <button onClick={handleClick} style={{padding: '10px 20px'}}>Click ME</button>
        
        <button onClick={changeText}>Click me again</button>
    </div>
  )
}

export default Button