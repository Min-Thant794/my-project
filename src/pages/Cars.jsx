import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import FilterCar from '../components/FilterCar'
import SearchVehicle from '../components/SearchVehicle'

const Cars = () => {
  return (
    <div className=''>
      <NavBar/>
      <div className='px-25'>
        <div className='w-full text-center mt-15 text-3xl font-bold'>
          Find Your Perfect Ride Today
        </div>
        <SearchBar/>
      </div>
      <div className='my-10 grid grid-cols-7'>
        <FilterCar/>
        <SearchVehicle/>
      </div>
      <Footer/>
    </div>
  )
}

export default Cars