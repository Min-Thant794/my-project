import React, { useRef } from 'react'
import CurrentLocation from './CurrentLocation';
import emailjs from '@emailjs/browser'
import {EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_ADMIN_EMAIL} from '../config/config'
//import { toast } from 'react-toastify';

const GetInTouch = () => {

  const form = useRef();

  const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            EMAILJS_SERVICE_ID, 
            EMAILJS_TEMPLATE_ID, 
            form.current, 
            EMAILJS_PUBLIC_KEY
        ).then((response) => {
            //toast.success("Message sent successfully!");
            console.log("Email successfully sent", response.status, response.text);
            e.target.reset();
        }, (error) => {
            //toast.error("Failed to send message.");
            console.error("Failed", error.text);
        });
    };

  return (
    <div className='px-25 mb-25 w-full'>
        <div className='text-4xl font-bold w-full text-center py-10'>
            Get in Touch
        </div>
        <div className='flex bg-[#d6d6d6] rounded-xl px-10 py-5'>
            <form ref={form}
            onSubmit={sendEmail}
            className='flex flex-col justify-between w-1/2 border-r-3 pr-10 border-amber-50'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="name" className='text-xl font-bold'>Name</label>
                        <input type="text" name='name' placeholder='Enter your name' className='outline-none bg-[#eaeaea] rounded-lg px-2 py-2' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="email" className='text-xl font-bold'>Email</label>
                        <input type="email" name='email' placeholder='Enter your email' className='outline-none bg-[#eaeaea] rounded-lg px-2 py-2' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="phoneNumber" className='text-xl font-bold'>Phone Number</label>
                        <input type="text" name='contact_number' placeholder='Enter your phone number' className='outline-none bg-[#eaeaea] rounded-lg px-2 py-2' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="comments" className='text-xl font-bold'>Comments (Optional)</label>
                        <textarea
                            placeholder="Enter your message"
                            rows="4"
                            name='message'
                            className='resize-none border-none mb-4 p-4 w-full border rounded-md bg-[#eaeaea] focus:outline-none transition-all'
                        ></textarea>
                    </div>
                </div>
                <button
                type='submit' className='rounded-full shadow-2xl cursor-pointer active:opacity-65 py-2 mt-7 mb-2 bg-footer text-amber-50 font-semibold tracking-wide'>
                    Submit
                </button>
            </form>
            <div className='w-1/2 pl-10 flex flex-col gap-2 tracking-wide'>
                <div className='flex flex-col gap-2'>
                    <div className='text-xl font-bold'>
                        Call Us
                    </div>
                    <div className='font-semibold'>
                        +65 1234 5678
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='text-xl font-bold'>
                        Email Us
                    </div>
                    <div className='font-semibold'>
                        example@email.com
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='text-xl font-bold'>
                        Address
                    </div>
                    <div className='font-semibold'>
                        ### address lane, #111111, ###Street, postal code, Singapore
                    </div>
                </div>
                <div>
                    <CurrentLocation/>
                </div>
                <div className='flex flex-col gap-2 mt-5'>
                    <div className='text-xl font-bold'>
                        Operating Hours
                    </div>
                    <div className='font-semibold'>
                        Monday to Friday, 9:00 AM - 8:00 PM <br /> Weekend & Public Holiday, 10:00 AM - 2:00 PM
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch