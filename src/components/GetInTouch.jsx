import React from 'react'
import CurrentLocation from './CurrentLocation';

const GetInTouch = () => {
  return (
    <div className='px-25 mb-25 w-full'>
        <div className='text-4xl font-bold w-full text-center py-10'>
            Get in Touch
        </div>
        <div className='flex bg-[#d6d6d6] rounded-xl px-10 py-5'>
            <form action="" className='flex flex-col gap-3 w-1/2 border-r-3 pr-10 border-amber-50'>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="name" className='text-xl font-bold'>Name</label>
                    <input type="text" placeholder='Enter your name' className='outline-none bg-[#eaeaea] rounded-lg px-2 py-2' />
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="email" className='text-xl font-bold'>Email</label>
                    <input type="email" placeholder='Enter your email' className='outline-none bg-[#eaeaea] rounded-lg px-2 py-2' />
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="phoneNumber" className='text-xl font-bold'>Phone Number</label>
                    <input type="text" placeholder='Enter your phone number' className='outline-none bg-[#eaeaea] rounded-lg px-2 py-2' />
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="comments" className='text-xl font-bold'>Comments (Optional)</label>
                    <input type="text" placeholder='Enter your comments' className='outline-none bg-[#eaeaea] rounded-lg px-2 py-2' />
                </div>
                <button 
                onClick={(e) => {
                    e.preventDefault();
                }}
                type='submit' className='rounded-xl py-2 mt-7 mb-2 bg-footer text-amber-50 font-semibold tracking-wide'>Submit</button>
            </form>
            <div className='w-1/2 pl-10 flex flex-col gap-3 tracking-wide'>
                <div className='flex flex-col gap-2'>
                    <div className='text-2xl font-bold'>
                        Call Us
                    </div>
                    <div className='font-semibold text-lg'>
                        +65 1234 5678
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='text-2xl font-bold'>
                        Email Us
                    </div>
                    <div className='font-semibold text-lg'>
                        example@email.com
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='text-2xl font-bold'>
                        Address
                    </div>
                    <div className='font-semibold text-lg'>
                        ### address lane, #111111, ###Street, postal code, Singapore
                    </div>
                </div>
                <div>
                    <CurrentLocation/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch