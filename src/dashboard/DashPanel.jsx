import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Upload from '../pages/Upload'
import DashboardPage from '../pages/DashboardPage'
import Sidebar from '../components/Sidebar'

const DashPanel = () => {
  return (
    <div className='h-full w-full'>
      <NavBar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/Upload' element={<Upload />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default DashPanel
