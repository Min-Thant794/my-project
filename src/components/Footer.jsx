import React from 'react'
import Logo from '../assets/logo.png'
import { SocialMediaIcons } from '../constants'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <div className='bg-footer px-25 text-amber-50'>
      <div className='grid grid-cols-3 py-7'>
        <div>
          <div className='w-60'>
            <img src={Logo} alt="Logo" />
          </div>
          <div className='pr-12 mt-5'>
            Let's Drive is an online car rental system design to streamline the vehicle booking process while ensuring reliability, safety, and user convenience.
          </div>
        </div>
        <div className='flex flex-col pl-10 gap-2 w-full font-semibold'>
          <Link to={'/*'}>
            Booking Guide
          </Link>
          <Link to={'/*'}>
            FAQs
          </Link>
          <Link to={'/*'}>
            Cancellation Policy
          </Link>
          <Link to={'/*'}>
            Report a problem
          </Link>
        </div>
        <div>
          <div className='text-lg font-semibold pb-3'>
            Contact Information
          </div>
          <div className='flex'>
            <div className='font-semibold mr-2'>
              Email:
            </div>
            <div>
              support@letsdrive.com
            </div>
          </div>
          <div className='flex'>
            <div className='font-semibold mr-2'>
              Hotline number:
            </div>
            <div>
              +65 xxxx xxxx
            </div>
          </div>
          <div className='flex'>
            <div className='font-semibold mr-2'>
              Operating Hours:
            </div>
            <div>
              9:00 AM - 8:00 PM
            </div>
          </div>
          <div>
            Weekend & Public Holiday, <br />
              10:00 PM - 2:00 PM
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 border-t-2 border-amber-50 py-3'>
        <div className='flex gap-3'>
          <Link className='active:opacity-65' to={'/*'}>Terms</Link>
          <Link className='active:opacity-65' to={'/*'}>Privacy</Link>
          <Link className='active:opacity-65' to={'/*'}>Report Vulnerability</Link>
        </div>
        <div className='text-center underline'>
          &copy;
          2026 Let's Drive | All rights reserved
        </div>
        <div className='flex gap-3 justify-end items-center'>
          {
            SocialMediaIcons.map((icon, index) => {
              const IconComponent = icon.icon;

              return (
                <Link to={icon.link} key={index}>
                  <IconComponent className='text-2xl hover:opacity-90 active:opacity-65 cursor-pointer'/>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Footer