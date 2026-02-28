import React from 'react'
import Logo from '../assets/logo.png'
import { SocialMediaIcons } from '../constants'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <div className='px-25 inset-x-0' style={{ backgroundColor: '#434343', color: '#eaeaea' }}>
      <div className='grid grid-cols-3 py-7'>
        <div>
          <div className='w-60'>
            <img src={Logo} alt="Logo" />
          </div>
          <div className='pr-12 mt-5' style={{ color: '#d6d6d6' }}>
            Let's Drive is an online car rental system design to streamline the vehicle booking process while ensuring reliability, safety, and user convenience.
          </div>
        </div>
        <div className='flex flex-col pl-10 gap-2 w-full font-semibold'>
          <Link to={'/*'} style={{ color: '#eaeaea' }}>
            Booking Guide
          </Link>
          <Link to={'/*'} style={{ color: '#eaeaea' }}>
            FAQs
          </Link>
          <Link to={'/*'} style={{ color: '#eaeaea' }}>
            Cancellation Policy
          </Link>
          <Link to={'/*'} style={{ color: '#eaeaea' }}>
            Report a problem
          </Link>
        </div>
        <div>
          <div className='text-lg font-semibold pb-3' style={{ color: '#eaeaea' }}>
            Contact Information
          </div>
          <div className='flex'>
            <div className='font-semibold mr-2' style={{ color: '#eaeaea' }}>
              Email:
            </div>
            <div style={{ color: '#d6d6d6' }}>
              support@letsdrive.com
            </div>
          </div>
          <div className='flex'>
            <div className='font-semibold mr-2' style={{ color: '#eaeaea' }}>
              Hotline number:
            </div>
            <div style={{ color: '#d6d6d6' }}>
              +65 xxxx xxxx
            </div>
          </div>
          <div className='flex'>
            <div className='font-semibold mr-2' style={{ color: '#eaeaea' }}>
              Operating Hours:
            </div>
            <div style={{ color: '#d6d6d6' }}>
              9:00 AM - 8:00 PM
            </div>
          </div>
          <div style={{ color: '#d6d6d6' }}>
            Weekend & Public Holiday, <br />
              10:00 PM - 2:00 PM
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 py-3' style={{ borderTop: '2px solid #d6d6d6' }}>
        <div className='flex gap-3'>
          <Link className='active:opacity-65' to={'/*'} style={{ color: '#eaeaea' }}>Terms</Link>
          <Link className='active:opacity-65' to={'/*'} style={{ color: '#eaeaea' }}>Privacy</Link>
          <Link className='active:opacity-65' to={'/*'} style={{ color: '#eaeaea' }}>Report Vulnerability</Link>
        </div>
        <div className='text-center underline' style={{ color: '#a4a4a4' }}>
          &copy;
          2026 Let's Drive | All rights reserved
        </div>
        <div className='flex gap-3 justify-end items-center'>
          {
            SocialMediaIcons.map((icon, index) => {
              const IconComponent = icon.icon;

              return (
                <Link to={icon.link} key={index}>
                  <IconComponent className='text-2xl hover:opacity-90 active:opacity-65 cursor-pointer' style={{ color: '#eaeaea' }}/>
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