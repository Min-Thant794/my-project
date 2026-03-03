import React, { useEffect, useMemo, useState } from 'react'
import loginVideo from '../assets/loginVideo.mp4'
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { resetPassword } from '../services/user.service';

const PasswordReset = () => {

  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isShowNewPassword, setIsShowNewPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const [params] = useSearchParams();
  const token = useMemo(() => params.get("token"), [params]);

  useEffect(() => {
    if(!token) {
        navigate('*');
    }
  }, [token, navigate]);

  const handleSubmit = async () => {
    try {
        if(!token) {
            toast.error("Invalid reset link or missing token.");
            return;
        }

        if(newPassword !== confirmNewPassword) {
            toast.error("New password must not be different from current password");
            return;
        }

        setIsLoading(true);

        const response = await resetPassword({ token, newPassword });

        toast.success(response?.message || "Password reset successfully");
        navigate("/");
    } catch (error) {
        console.log("An Error Occurred at handleSubmit()", error);
        toast.error(error?.response?.data?.message || "Internal Server Error!");
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
            className='flex flex-col w-1/2 py-20 gap-3 px-20'>
                <div className='text-2xl font-bold text-amber-50'>
                    Hello user{}!
                </div>
                <div className='text-lg font-bold pb-5 text-amber-50'>
                    Please update your password
                </div>

                <div className='flex flex-col w-full'>
                    <label htmlFor="password" className='w-full font-semibold text-amber-50'>New Password</label>
                    <div className='flex  items-center w-full'>
                        <input type={isShowNewPassword ? 'text' : 'password'}
                        required
                        id='newPassword'
                        value={newPassword}
                        placeholder='Enter Your New Password' 
                        onChange={(e) => setNewPassword(e.target.value)}
                        className='w-9/10 border-none outline-none text-amber-50 placeholder:font-semibold' />
                        <div
                        type="button"
                        onClick={() => setIsShowNewPassword(!isShowNewPassword)}
                        className='flex items-center justify-center w-1/10 cursor-pointer active:opacity-60'>
                            {
                                isShowNewPassword ?
                                <FaEye className='text-amber-50'/>
                                :
                                <FaEyeSlash className='text-amber-50'/>
                            }
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="password" className='w-full font-semibold text-amber-50'>Confirm New Password</label>
                    <div className='flex  items-center w-full'>
                        <input type={isShowConfirmPassword ? 'text' : 'password'}
                        required
                        id='password'
                        value={confirmNewPassword}
                        placeholder='Enter Your Current Password' 
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        className='w-9/10 border-none outline-none text-amber-50 placeholder:font-semibold' />
                        <div
                        type="button"
                        onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
                        className='flex items-center justify-center w-1/10 cursor-pointer active:opacity-60'>
                            {
                                isShowConfirmPassword ?
                                <FaEye className='text-amber-50'/>
                                :
                                <FaEyeSlash className='text-amber-50'/>
                            }
                        </div>
                    </div>
                </div>
                <button 
                type='submit'
                disabled={isLoading}
                className='transition duration-300 w-full bg-[#222222] text-center py-2 cursor-pointer rounded-md font-bold active:opacity-65 hover:opacity-80 text-amber-50 tracking-wider mt-5'>
                    {isLoading ? 'Loading...' : 'Submit'}
                </button>
            </form>
        </div>
    </div>
  )
}

export default PasswordReset