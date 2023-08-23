import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Banner from './components/banner'
import Footer from './components/footer'
// import './App.css'

function App() {
  return(
    <><nav className='nav bg-success'>
      <a href="" className='nav-link text-light'>Home</a>
      <a href="" className='nav-link text-light'>Get Started</a>
      <a href="" className='nav-link text-light'>About us</a>
      <a href="" className='nav-link text-light bg-danger'>Logout</a>
    </nav>
    <h1 className='w-50 mx-auto text-success'>
        <marquee behavior="alternate" direction="">Welcome to my World</marquee>
      </h1>

      <Banner />

<h4 className='text-center mt-3 border-bottom'>Content</h4>
      <div className='row justify-content-around mx-0 text-justify'>
          <div className="col-md-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, ad autem corrupti nostrum veniam expedita neque saepe, consequuntur magni quam quod esse exercitationem sint optio aperiam labore distinctio? Libero, eligendi.
          </div>
          <div className="col-md-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, ad autem corrupti nostrum veniam expedita neque saepe, consequuntur magni quam quod esse exercitationem sint optio aperiam labore distinctio? Libero, eligendi.

          </div>
          <div className="col-md-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, ad autem corrupti nostrum veniam expedita neque saepe, consequuntur magni quam quod esse exercitationem sint optio aperiam labore distinctio? Libero, eligendi.

          </div>
      </div>
      <Footer />
      </>
  )
}

export default App
