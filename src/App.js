import React from 'react'
import { Routes, Route  } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import DashPanel from './dashboard/DashPanel'

const App = () => {
  return (
    <>
      <div className='font-abc min-h-screen '>
        <NavBar />
        <Routes>
          <Route path='/' element= {<Home/ >} /> 
          <Route path='/Signup' element= {<Signup/ >} /> 
          <Route path='/Login' element= {<Login />} /> 
          <Route path='/ForgotPassword' element= {<ForgotPassword />} /> 
        </Routes>
        <Footer />
        {/* <DashPanel /> */}
      </div>
    </>
  )
}

export default App
