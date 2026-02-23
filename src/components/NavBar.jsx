import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Login from '../pages/Login'

const NavBar = () => {

  const [clickLogin, setClickLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if(clickLogin) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [clickLogin]);

  return (
    <nav className='flex relative z-40 justify-between items-center px-25 bg-[#a4a4a4]'>
      <div 
      onClick={() => navigate("/")}
      className='flex justify-start font-bold tracking-wide text-amber-50'>
        <img src={Logo} alt="Logo" className='w-4/10 cursor-pointer' />
      </div>

      <div className='flex justify-center items-center text-center gap-10 py-2 font-bold tracking-wider text-lg'>
        {navLinks.slice(0, 5).map((link) => (
          <NavLink
            className={({isActive}) => `text-lg ${isActive ? 'underline font-bold' : ''} active:opacity-65 tracking-wide`}
            to={link.path}
            key={link.path}
          >
            {link.name}
          </NavLink>
        ))}
        <div
        onClick={() => setClickLogin(!clickLogin)}
        className='bg-footer rounded-md px-5 cursor-pointer active:opacity-65 hover:opacity-90 py-1 text-amber-50 tracking-wide'>
          Login
        </div>
      </div>
      {
        clickLogin && <Login
        setClickLogin={setClickLogin}
        />
      }
    </nav>
  )
}

export default NavBar