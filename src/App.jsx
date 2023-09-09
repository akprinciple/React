import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Banner from './components/banner'
import Footer from './components/footer'
import Prop from './components/Prop'
import Prop2 from './components/Prop2'
import Prop3 from './components/Prop3'
import StateLearn from './components/StateLearn'
import Counter from './components/Counter'
import Contact from './components/Contact'
import Writer from './components/Writer'
import AboutProps from './components/Learn/AboutProps'
import Navbar from './components/Learn/Navbar'
// import './App.css'

function App() {
  let name = 'Hameed'
  let password = '@1234'

  let user = 'oslimn'
  return(
    <>
    {/* <nav className='nav bg-success'>
      <a href="" className='nav-link text-light'>Home</a>
      <a href="" className='nav-link text-light'>Get Started</a>
      <a href="" className='nav-link text-light'>About us</a>
      <a href="" className='nav-link text-light bg-danger'>Logout</a>
    </nav>
    <h1 className='w-50 mx-auto text-success'>
        <marquee behavior="alternate" direction="">Welcome to my World</marquee>
      </h1>

      <Banner />
      <div className='row mx-0'>

      <Prop />
      <Prop2 name={name} password={password} />

      <Contact />
      </div>
      <Writer />
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
      <Footer /> */}
      <AboutProps person={user} greeting={'hello world'} />

      <Navbar/>
      </>
      // <div>
      //   <StateLearn/>
      //   <Counter/>
      // </div>
  )
}

export default App
