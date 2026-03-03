import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
//import { ToastContainer } from 'react-toastify'
import Login from './pages/Login'
import Home from './pages/Home'
import Deals from './pages/Deals'
import Cars from './pages/Cars'
import Booking from './pages/Booking'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NotFound'
import PasswordReset from './pages/PasswordReset'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/PageTransition'
import { ToastContainer } from 'react-toastify'
import Layout from './layouts/Layout'

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    /* mode="wait" ensures the current page fades out before the next one fades in */
    <AnimatePresence mode="wait">

      <Route path='reset-password' element={<PageTransition><PasswordReset/></PageTransition>}/>

      <Routes location={location} key={location.pathname}>
        <Route element={<Layout/>}>
          <Route path='/login' element={<PageTransition><Login/></PageTransition>}/>
          <Route path='/' element={<PageTransition><Home/></PageTransition>}/>
          <Route path='/deals' element={<PageTransition><Deals/></PageTransition>}/>
          <Route path='/cars' element={<PageTransition><Cars/></PageTransition>}/>
          <Route path='/booking' element={<PageTransition><Booking/></PageTransition>}/>
          <Route path='/about-us' element={<PageTransition><AboutUs/></PageTransition>}/>
          
          <Route path='*' element={<PageTransition><NotFound/></PageTransition>}/>
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastContainer/>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App