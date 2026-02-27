import React, { useEffect, useState } from 'react'
import defaultImage from '../assets/default image.png'
import CarDetails from '../modals/CarDetails';

const BestDeals = ({discountedCar}) => {

  const [selectedCarId, setSelectedCarId] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(!selectedCarId) return;
    const fetchCar = async () => {
      setIsLoading(true);
      setSelectedCar(null); //remove previous response car data
      try {
        const response = await getCarById(selectedCarId);
        setSelectedCar(response.data);
      } catch (error) {
        console.log("An Fetching getCarById", error);
      }
    };

    fetchCar();
  }, [selectedCarId])

  return (
    <div className='px-25 mt-20'>
      <div className='text-4xl font-bold tracking-wide text-center'>
        BEST DEALS
      </div>
      <div className='px-55 text-center text-lg mt-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore enim quisquam praesentium asperiores quo at dolores perferendis corporis, quidem molestias, provident vero veritatis tempora quae nulla. Sit atque incidunt tempore.
      </div>
      <div className='grid grid-cols-3 gap-5 my-10'>
      {
        discountedCar.map((car) => {
          return (<div
            key={car._id}
            className='flex transition-all duration-700 hover:translate-1 flex-col w-full h-full gap-3 bg-[#d6d6d6] rounded-xl shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] px-5 pt-5'>
                <div className='flex justify-between items-center'>
                    <div className='text-xl font-bold'>{car.carName}</div>
                    {
                        car?.discount &&
                        <div className='flex items-center w-3/10 text-center'>
                            <div className='font-bold h-full w-full bg-footer text-amber-50 py-1 select-none px-2 shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full'>{car.discount}% OFF</div>
                        </div>
                    }
                </div>
                <div className='flex justify-between text-sm items-center mt-3'>
                    <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{car?.fuelType}</div>
                    <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{car?.vehicleType}</div>
                </div>
                <div className='flex justify-between text-sm items-center mt-2'>
                    <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{car?.seater} seater</div>
                    <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{car?.pricePerDay}$/day</div>
                </div>
                <div className='w-full h-full my-5'>
                    <img src={car?.carImageUrl || defaultImage} alt="" className='w-full h-full shadow-gray-700 shadow-[0_5px_10px_-3px_rgba(0,0,0,0.3)] object-fit rounded-xl' />
                </div>
                <div 
                onClick={() => setSelectedCarId(car._id)}
                className='bg-footer mb-5 transition-all hover:-translate-y-0.5 duration-300 hover:opacity-90 active:opacity-65 text-amber-50 text-center rounded-full font-semibold shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] shadow-gray-700 cursor-pointer tracking-wide py-2'>
                Book Now
                </div>
            </div>
        )})
      }
      </div>
      {
        selectedCarId && (
          <CarDetails
          selectedCarId={selectedCarId}
          setSelectedCarId={setSelectedCarId}
          selectedCar={selectedCar}
          />
        )
      }
    </div>
  )
}

export default BestDeals