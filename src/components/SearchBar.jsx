import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { FaCalendarCheck, FaCalendarDay, FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className='w-full flex justify-center items-center my-10'>
        <div className='w-4/7 p-2 grid grid-cols-4 gap-3 bg-[#d6d6d6] rounded-md'>
            <div className='flex gap-3 justify-center rounded-sm text-amber-50 font-semibold bg-footer items-center py-1 cursor-pointer active:opacity-65 hover:opacity-90 duration-500'>
                <div><MdLocationOn className='text-3xl' /></div>
                <div>Pick-up location</div>
            </div>
            <div className='flex gap-3 justify-center rounded-sm text-amber-50 font-semibold bg-footer items-center py-1 cursor-pointer active:opacity-65 hover:opacity-90 duration-500'>
                <div><FaCalendarCheck className='text-2xl' /></div>
                <div>
                    <div>Pick-up Date</div>
                    <div>Wed 12 Feb</div>
                </div>
            </div>
            <div className='flex gap-3 justify-center rounded-sm text-amber-50 font-semibold bg-footer items-center py-1 cursor-pointer active:opacity-65 hover:opacity-90 duration-500'>
                <div><FaCalendarDay className='text-2xl' /></div>
                <div>
                    <div>Drop-off Date</div>
                    <div>Wed 15 Feb</div>
                </div>
            </div>
            <div className='flex gap-3 justify-center rounded-sm text-amber-50 font-semibold bg-footer items-center py-1 cursor-pointer active:opacity-65 hover:opacity-90 transition-all duration-500'>
                <div><FaSearch className='text-2xl'/></div>
                <div>Search</div>
            </div>
        </div>
    </div>
  )
}

export default SearchBar