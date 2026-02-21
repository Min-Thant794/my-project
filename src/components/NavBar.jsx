import React from 'react'
import { navLinks } from '../constants'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'

const NavBar = () => {

  const navigate = useNavigate();

  return (
    <nav className='flex justify-between items-center px-25 bg-[#a4a4a4]'>
      <div 
      onClick={() => navigate("/")}
      className='flex justify-start font-bold tracking-wide text-amber-50'>
        <img src={Logo} alt="Logo" className='w-4/10 cursor-pointer' />
      </div>

      <div className='flex justify-center items-center text-center gap-10 py-2 font-semibold tracking-wider text-lg'>
        {navLinks.slice(0, 5).map((link) => (
          <NavLink
            className={({isActive}) => `text-lg ${isActive ? 'underline font-semibold' : ''} active:opacity-65 tracking-wide`}
            to={link.path}
            key={link.path}
          >
            {link.name}
          </NavLink>
        ))}

        <NavLink
          to={navLinks[5].path}
          className="px-8 active:opacity-65 py-1 cursor-pointer font-semibold bg-footer rounded-md text-white"
        >
          Login
        </NavLink>

      </div>
    </nav>
  )
}

export default NavBar