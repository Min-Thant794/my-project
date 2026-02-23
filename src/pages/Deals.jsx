import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Carousel from '../components/HomePageCarousel'
import defaultImage from '../assets/default image.png'

const Deals = () => {
  return (
    <div>
        <NavBar/>
        <div className='w-full px-25 flex flex-col justify-center items-center'>
          <div className='w-full text-center mt-15 text-3xl font-bold'>
            Our Latest Discounts
          </div>
          <Carousel/>
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
          </div>
          <div className='col-span-8 grid grid-cols-3 gap-6 ml-7 mr-25'>
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
        <Footer/>
    </div>
  )
}

export default Deals