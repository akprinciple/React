import React, { useState } from 'react'
import image1 from '/banner.jpg'

const StateLearn = () => {
  const [state, setState] = useState('selim')
  const [data, setData] = useState(66)

  // setState('ahmed')
  function handleClick(){
    setState('ahmed')
  }
  console.log(state);

  return (
    <div>
      <img src="/banner.jpg" alt="" width={300} height={300} />

      {state}
      
      <button onClick={handleClick}>Change Name</button>
    </div>
  )
}

export default StateLearn