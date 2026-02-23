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
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/PageTransition'

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    /* mode="wait" ensures the current page fades out before the next one fades in */
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/login' element={<PageTransition><Login/></PageTransition>}/>
        <Route path='/' element={<PageTransition><Home/></PageTransition>}/>
        <Route path='/deals' element={<PageTransition><Deals/></PageTransition>}/>
        <Route path='/cars' element={<PageTransition><Cars/></PageTransition>}/>
        <Route path='/booking' element={<PageTransition><Booking/></PageTransition>}/>
        <Route path='/about-us' element={<PageTransition><AboutUs/></PageTransition>}/>
        <Route path='/*' element={<PageTransition><NotFound/></PageTransition>}/>
      </Routes>
    </AnimatePresence>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App