import React from 'react'
import Logo from '../assets/logo.png'
import { SocialMediaIcons } from '../constants'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-footer px-25 text-amber-50'>
      <div className='grid grid-cols-6 py-10'>
        <div className='flex flex-col gap-4'>
          <div>Navigation</div>
          <div className='flex flex-col gap-1 font-light'>
            <Link to={'/rates'}>Rates</Link>
            <Link to={'/locations'}>Locations</Link>
            <Link to={'/cars'}>Cars</Link>
            <Link to={'/blog'}>Blog</Link>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div>What We Do</div>
          <div className='flex flex-col gap-1 font-light'>
            <Link to={'/*'}>Encouraging Testing</Link>
            <Link to={'/*'}>Strenthening</Link>
            <Link to={'/*'}>Engage with Global</Link>
            <Link to={'/*'}>Information Sharing</Link>
            <Link to={'/*'}>Fund Advocacy</Link>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div>Industry Solutions</div>
          <div className='flex flex-col gap-1 font-light'>
            <Link to={'/*'}>Brand & Product</Link>
            <Link to={'/*'}>Design & Agency</Link>
            <Link to={'/*'}>Agricultural Tehcnolo</Link>
            <Link to={'/*'}>Health Technology</Link>
            <Link to={'/*'}>Financial Technology</Link>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div>Support</div>
          <div className='flex flex-col gap-1 font-light'>
            <Link to={'/*'}>Help Centre</Link>
            <Link to={'/*'}>FAQ</Link>
            <Link to={'/*'}>Contact</Link>
            <Link to={'/*'}>Status</Link>
          </div>
        </div>
          <div className='flex flex-col col-span-2 gap-3 bg-white text-black px-3 py-8 rounded-xl'>
            <div className='text-xl font-bold'>Sign up for our newsletter</div>
            <div className='flex justify-between items-center bg-black px-3 py-1 rounded-md'>
              <div className='text-amber-50 px-3'>
                <input type="email" placeholder='Enter Email' className='outline-none w-full' />
              </div>
              <button className='bg-white px-5 py-2 active:opacity-75 cursor-pointer text-md font-semibold rounded-md'>
                Subscribe
              </button>
            </div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque id quisquam autem eos facilis nulla, obcaecati sit a numquam nihil tempore adipisci aut! Tempore, aliquid dolor.
            </div>
        </div>
      </div>
      <div className='grid grid-cols-7 justify-center items-center py-5 mt-2 border-t-2'>
        <div className='flex gap-2 col-span-2'>
          {SocialMediaIcons.map(({name, icon: Icon, link}) => (
            <div className='text-xl'>
              <a 
              key={name}
              href={link}>
                <Icon/>
              </a>
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center tracking-wide gap-5 text-sm font-light col-span-3'>
          <Link to={'/*'}>General Info</Link>
          <Link to={'/*'}>Privacy Policy</Link>
          <Link to={'/*'}>Terms of Use</Link>
        </div>
        <div className='col-span-2 flex justify-end items-center'>
          <Link to={'/'}>
            <img src={Logo} alt="Logo" className='w-2/5' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer