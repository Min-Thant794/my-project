import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { addDays } from 'date-fns';
import CarDetails from '../modals/CarDetails';
import { useNavigate } from 'react-router-dom';

const HomePageCarousel = ({allCars = [], clickMode = "modal"}) => {

  const navigate = useNavigate();
  const slides = useMemo(() => allCars.slice(0, 5), [allCars]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedCar, setSelectedCar] = useState(null);

  const minDate = useMemo(() => addDays(new Date(), 1), []);
  const maxDate = useMemo(() => addDays(new Date(), 90), []);
  const [range, setRange] = useState([
    { startDate: minDate, endDate: addDays(minDate, 1), key: "selection" },
  ]);

  const closeCarDetails = useCallback(() => {
    setRange([{ startDate: minDate, endDate: addDays(minDate, 1), key: "selection" }]);
    setSelectedCar(null);
  }, [minDate]);

  useEffect(() => {
    if (clickMode === "navigate") {
      setSelectedCar(null);
    }
  }, [clickMode]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSlideClick = (car) => {
    if (clickMode === "navigate") {
      navigate(`/cars?carId=${car._id}`);
      return;
    }
    setSelectedCar(car);
  };

  if(slides.length === 0) {
    return (
      <div className='relative w-7.10 mx-auto mt-5 md:p-5 rounded-md flex flex-col items-center'>
        <div className='w-full aspcet-video rounded-3xl overflow-hidden flex items-center justify-center text-gray-500'>
          No Cars to show
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-7/10 mx-auto mt-5 md:p-5 rounded-md flex flex-col items-center">
      <div className="w-full h-full aspect-video rounded-3xl overflow-hidden relative shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]">
        <div
          className="flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((car) => (
            <div key={car._id} 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleSlideClick(car)
            }}
            className="min-w-full h-full relative">
              <img
                src={car?.carImageUrl || defaultImage}
                alt={car?.carName || "car"}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/35 flex flex-col justify-end p-6">
                <div className="flex items-end justify-between">
                  <div className="text-white">
                    <div className="text-3xl font-bold">{car?.carName}</div>
                    <div className="text-base opacity-90">
                      S$ {car?.pricePerDay} /Day • {car?.vehicleType} • {car?.fuelType}
                    </div>
                  </div>

                  {!!car?.discount && car.discount > 0 && (
                    <div className="bg-footer text-amber-50 font-bold px-4 py-2 rounded-full shadow-xl">
                      {car.discount}% OFF
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((car, index) => (
            <button
              key={car._id}
              onClick={() => setCurrentIndex(index)}
              className={`w-3.5 h-3.5 cursor-pointer rounded-full transition-colors duration-300 z-10 ${
                currentIndex === index ? "bg-footer" : "bg-[#eaeaea] hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
       {clickMode === "modal" && selectedCar && (
        <CarDetails
          selectedCarId={selectedCar._id}
          setSelectedCarId={() => setSelectedCar(null)}
          selectedCar={selectedCar}
          range={range}
          setRange={setRange}
          minDate={minDate}
          maxDate={maxDate}
          onClose={() => setSelectedCar(null)}
          onBookingSuccess={() => {
            closeCarDetails();
          }}
        />
      )}
    </div>
  );
};

export default HomePageCarousel;