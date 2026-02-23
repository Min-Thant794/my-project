import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import { ToastContainer } from 'react-toastify'
import Login from './pages/Login'
import Home from './pages/Home'
import Deals from './pages/Deals'
import Cars from './pages/Cars'
import Booking from './pages/Booking'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/deals' element={<Deals/>}/>
          <Route path='/cars' element={<Cars/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App