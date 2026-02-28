import React, { useEffect, useMemo, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Carousel from '../components/HomePageCarousel'
import defaultImage from '../assets/default image.png'
import { getCarsByDiscount } from '../services/car.service'
import CarDetails from '../modals/CarDetails'
import { addDays } from 'date-fns'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'
import { FaSearch } from 'react-icons/fa'

const Deals = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("contain");
  const [discountedCar, setDiscountedCar] = useState([]);
  const [selectedCarId, setSelectedCarId] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [open, setOpen] = useState(false);

  const minDate = useMemo(() => addDays(new Date(), 1), []);
  const maxDate = useMemo(() => addDays(new Date(), 90), []);

  const [range, setRange] = useState([
    {startDate: minDate, endDate: addDays(minDate, 1), key: "selection"}
  ]);

  const resetRange = () => {
    setRange([{ startDate: minDate, endDate: addDays(minDate, 1), key: "selection" }])
  }

  const discountPercentage = [10, 15, 20, 30, 35, 40, 45, 50];
  const [selectedDiscount, setSelectedDiscount] = useState(null);

  const limit = 12;
  
  const fetchDealCars = async () => {
    try {
      const response = await getCarsByDiscount({ page: currentPage, limit, q: query, mode });

      if (!response?.success) {
        toast.error(response?.message || "Failed to fetch discounted car");
        return;
      }

      const cars = response?.data ?? [];
      const pages = response?.pagination?.totalPages ?? 1;

      setDiscountedCar(cars);
      setTotalPages(pages);
    } catch (error) {
      console.log("An Error Occurred at fetchDealCars!", error);
      toast.error("Unable to fetch discounted car");
    }
  };

  const fetchFilteredCar = async () => {
    try {
      const response = await getCarsByDiscount({
        page: currentPage,
        limit,
        discount: selectedDiscount,
      });

      if (!response?.success) {
        toast.error(response?.message || "Failed to fetch filtered cars");
        return;
      }

      setDiscountedCar(response?.data ?? []);
      setTotalPages(response?.pagination?.totalPages ?? 1);
    } catch (error) {
      console.error("Failed to fetch filtered cars", error);
      toast.error("Unable to fetch filtered cars");
    }
  };

  const openCarDetails = (car) => {
  setSelectedCarId(car._id);
  setSelectedCar(car);
  resetRange();
  };

  const closeCarDetails = () => {
  setSelectedCarId(null);
  setSelectedCar(null);
  };

  useEffect(() => {
    if(selectedDiscount !== null) {
      fetchFilteredCar();
    } else {
      fetchDealCars();
    }
  }, [currentPage, selectedDiscount, query, mode]);

  useEffect(() => {
    document.body.style.overflow = selectedCarId ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedCarId]);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [totalPages]);

  return (
    <div className='bg-[#d6d6d6]'>
        <div className='w-full px-25 flex flex-col justify-center items-center'>
          <div className='w-full text-center mt-15 text-4xl font-bold'>
            Our Latest Discounts
          </div>
          <Carousel
          allCars={discountedCar}
          clickFromHome={false}
          />
        </div>
        <div className='w-full flex justify-end items-center px-25 mt-10'>
          <div className='flex justify-between w-2/11 font-bold items-center border-2 shadow-xl border-[#a4a4a4] px-5 rounded-md py-2'>
              <div className='w-full'>
                <input 
                type="text" 
                value={query}
                onChange={(e) => {
                    setMode("typeahead");
                    setQuery(e.target.value);
                    setCurrentPage(1);
                    setOpen(true);
                }}
                onFocus={() => query.trim() && setOpen(true)}
                onBlur={() => setTimeout(() => setOpen(false), 150)}
                onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        setMode("contains");
                        setOpen(false);
                    }
                }}
                placeholder='Search for vehicle' 
                className='w-full outline-none' />
              </div>
              <div><FaSearch className='text-xl'/></div>
          </div>
          </div>
        <div className='grid grid-cols-10 pt-10 pb-20'>
          <div className='col-span-2 px-10 shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] bg-footer rounded-tr-xl rounded-br-xl h-full'>
            <div className='border-b-2 border-amber-50 py-3 text-amber-50 font-bold text-xl tracking-wide'>
              Filter by
            </div>
            <div>
              <div className='text-amber-50 font-semibold py-3 text-xl tracking-wide'>
                Discount
              </div>
            </div>
            <div className='grid grid-cols-2 gap-5 text-amber-50 font-semibold'>
              {discountPercentage.map((d) => (
                <label key={d} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedDiscount === d}
                    onChange={() => {
                      setSelectedDiscount(d);
                      setCurrentPage(1);
                    }}
                    className="w-4 h-4 accent-white"
                  />
                  <span>{d}%</span>
                </label>
              ))}
            </div>
            <div className='flex justify-end items-center w-full pt-5'>
              <div 
              onClick={() => {
                setSelectedDiscount(null);
                setCurrentPage(1);
                fetchDealCars();
              }}
              className='w-3/5 font-semibold tracking-wide flex gap-2 justify-center items-center active:opacity-65 hover:opacity-90 cursor-pointer px-2 py-2 rounded-lg bg-[#d2d2d2]'>
                <div>
                  Clear Filter
                </div>
                <div className='mt-1'>
                  <IoClose className='text-xl'/>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-8 grid grid-cols-3 gap-6 ml-7 mr-25'>
            {
              discountedCar.map((car) => (
                <div 
                key={car._id}
                className='flex transition-all duration-700 hover:translate-1 flex-col w-full h-full gap-3 bg-[#d6d6d6] rounded-xl shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] px-5 pt-5'>
                  <div className='flex justify-between items-start'>
                    <div className='text-2xl font-bold'>{car?.carName}</div>
                    <div className='flex justify-center items-center w-2/7 text-center'>
                      <div className='font-bold h-full w-full bg-footer text-amber-50 py-1 select-none px-2 shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full'>{car.discount}% OFF</div>
                    </div>
                  </div>
                  <div className='flex justify-between items-center mt-3'>
                    <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{car?.fuelType}</div>
                    <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{car?.vehicleType}</div>
                  </div>
                  <div className='flex justify-between items-center mt-2'>
                    <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{car?.seater}-Seaters</div>
                    <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>S$ {car?.pricePerDay} /Day</div>
                  </div>
                  <div className='w-full h-full my-5'>
                      <img src={car?.carImageUrl || defaultImage} alt="" className='w-full h-full shadow-gray-700 shadow-[0_5px_10px_-3px_rgba(0,0,0,0.3)] object-fit rounded-xl' />
                  </div>
                  <div 
                  onClick={() => openCarDetails(car)}
                  className='bg-footer mb-5 transition-all hover:-translate-y-0.5 duration-300 hover:opacity-90 active:opacity-65 text-amber-50 text-center rounded-full font-semibold shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] shadow-gray-700 cursor-pointer tracking-wide py-2'>
                    Book Now
                  </div>
                </div>
              ))
            }
            {selectedCarId && selectedCar && (
              <CarDetails
                selectedCarId={selectedCarId}
                setSelectedCarId={setSelectedCarId}
                selectedCar={selectedCar}
                range={range}
                setRange={setRange}
                minDate={minDate}
                maxDate={maxDate}
                onClose={closeCarDetails}
                onBookingSuccess={resetRange}
              />
            )}
          </div>
          {/* blank just to adjust pagination div width */}
          <div className='col-span-2'></div>

          <div className='flex justify-center items-center mt-10 w-full col-span-8'>
              <div className='flex justify-center items-center gap-2 w-1/2 text-center'>
                  <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  className='flex justify-center items-center gap-2 cursor-pointer disabled:cursor-not-allowed border-2 px-3 active:opacity-65 py-2 border-footer rounded-lg shadow-xl'
                  >
                      <FaLessThan/>
                      Prev
                  </button>
                  <div className='flex gap-2'>
                      {
                          Array.from({ length: totalPages}, (_, i) =>
                          <button
                          key={i}
                          onClick={() => setCurrentPage(i + 1)}
                          className={`${currentPage === i + 1 ? 'bg-footer text-amber-50 px-3 py-2 rounded-lg font-semibold border-2 border-footer cursor-pointer active:opacity-65 hover:opacity-90 shadow-xl' : 'px-3 py-2 rounded-lg font-semibold border-2 border-footer cursor-pointer active:opacity-90 shadow-xl'}`}
                          >
                              {i + 1}
                          </button>)
                      }
                  </div>
                  <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  className='flex justify-center items-center gap-2 cursor-pointer border-2 disabled:cursor-not-allowed active:opacity-65 border-footer rounded-lg px-3 py-2 shadow-xl'
                  >
                      Next
                      <FaGreaterThan/>
                  </button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Deals