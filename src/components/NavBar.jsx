import React from 'react'
import { navLinks } from '../constants'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'

const NavBar = () => {

  const navigate = useNavigate();

  return (
    <nav className='flex justify-between items-center px-25 bg-[#636363]'>
      <div 
      onClick={() => navigate("/")}
      className='flex justify-start text-2xl font-bold tracking-wide text-amber-50'>
        <img src={Logo} alt="Logo" className='w-4/10 cursor-pointer' />
      </div>

      <div className='flex justify-center items-center text-center gap-10 py-2 font-semibold tracking-wider text-lg'>
        {navLinks.slice(0, 5).map((link) => (
          <NavLink
            className={({isActive}) => `text-lg ${isActive ? 'text-amber-50' : 'text-black'}`}
            to={link.path}
            key={link.path}
          >
            {link.name}
          </NavLink>
        ))}

        <NavLink
          to={navLinks[5].path}
          className="px-5 py-2 cursor-pointer bg-green-700 rounded-md text-white"
        >
          Login
        </NavLink>

      </div>
    </nav>
  )
}

export default NavBar