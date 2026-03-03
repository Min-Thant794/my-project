import React, { useState } from 'react'
import loginVideo from '../assets/loginVideo.mp4'
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const PasswordReset = () => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
        setIsLoading(true);
    } catch (error) {
        console.log("An Error Occurred at handleSubmit()", error);
    } finally {
        setIsLoading(false);
    }
  }

  return (
    <div className='flex justify-center items-center h-screen bg-footer'>
        <div className='flex w-3/5 items-stretch bg-[#d6d6d6]/10 rounded-lg shadow-xl h-420px overflow-hidden'>
            <div className='w-1/2 relative'>
                <video src={loginVideo}
                    autoPlay
                    loop
                    muted
                    className='absolute inset-0 w-full h-full object-cover'
                />
            </div>
            <form action="" 
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}
            className='flex flex-col w-1/2 py-20 gap-2 px-20'>
                <div className='text-2xl font-bold text-amber-50'>
                    Hello user{}!
                </div>
                <div className='text-lg font-bold pb-5 text-amber-50'>
                    Please reset your password
                </div>
                <div className='flex flex-col w-full pb-5'>
                    <label htmlFor="username" className='w-full font-semibold text-amber-50'>Username</label>
                    <input required type="text" id='username' value={userName} 
                    autoComplete='username'
                    placeholder='Enter Your Username' 
                    onChange={(e) => setUserName(e.target.value)}
                    className='rounded-md text-amber-50 placeholder:font-semibold  border-none outline-none'/>

                    {errorUserNameMsg && <p className="text-red-300 text-sm">{errorUserNameMsg}</p>}
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="password" className='w-full font-semibold text-amber-50'>Password</label>
                    <div className='flex  items-center w-full'>
                        <input type={isShowPassword ? 'text' : 'password'} 
                        autoComplete='current-password'
                        required
                        id='password'
                        value={password}
                        placeholder='Enter Your Password' 
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-9/10 border-none outline-none text-amber-50 placeholder:font-semibold' />
                        <div
                        type="button"
                        onClick={() => setIsShowPassword(!isShowPassword)}
                        className='flex items-center justify-center w-1/10 cursor-pointer active:opacity-60'>
                            {
                                isShowPassword ?
                                <FaEye className='text-amber-50'/>
                                :
                                <FaEyeSlash className='text-amber-50'/>
                            }
                        </div>
                    </div>
                    {errorPasswordMsg && <p className="text-red-300 text-sm">{errorPasswordMsg}</p>}
                </div>
                <button 
                type='submit'
                disabled={isLoading}
                className='transition duration-300 w-full bg-[#222222] text-center py-2 cursor-pointer rounded-md font-bold active:opacity-65 hover:opacity-80 text-amber-50 tracking-wider mt-5'>
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    </div>
  )
}

export default PasswordReset