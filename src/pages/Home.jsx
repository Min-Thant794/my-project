import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Carousel from '../components/HomePageCarousel'
import RideYourBook from '../components/RideYourBook'
import BestDeals from '../components/BestDeals'
import FAQs from '../components/FAQs'
import GetInTouch from '../components/GetInTouch'
import { getAllCars, getCarsByDiscount } from '../services/car.service'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'

const Home = () => {

  const [discountedCar, setDiscountedCar] = useState([]);
  const [allCars, setAllCars] = useState([]);

  const fetchAllCars = async () => {
    try {
      const response = await getAllCars();

      if(!response.success) {
        return;
      }

      setAllCars(response?.data || []);
    } catch (error) {
      console.log("An Error Occurred at fetchAllCars", error);
      return;
    }
  }

  const fetchDealCars = async () => {
    try {
      const response = await getCarsByDiscount({ limit: 6, page: 1});

      if(!response) {
        toast.error("Failed to fetch discounted car");
        console.log("Failed to fetch discounted car");
        return;
      }
      
      setDiscountedCar(response?.data || []);
      console.log("discounted car response: ", response?.data);
    } catch (error) {
      console.log("An Error Occurred at fetchDealCars!");
      toast.error("Unable to fetch discounted car");
      return error;
    }
  }

  useEffect(() => {
    fetchDealCars();
    fetchAllCars();
  }, []);
  
  return (
    <div className='w-full'>
    <NavBar/>
    <Carousel
    allCars={allCars}
    clickMode='navigate'
    />
    <RideYourBook/>
    <BestDeals
    discountedCar={discountedCar}
    />
    <FAQs/>
    <GetInTouch/>
    <Footer/>
    </div>
  )
}

export default Home