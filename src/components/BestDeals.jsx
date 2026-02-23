import React from 'react'
import defaultImage from '../assets/default image.png'

const BestDeals = () => {
  return (
    <div className='px-25 mt-20'>
      <div className='text-4xl font-bold tracking-wide text-center'>
        BEST DEALS
      </div>
      <div className='px-55 text-center text-lg mt-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore enim quisquam praesentium asperiores quo at dolores perferendis corporis, quidem molestias, provident vero veritatis tempora quae nulla. Sit atque incidunt tempore.
      </div>
      <div className='grid grid-cols-3 gap-3 rounded-lg mt-10 mb-20'>
        <div className='flex flex-col gap-3 bg-[#d6d6d6] shadow-lg rounded-lg px-7 py-3'>
          <div className='font-bold italic underline text-2xl'>
            {} % OFF
          </div>
          <div className='w-full h-75'>
            <img src={defaultImage} alt="" className='w-full h-full' />
          </div>
          <div className='text-2xl font-bold tracking-wide'>
            {}Car Name
          </div>
          <div className='font-serif italic underline text-2xl font-bold'>
            From ${}/day
          </div>
          <div className='flex justify-between font-bold'>
            <div className='w-full'>{} Sedan</div>
            <div className='text-left w-full'>{} 5 seaters</div>
          </div>
          <div className='font-bold'>
            {} Petrol
          </div>
          <div className='text-center bg-footer w-full cursor-pointer active:opacity-65 hover:opacity-85 text-amber-50 font-semibold tracking-wide rounded-lg px-5 py-2 my-5'>
            Book Now
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestDeals