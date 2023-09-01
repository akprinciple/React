import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    async function handclick(e) {
        e.preventDefault();
        const send = {name, email, password}
        // console.log(send);
        const data = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {'Content-Type': 'Application/json'}, 
            body: JSON.stringify(send)
        })
        // console.log(data);
       const act = await data.json();
       console.log('Message: Hello', act);
        
    }
  return (
    <form className='w-100 mt-4' onSubmit={handclick}>

    <div className='col-md-6 mx-auto'>
        <label htmlFor="">Name</label>
        <input type="text" className='form-control' name='name' placeholder='Name' onChange={(e)=>setName(e.target.value)} />

        <label htmlFor="">Email</label>
        <input type="email" className='form-control' name='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />

        <label htmlFor="">Password</label>
        <input type="password" className='form-control' name='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />

        <button className='btn btn-success mt-3'>Submit</button>
    </div>
    </form>
  )
}

export default Contact

// Ben64103 github