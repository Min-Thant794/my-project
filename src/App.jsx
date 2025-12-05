import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Login from './pages/Login'
import Cars from './pages/Cars'
import Home from './pages/home'
import Locations from './pages/Locations'
import Rates from './pages/Rates'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/cars' element={<Cars/>}/>
          <Route path='/locations' element={<Locations/>}/>
          <Route path='/rates' element={<Rates/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App