import React, { useEffect, useMemo, useRef, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { createUser } from '../services/user.service';
import { toast } from 'react-toastify';
import defaultImage from '../assets/defaultImage.png'

const Signup = ({setIsLoginForm, setClickLogin}) => {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [profileImage, setProfileImage] = useState(defaultImage);
    const [licenseImage, setLicenseImage] = useState(defaultImage);

    const [profileImageFile, setProfileImageFile] = useState(null);
    const [licenseImageFile, setLicenseImageFile] = useState(null);

    const profileImgInputRef = useRef(null);
    const licenseImgInputRef = useRef(null);

    const initialForm = useMemo(() => ({
        userName: "",
        email: "",
        password: "",
        phoneNumber: "",
        dateOfBirth: "",
    }), []);

    const uploadProfileImage = (file) => {
        if(!file) {
            return
        }

        setProfileImageFile(file);
        const url = URL.createObjectURL(file);
        setProfileImage(url);
    }

    const uploadLicenseImage = (file) => {
        if(!file) {
            return;
        }

        setLicenseImageFile(file);
        const url = URL.createObjectURL(file);
        setLicenseImage(url);
    }

    //cleanup blob urls to prevent memory leaks
    useEffect(() =>  {
        return () => {
            if(profileImage?.startsWith("blob:")) {
                URL.revokeObjectURL(profileImage)
            }

            if(licenseImage?.startsWith("blob:")) {
                URL.revokeObjectURL(licenseImage)
            }
        }
    }, [profileImage, licenseImage]);

    const [form, setForm] = useState(initialForm);

    const handleCreateUser = async () => {
        try {
            setIsLoading(true);
            const missingFields = Object.keys(form).filter((k) => {
            const v = form[k];
            return typeof v === "string" ? !v.trim() : !v;
            });

            if (missingFields.length) {
            toast.warn(`Missing: ${missingFields.join(", ")}`);
            setIsLoading(false);
            return;
            }

            const fd = new FormData();
            fd.append("userName", form.userName);
            fd.append("email", form.email);
            
            if(form.password.trim()) {
                fd.append("password", form.password);
            }

            fd.append("phoneNumber", form.phoneNumber);
            fd.append("dateOfBirth", form.dateOfBirth);

            if(profileImage) {
                fd.append("profileImageUrl", profileImageFile);
            }

            if(licenseImage) {
                fd.append("licenseImageUrl", licenseImageFile);
            }

            const response = await createUser(fd);

            if(!response) {
                toast.error("No response returned from createUser().");
                return;
            }

            if(!response.success) {
                toast.error(response?.message || "Failed to signup.");
                return;
            }

            toast.success(response?.message || "Signup success!")

            setForm(initialForm);
            setProfileImageFile(null);
            setLicenseImageFile(null);
            setProfileImage(defaultImage);
            setLicenseImage(defaultImage);
        } catch (error) {
            console.error("An Error Occurred at handleCreateUser()", error);
            toast.error("Something went wrong. Please try again later!")
        } finally {
            setIsLoading(false);
        }
    }

  return (
    <div 
    onClick={(e) => {
        e.stopPropagation();
    }}
    className='w-1/2 h-8/10'>
        <form 
        onSubmit={async (e) => {
            e.preventDefault();
            await handleCreateUser();
        }}
        className='bg-[#a4a4a4] relative rounded-xl flex w-full h-full shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] shadow-gray-700 justify-center items-center'>
            <div className='w-1/2 flex flex-col gap-3 h-full py-15 px-5'>
                <div className='relative h-1/2'>
                    <img src={profileImage} alt="" className='w-full h-full object-fit rounded-lg border-3 border-footer' />
                    <div 
                    onClick={() => profileImgInputRef.current?.click()}
                    className='absolute bottom-3 right-3 px-2 py-1 cursor-pointer shadow-lg rounded-sm text-amber-50 active:opacity-65 bg-footer hover:opacity-90'>
                        upload profile image
                    </div>
                    <input 
                    ref={profileImgInputRef}
                    type="file"
                    accept='image/*'
                    onChange={(e) => uploadProfileImage(e.target.files[0])}
                    className='hidden'
                    />
                </div>
                <div className='relative h-1/2'>
                    <img src={licenseImage} alt="" className='w-full h-full object-fit rounded-lg border-3 border-footer'/>
                    <div 
                    onClick={() => licenseImgInputRef.current?.click()}
                    className='absolute bottom-3 right-3 px-2 shadow-lg py-1 rounded-sm cursor-pointer active:opacity-65 text-amber-50 bg-footer hover:opacity-90'>
                        upload license image
                    </div>
                    <input 
                    type="file"
                    ref={licenseImgInputRef}
                    accept='image/*'
                    onChange={(e) => uploadLicenseImage(e.target.files[0])}
                    className='hidden'
                    />
                </div>
            </div>
            <div className='w-1/2 border-l-3 border-footer text-footer px-5'>
                <div className='text-4xl text-center font-bold tracking-wide'>
                    Register Now
                </div>
                <div className='opacity-80 font-semibold text-lg py-2'>
                    Enter your information to register.
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='w-full flex flex-col'>
                        <label 
                        htmlFor="username"
                        className='font-bold tracking-wide'
                        >
                            Username
                        </label>
                        <input
                        type="text" 
                        id='username' 
                        placeholder='Enter your username'
                        value={form.userName}
                        onChange={(e) => setForm(prev => ({ ...prev, userName: e.target.value}))}
                        className='outline-none border-2 border-footer rounded-sm font-bold px-3 py-1'
                        />
                    </div>
                    <div className='w-full flex flex-col'>
                        <label 
                        htmlFor="email"
                        className='font-bold tracking-wide'
                        >
                            Email
                        </label>
                        <input
                        type="email" 
                        id='email' 
                        placeholder='Enter your email'
                        value={form.email}
                        onChange={(e) => setForm( prev => ({ ...prev, email: e.target.value}))}
                        className='outline-none border-2 border-footer rounded-sm font-bold px-3 py-1'
                        />
                    </div>
                    <div className='w-full flex flex-col'>
                        <label 
                        htmlFor="password"
                        className='font-bold tracking-wide'
                        >
                            Password
                        </label>
                        <div className='flex items-center justify-between border-2 border-footer rounded-sm font-bold px-3 py-1'>
                            <input
                            type={isShowPassword ? "text" : "password"}
                            id='password' 
                            placeholder='Enter your username'
                            value={form.password}
                            onChange={(e) => setForm( prev => ({ ...prev, password: e.target.value}))}
                            className='outline-none w-full'
                            />
                            {
                                isShowPassword ?
                                <FaEye 
                                onClick={() => setIsShowPassword(!isShowPassword)}
                                className='cursor-pointer active:opacity-65 hover:opacity-90'
                                />
                                :
                                <FaEyeSlash 
                                onClick={() => setIsShowPassword(!isShowPassword)}
                                className='cursor-pointer active:opacity-65 hover:opacity-90'
                                />
                            }
                        </div>
                    </div>
                    <div className='flex flex-col font-bold'>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input 
                        type="text" 
                        id='phoneNumber'
                        placeholder='Enter your phone number'
                        value={form.phoneNumber}
                        onChange={(e) => setForm(prev => ({ ...prev, phoneNumber: e.target.value}))}
                        className='outline-none border-2 border-footer rounded-sm font-bold px-3 py-1'
                        />
                    </div>
                    <div className='flex flex-col font-bold'>
                        <label htmlFor="dob">Date of Birth</label>
                        <input 
                        type="text" 
                        id='dob'
                        placeholder='Enter your Date of Birth (dd/mm/yyy)'
                        value={form.dateOfBirth}
                        onChange={(e) => setForm(prev => ({ ...prev, dateOfBirth: e.target.value}))}
                        className='outline-none border-2 border-footer rounded-sm font-bold px-3 py-1'
                        />
                    </div>
                    <button
                    type='submit'
                    disabled={isLoading}
                    className='transition-all duration-500 py-2 mt-5 bg-footer text-amber-50 rounded-md font-bold tracking-wide cursor-pointer active:opacity-65 hover:opacity-90'
                    >
                        {isLoading ? "Loading..." : "Signup"}
                    </button>
                    <div className='text-sm flex justify-center gap-1'>
                        <div>Already have an account?</div>
                        <div 
                        onClick={() => setIsLoginForm(false)}
                        className='underline cursor-pointer active:opacity-65 hover:opacity-90 font-bold'>Login</div>
                    </div>
                </div>
            </div>
            <IoClose 
            onClick={() => setClickLogin(false)}
            className='absolute top-2 right-2 text-3xl cursor-pointer active:opacity-65 hover:opacity-90'/>
        </form>
    </div>
  )
}

export default Signup