import React from 'react'
import DefaultImage from '../assets/default image.png'

const RideYourBook = () => {
  return (
    <div className='grid grid-cols-2 justify-between  px-25 py-10'>
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
        <div className='border-3 border-grey w-full max-h-80 rounded-lg'>
            <img src={DefaultImage} alt="" className='w-full h-full' />
        </div>
    </div>
  )
}

export default RideYourBook