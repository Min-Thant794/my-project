import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import defaultImage from '../assets/default image.png'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa6'

const SearchVehicle = ({allCars, currentPage, setCurrentPage, totalPages, query, setQuery, mode, setMode, setSelectedCarId}) => {

  const [open, setOpen] = useState(false);

  return (
    <div className='col-span-5 mr-25 ml-5'>
        <div className='flex justify-between items-center border-2 shadow-xl border-[#a4a4a4] px-5 rounded-md py-2'>
            <div className='w-full'>
                <input 
                type="text" 
                value={query}
                onChange={(e) => {
                    setMode("typeahead");
                    setQuery(e.target.value);
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
        <div className='relative grid grid-cols-3 gap-6 py-7'>
            {open && mode === "typeahead" && query.trim() && allCars.length > 0 && (
            <div className="absolute z-50 mt-2 w-full rounded-md bg-white shadow-xl border">
                {allCars.slice(0, 8).map((car) => (
                <div
                    key={car._id}
                    onMouseDown={() => {
                    // pick suggestion
                    setQuery(car.carName);
                    setMode("contains");  // run normal search list
                    setOpen(false);
                    }}
                    className="px-3 py-2 cursor-pointer hover:opacity-80"
                >
                    <span className="font-semibold">{car.carName}</span>
                    <span className="opacity-60"> ({car.brand})</span>
                </div>
                ))}
            </div>
            )}
            {
                allCars.map((car) => (
                    <div
                    key={car._id}
                    className='flex transition-all duration-700 hover:translate-1 flex-col w-full h-full gap-3 bg-[#d6d6d6] rounded-xl shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] px-5 pt-5'>
                        <div className='flex justify-between items-center'>
                            <div className='text-xl font-bold'>{car.carName}</div>
                            <div className='flex items-center w-1/3 text-center'>
                                {
                                    car?.discount &&
                                    <div className='font-bold h-full w-full bg-footer text-amber-50 py-1 select-none px-2 shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full'>{car.discount}% OFF</div>
                                }
                            </div>
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
                ))
            }
        </div>
        <div className='flex justify-center items-center py-10 w-full'>
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
  )
}

export default SearchVehicle