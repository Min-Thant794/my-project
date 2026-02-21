import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Carousel from '../components/HomePageCarousel'
import RideYourBook from '../components/RideYourBook'
import BestDeals from '../components/BestDeals'
import FAQs from '../components/FAQs'
import GetInTouch from '../components/GetInTouch'

const home = () => {
  return (
    <div className='w-full'>
    <NavBar/>
    <Carousel/>
    <RideYourBook/>
    <BestDeals/>
    <FAQs/>
    <GetInTouch/>
    <Footer/>
    </div>
  )
}

export default home