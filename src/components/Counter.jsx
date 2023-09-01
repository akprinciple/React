import React, { useState } from 'react'
import Prop3 from './Prop3'

const Counter = () => {
    const [number, setNumber] = useState(0)
    
console.log('hello')
    function increNum(){
        setNumber(number + 1)
    }
    function decreMe(){
        setNumber(number - 1)
    }
  return (
    <div>
        <h1>{number}</h1>
        <button onClick={decreMe}>Decreament</button>
    {/* <Prop3/> */}
        <button onClick={increNum}>Increament</button>
    </div>
  )
}

export default Counter