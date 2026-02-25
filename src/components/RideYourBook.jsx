import React, { useEffect, useState } from 'react'
import DefaultImage from '../assets/default image.png'
import { getAllCars } from '../services/car.service'
import { toast } from 'react-toastify';

const RideYourBook = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [car, setCar] = useState([]);

  const fetchCarImg = async () => {
    try {
        setIsLoading(true);
        const response = await getAllCars();

        if(!response.success) {
            toast.error("Unable to fetch cars");
        }

        const fetchedCar = response?.data;
        setCar(fetchedCar);
    } catch (error) {
        console.log("An Error Occurred at fetchCarImg()", error);
        return;
    } finally {
        setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCarImg();
  }, []);

  return (
    <div className='grid grid-cols-2 justify-between px-25 my-7'>
        <div className='flex flex-col gap-3 justify-between mr-40'>
            <div className='flex flex-col gap-5'>
                <div className='font-extrabold text-4xl italic font-serif'>
                The Keys to the City, right in Your Pocket
                </div>
                <div className='tracking-wide text-lg'>
                    Unlock a car in seconds with Let's Drive. No long queues, no heavy paperwork! Just seamless mobility for your everyday needs.
                </div>
            </div>
            <div className='bg-footer text-amber-50 font-semibold p-2 text-center rounded-md shadow-xl w-3/10 cursor-pointer active:opacity-65 hover:opacity-90'>
                Book Your Ride
            </div>
        </div>
        <div className='w-full max-h-80'>
            <img src={ car?.[0]?.carImageUrl || DefaultImage} alt="" className='w-full h-full object-fit rounded-md shadow-gray-700 shadow-[0_5px_10px_-5px_rgba(0,0,0,0.3)]' />
        </div>
    </div>
  )
}

export default RideYourBook