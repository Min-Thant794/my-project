import React from 'react'
import { FaSearch } from 'react-icons/fa'
import defaultImage from '../assets/default image.png'

const SearchVehicle = () => {
  return (
    <div className='col-span-5 mr-25 ml-5'>
        <div className='flex justify-between items-center border-2 border-[#a4a4a4] px-5 rounded-md py-2'>
            <div className='w-full'><input type="text" placeholder='Search for vehicle' className='w-full outline-none' /></div>
            <div><FaSearch className='text-xl'/></div>
        </div>
        <div className='grid grid-cols-3 gap-6 py-7'>
            <div className='flex flex-col w-full h-full gap-3 bg-[#d6d6d6] rounded-xl shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] px-5 pt-5'>
                <div className='flex justify-between items-center'>
                <div className='text-2xl font-bold'>{} Toyota Wish</div>
                <div className='font-bold bg-footer text-amber-50 py-1 select-none px-2 shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full'>{} 30% OFF</div>
                </div>
                <div className='flex justify-between items-center mt-3'>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{} Petrol</div>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{} MPV</div>
                </div>
                <div className='flex justify-between items-center mt-2'>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{}7-Seaters</div>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{} S$170/Day</div>
                </div>
                <div className='w-full h-full my-5'>
                <img src={defaultImage} alt="" className='w-full object-fit rounded-xl' />
                </div>
                <div className='bg-footer mb-5 transition-all hover:-translate-y-0.5 duration-300 hover:opacity-90 active:opacity-65 text-amber-50 text-center rounded-full font-semibold shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] shadow-gray-700 cursor-pointer tracking-wide py-2'>
                Book Now
                </div>
            </div>


            <div className='flex flex-col w-full h-full gap-3 bg-[#d6d6d6] rounded-xl shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] px-5 pt-5'>
                <div className='flex justify-between items-center'>
                <div className='text-2xl font-bold'>{} Toyota Wish</div>
                <div className='font-bold bg-footer text-amber-50 py-1 select-none px-2 shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full'>{} 30% OFF</div>
                </div>
                <div className='flex justify-between items-center mt-3'>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{} Petrol</div>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{} MPV</div>
                </div>
                <div className='flex justify-between items-center mt-2'>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{}7-Seaters</div>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{} S$170/Day</div>
                </div>
                <div className='w-full h-full my-5'>
                <img src={defaultImage} alt="" className='w-full object-fit rounded-xl' />
                </div>
                <div className='bg-footer mb-5 transition-all hover:-translate-y-0.5 duration-300 hover:opacity-90 active:opacity-65 text-amber-50 text-center rounded-full font-semibold shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] shadow-gray-700 cursor-pointer tracking-wide py-2'>
                Book Now
                </div>
            </div>


            <div className='flex flex-col w-full h-full gap-3 bg-[#d6d6d6] rounded-xl shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] px-5 pt-5'>
                <div className='flex justify-between items-center'>
                <div className='text-2xl font-bold'>{} Toyota Wish</div>
                <div className='font-bold bg-footer text-amber-50 py-1 select-none px-2 shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full'>{} 30% OFF</div>
                </div>
                <div className='flex justify-between items-center mt-3'>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{} Petrol</div>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{} MPV</div>
                </div>
                <div className='flex justify-between items-center mt-2'>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{}7-Seaters</div>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{} S$170/Day</div>
                </div>
                <div className='w-full h-full my-5'>
                <img src={defaultImage} alt="" className='w-full object-fit rounded-xl' />
                </div>
                <div className='bg-footer mb-5 transition-all hover:-translate-y-0.5 duration-300 hover:opacity-90 active:opacity-65 text-amber-50 text-center rounded-full font-semibold shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] shadow-gray-700 cursor-pointer tracking-wide py-2'>
                Book Now
                </div>
            </div>


            <div className='flex flex-col w-full h-full gap-3 bg-[#d6d6d6] rounded-xl shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] px-5 pt-5'>
                <div className='flex justify-between items-center'>
                <div className='text-2xl font-bold'>{} Toyota Wish</div>
                <div className='font-bold bg-footer text-amber-50 py-1 select-none px-2 shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full'>{} 30% OFF</div>
                </div>
                <div className='flex justify-between items-center mt-3'>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{} Petrol</div>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{} MPV</div>
                </div>
                <div className='flex justify-between items-center mt-2'>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{}7-Seaters</div>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{} S$170/Day</div>
                </div>
                <div className='w-full h-full my-5'>
                <img src={defaultImage} alt="" className='w-full object-fit rounded-xl' />
                </div>
                <div className='bg-footer mb-5 transition-all hover:-translate-y-0.5 duration-300 hover:opacity-90 active:opacity-65 text-amber-50 text-center rounded-full font-semibold shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] shadow-gray-700 cursor-pointer tracking-wide py-2'>
                Book Now
                </div>
            </div>


            <div className='flex flex-col w-full h-full gap-3 bg-[#d6d6d6] rounded-xl shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] px-5 pt-5'>
                <div className='flex justify-between items-center'>
                <div className='text-2xl font-bold'>{} Toyota Wish</div>
                <div className='font-bold bg-footer text-amber-50 py-1 select-none px-2 shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full'>{} 30% OFF</div>
                </div>
                <div className='flex justify-between items-center mt-3'>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{} Petrol</div>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{} MPV</div>
                </div>
                <div className='flex justify-between items-center mt-2'>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{}7-Seaters</div>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{} S$170/Day</div>
                </div>
                <div className='w-full h-full my-5'>
                <img src={defaultImage} alt="" className='w-full object-fit rounded-xl' />
                </div>
                <div className='bg-footer mb-5 transition-all hover:-translate-y-0.5 duration-300 hover:opacity-90 active:opacity-65 text-amber-50 text-center rounded-full font-semibold shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] shadow-gray-700 cursor-pointer tracking-wide py-2'>
                Book Now
                </div>
            </div>


            <div className='flex flex-col w-full h-full gap-3 bg-[#d6d6d6] rounded-xl shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] px-5 pt-5'>
                <div className='flex justify-between items-center'>
                <div className='text-2xl font-bold'>{} Toyota Wish</div>
                <div className='font-bold bg-footer text-amber-50 py-1 select-none px-2 shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full'>{} 30% OFF</div>
                </div>
                <div className='flex justify-between items-center mt-3'>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{} Petrol</div>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{} MPV</div>
                </div>
                <div className='flex justify-between items-center mt-2'>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{}7-Seaters</div>
                <div className='px-5 py-1 bg-[#d6d6d6] text-center w-5/11 shadow-gray-700 font-bold tracking-wide shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-full select-none'>{} S$170/Day</div>
                </div>
                <div className='w-full h-full my-5'>
                <img src={defaultImage} alt="" className='w-full object-fit rounded-xl' />
                </div>
                <div className='bg-footer mb-5 transition-all hover:-translate-y-0.5 duration-300 hover:opacity-90 active:opacity-65 text-amber-50 text-center rounded-full font-semibold shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] shadow-gray-700 cursor-pointer tracking-wide py-2'>
                Book Now
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchVehicle