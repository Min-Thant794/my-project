import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Carousel from '../components/HomePageCarousel'
import RideYourBook from '../components/RideYourBook'
import BestDeals from '../components/BestDeals'
import FAQs from '../components/FAQs'
import GetInTouch from '../components/GetInTouch'
import { getCarsByDiscount } from '../services/car.service'
import { toast } from 'react-toastify'

const Home = () => {

  const [discountedCar, setDiscountedCar] = useState([]);

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
  }, []);
  
  return (
    <div className='w-full'>
    <NavBar/>
    <Carousel/>
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