import React, { useState, useRef } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import carVideo from '../assets/loginVideo.mp4';
import { Link, useNavigate } from 'react-router-dom';
import RippleButton from '../components/RippleButton'
import loginCarImg from '../assets/logniCarImg.jpg'

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] =  useState();
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const passwordRef = useRef(null);

  const toggleRememberMe = () => setRememberMe(!rememberMe);

  return (
    <div className='flex items-center justify-center h-screen'>
        <video
        src={carVideo}
        autoPlay
        loop
        muted
        className='absolute top-0 left-0 w-full h-full object-cover -z-10'
        />
        <div className='grid grid-cols-9 w-3/5'>
            <div className='col-span-4 rounded-l-3xl shadow-2xl border border-white/30'>
                <img src={loginCarImg} alt="#" className='w-full max-h-150 rounded-l-3xl' />
            </div>
            <form action="" 
            onSubmit={(e) => {
                e.preventDefault();
                userLogin();
            }}
            className='flex flex-col col-span-5 bg-white/10 backdrop-blur-lg border border-white/30 rounded-r-3xl shadow-2xl py-18 px-15 gap-2'>
                <div className='text-center text-2xl text-amber-50 font-bold'>
                    {login ? 'Create An Account' : 'Welcome Back!'}
                </div>
                <div className='flex flex-col'>
                    {login ? 
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="userName" className='font-semibold text-amber-50'>Username</label>
                        <input
                        type="text"
                        id='userName'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Enter Your Username' 
                        className='bg-white rounded-sm outline-none w-full font-semibold p-2' />

                        <label htmlFor="email" className='font-semibold text-amber-50'>Email</label>
                        <input
                        type="email"
                        id='email'
                        value={email}
                        ref={passwordRef}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => {
                            e.key === "Enter" && passwordRef.current.focus()
                        }}
                        placeholder='Enter Your Email' 
                        className='bg-white rounded-sm outline-none w-full font-semibold p-2' />

                        <label htmlFor="phoneNumber" className='font-semibold text-amber-50'>Phone Number</label>
                        <input
                        type="text"
                        id='phoneNumber'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder='Enter Your Phone Number' 
                        className='bg-white rounded-sm outline-none w-full font-semibold p-2' />

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="password" className='text-amber-50 font-semibold'>Password</label>
                            <div className='flex justify-between items-center p-2 bg-white rounded-sm'>
                                <input
                                ref={passwordRef}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={(e) => {
                                    e.key === "Enter"
                                }}
                                type={isShowPassword ? "text" : "password"}
                                id="password"
                                placeholder='Enter Your Password'
                                className='outline-none w-full font-semibold' />
                                {
                                    isShowPassword ?
                                    <FaEye 
                                    className={'cursor-pointer'}
                                    onClick={() => setIsShowPassword(!isShowPassword)} />
                                    :
                                    <FaEyeSlash 
                                    className={'cursor-pointer'}
                                    onClick={() => setIsShowPassword(!isShowPassword)} />
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex flex-col py-3 justify-center gap-2'>
                        <label htmlFor="username" className='text-amber-50 font-semibold'>Username</label>
                        <input
                        type="text" 
                        id='username' 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Enter Your Username' 
                        className='bg-white rounded-sm outline-none font-semibold w-full p-2' />

                        <label htmlFor="email" className='text-amber-50 font-semibold'>Email</label>
                        <input
                        type="email" 
                        id='email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter Your Email' 
                        className='bg-white rounded-sm outline-none font-semibold w-full p-2' />

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="password" className='text-amber-50 font-semibold'>Password</label>
                            <div className='flex justify-between items-center p-2 bg-white rounded-sm'>
                                <input 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type={isShowPassword ? "text" : "password"} 
                                id="password" placeholder='Enter Your Password' 
                                className='outline-none font-semibold' />
                                {
                                    isShowPassword ?
                                    <FaEye 
                                    className={'cursor-pointer'}
                                    onClick={() => setIsShowPassword(!isShowPassword)} />
                                    :
                                    <FaEyeSlash 
                                    className={'cursor-pointer'}
                                    onClick={() => setIsShowPassword(!isShowPassword)} />
                                }
                            </div>
                        </div>
                        <div className='text-amber-50 flex justify-between'>
                            <div className='flex items-center justify-center gap-2'>
                                <div onClick={toggleRememberMe} className={`relative py-2.5 cursor-pointer px-5 rounded-xl ${rememberMe ? 'bg-red-700 transition-all duration-300': 'bg-primary transition-all duration-300'}`}>
                                    <div className={`absolute top-1/2 -translate-y-1/2 p-2 mx-0.5 ${rememberMe ? 'bg-primary left-5 transition-all duration-300': 'bg-red-700 left-0 transition-all duration-300'} rounded-full`}></div>
                                </div>
                                <div className='font-semibold cursor-pointer' onClick={toggleRememberMe}>
                                    Remember Me
                                </div>
                            </div>
                            <Link className='font-semibold'>Forgot password?</Link>
                        </div>
                    </div>
                    }
                </div>
                <RippleButton
                    className={`rounded-sm p-2 mt-5 font-bold tracking-wider cursor-pointer ${isLoading ? 'animate-pulse' : ''} bg-primary text-center btnHover w-full`}>
                    {login ? 'Register' : 'Login'}
                </RippleButton>
                {/* <button
                className={`rounded-sm p-2 mt-5 text-txtColor2 ${isLoading ? 'animate-pulse' : ''} bg-primary text-center font-semibold btnHover`}>
                    {login ? 'Register' : 'Login'}
                </button> */}
                <div className='flex gap-2 justify-center text-amber-50 font-semibold'>
                  <div>
                      {login ? "Already have an account?" : "Don't have an account?"}
                  </div>
                  <div 
                  onClick={() => setLogin(!login)}
                  className='underline cursor-pointer'>
                      {login ? "Login" : "Sign Up"}
                  </div>
                </div>
            </form>
        </div>
    </div>
  );
};

export default Login;