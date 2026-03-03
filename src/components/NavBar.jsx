import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Login from '../pages/Login'
import { useUser } from '../hooks/useUser'
import UserDetails from './UserDetails'
import defaultImage from '../assets/default image.png'

const NavBar = () => {

  const { userData, authLoading, refreshUser, logout } = useUser();
  const [clickLogin, setClickLogin] = useState(false);
  const [ isUserDetails, setIsUserDetails ] = useState(false);
  const [expandUserIcon, setExpandUserIcon] = useState(false);

  const navigate = useNavigate();

  const shouldLockBody = clickLogin || isUserDetails || expandUserIcon;

  useEffect(() => {
    if(shouldLockBody) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [shouldLockBody]);

  useEffect(() => {
    if(isUserDetails) {
      refreshUser();
    }
  }, [isUserDetails, refreshUser]);

  return (
    <nav className='flex relative z-40 h-15 justify-between items-center px-25 bg-[#a4a4a4]'>
      <div 
      onClick={() => navigate("/")}
      className='flex justify-start font-bold tracking-wide text-amber-50'>
        <img src={Logo} alt="Logo" className='w-4/10 cursor-pointer' />
      </div>

      <div className='flex justify-center w-2/3 items-center text-center gap-10 py-2 font-bold tracking-wider text-lg'>
        {navLinks.slice(0, 5).map((link) => (
          <NavLink
            className={({isActive}) => `text-lg ${isActive ? 'underline font-bold' : ''} active:opacity-65 tracking-wide`}
            to={link.path}
            key={link.path}
          >
            {link.name}
          </NavLink>
        ))}
        {
          authLoading ?
          <div>
            Loading...
          </div>
          :
          userData ? (
            <div
              onClick={() => setExpandUserIcon(true)}
              className="border-l-3 pl-5 border-footer flex gap-2 cursor-pointer active:opacity-65 hover:opacity-90 overflow-hidden items-center"
            >
              <img
                className="w-10 h-10 rounded-full"
                src={userData?.profileImageUrl || defaultImage}
                alt="profile"
              />
              <div className="overflow-hidden">
                {userData?.userName || "User"}
              </div>
            </div>
          )
          :
          <div
          onClick={() => setClickLogin(!clickLogin)}
          className='bg-footer rounded-md px-5 cursor-pointer active:opacity-65 hover:opacity-90 py-1 text-amber-50 tracking-wide'>
            Login
          </div>
        }
      </div>
      {
        clickLogin && <Login
        setClickLogin={setClickLogin}
        />
      }
      {
        expandUserIcon && 
        <div 
        onClick={() => setExpandUserIcon(false)}
        className='absolute inset-0 w-full h-200 bg-black/20'>
          <div 
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='absolute bg-[#808080] font-bold py-2 rounded-b-md text-amber-50 w-2/14 top-15 right-0 mx-25'>
            <div
            onClick={() => {
              setIsUserDetails(true);
              setExpandUserIcon(false);
            }}
            className='px-3 py-1 border-b-2 border-amber-50 cursor-pointer active:opacity-65 hover:opacity-90'
            >
              User Details
            </div>
            <div 
            onClick={() => {
              logout();
              setExpandUserIcon(false);
            }}
            className='px-3 py-1 cursor-pointer active:opacity-65 hover:opacity-90'>
              Logout
            </div>
          </div>
        </div>
      }
      {
        isUserDetails && <UserDetails setIsUserDetails={setIsUserDetails}/>
      }
    </nav>
  )
}

export default NavBar