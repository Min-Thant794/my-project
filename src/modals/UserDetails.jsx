import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useUser } from '../context/UserContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { IoClose } from 'react-icons/io5';
import { updateUser } from '../services/user.service';

const UserDetails = ({setIsUserDetails}) => {

  const { userData } = useUser();
  const userId = userData._id || userData.id;
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isEdit, setIsEdit ] = useState(false);

  const [ previewProfileImg, setPreviewProfileImg ] = useState(userData?.profileImageUrl);
  const [ previewLicenseImg, setPreviewLicenseImg ] = useState(userData?.licenseImageUrl);
  const [ profileImgFile, setProfileImgFile ] = useState(null);
  const [ licenseImgFile, setLicenseImgFile ] = useState(null);
  
  const initialForm = useMemo(() => ({
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
    dateOfBirth: "",
  }), []);

  const profileImageInputRef = useRef(null);
  const licenseImageInputRef = useRef(null);

  const updateProfileImage = (file) => {
    if(!file) {
        return;
    }

    setProfileImgFile(file);
    const url = URL.createObjectURL(file);
    setPreviewProfileImg(url);
  }

  const updateLicenseImage =  (file) => {
    if(!file) {
        return;
    }

    setLicenseImgFile(file);
    const url = URL.createObjectURL(file);
    setPreviewLicenseImg(url);
  }

  const [form, setForm] = useState(initialForm);

  const handleUpdate = async () => {
    try {
        setIsLoading(true);

        const fd = new FormData();
        fd.append("userName", form.userName);
        fd.append("email", form.email);
        fd.append("password", form.password);
        fd.append("phoneNumber", form.phoneNumber);
        fd.append("dateOfBirth", form.dateOfBirth);

        if (previewProfileImg) {
            fd.append("profileImageUrl", profileImgFile);
        }

        if (previewLicenseImg) {
            fd.append("licenseImageUrl", licenseImgFile);
        }

        const response = await updateUser(userId, fd);

        if(!response.success) {
            toast.error("Failed to update user.")
            return;
        }

        toast.success(response?.message || "User info is successfully updated!");
        clearForm();
        setIsUserDetails(false);
    } catch (error) {
        console.log("An Error Occurred at handleUpdate()", error);
        toast.error("Something went wrong. Please try again later!");
        return;
    } finally {
        setIsLoading(false);
    }
  }

  useEffect(() => {
    return () => {
        if(previewProfileImg?.startsWith("blob:")) {
            URL.revokeObjectURL(previewProfileImg)
        }

        if(previewLicenseImg?.startsWith("blob:")) {
            URL.revokeObjectURL(previewLicenseImg)
        }
    }
  }, [previewProfileImg, previewLicenseImg]);

  const clearForm = () => {
    setForm(initialForm);
    setPreviewProfileImg(userData?.profileImageUrl);
    setPreviewLicenseImg(userData?.licenseImageUrl);
    setProfileImgFile(null);
    setLicenseImgFile(null);
  }

  return (
    <div 
    onClick={() => {
        setIsUserDetails(false)
    }}
    className='absolute flex justify-center items-center w-full inset-0 h-200 z-50 bg-black/10'>
        <div 
        onClick={(e) => {
            e.stopPropagation();
        }}
        className='w-1/2 h-7/10 relative'>
            <form
            onSubmit={(e) => {
                e.stopPropagation();
                handleUpdate();
            }}
            className='bg-[#a4a4a4] relative rounded-xl py-12 flex w-full h-full shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] shadow-gray-700 justify-center items-center'>
                <div className='w-1/2 flex flex-col gap-3 h-full px-5'>
                    <div className='relative h-1/2'>
                        <img src={previewProfileImg} alt="" className='w-full h-full object-fit rounded-lg border-3 border-footer' />
                        {
                            isEdit &&
                            <div
                            onClick={() => profileImageInputRef.current?.click()}
                            className='absolute bottom-3 right-3 px-2 py-1 cursor-pointer shadow-lg rounded-sm text-amber-50 active:opacity-65 bg-footer hover:opacity-90'
                            >
                                update Profile Image
                            </div>
                        }
                        <input 
                        ref={profileImageInputRef}
                        type="file"
                        accept='image/*'
                        onChange={(e => updateProfileImage(e.target.files[0]))}
                        className='hidden'
                        />
                    </div>
                    <div className='relative h-1/2'>
                        <img src={previewLicenseImg} alt="" className='w-full h-full object-fit rounded-lg border-3 border-footer' />
                        {
                            isEdit &&
                            <div
                            onClick={() => licenseImageInputRef.current?.click()}
                            className='absolute bottom-3 right-3 px-2 py-1 cursor-pointer shadow-lg rounded-sm text-amber-50 active:opacity-65 bg-footer hover:opacity-90'
                            >
                                update license image
                            </div>
                        }
                        <input 
                        ref={licenseImageInputRef}
                        type="file"
                        accept='image/*'
                        onChange={(e => updateLicenseImage(e.target.files[0]))}
                        className='hidden'
                        />
                    </div>
                </div>
                <div className='w-1/2 h-full flex flex-col gap-3 border-l-3 border-footer text-footer px-5'>
                    <div className='text-4xl text-center font-bold tracking-wide'>
                        User Details
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
                            placeholder={userData.userName}
                            value={form.userName}
                            readOnly={!isEdit}
                            onChange={(e) => setForm(prev => ({ ...prev, userName: e.target.value}))}
                            className='outline-none border-2 border-footer rounded-sm font-bold px-3 py-1'
                            />
                        </div>
                    </div>

                    <div className='flex flex-col gap-3'>
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
                            placeholder={userData.email}
                            value={form.email}
                            readOnly={!isEdit}
                            onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value}))}
                            className='outline-none border-2 border-footer rounded-sm font-bold px-3 py-1'
                            />
                        </div>
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
                            readOnly={!isEdit}
                            onChange={(e) => setForm( prev => ({ ...prev, password: e.target.value}))}
                            className='outline-none w-full'
                            />
                            {
                                isShowPassword && !isEdit ?
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

                    <div className='flex flex-col gap-3'>
                        <div className='w-full flex flex-col'>
                            <label 
                            htmlFor="phoneNumber"
                            className='font-bold tracking-wide'
                            >
                                Phone Number
                            </label>
                            <input 
                            type="text" 
                            id='username'
                            placeholder={userData.phoneNumber}
                            value={form.phoneNumber}
                            readOnly={!isEdit}
                            onChange={(e) => setForm(prev => ({ ...prev, phoneNumber: e.target.value}))}
                            className='outline-none border-2 border-footer rounded-sm font-bold px-3 py-1'
                            />
                        </div>
                    </div>

                    <div className='flex flex-col font-bold'>
                            <label 
                            htmlFor="dob"
                            className='font-bold tracking-wide'
                            >
                                Date of Birth
                            </label>
                            <input 
                            type="text"
                            id='dob'
                            placeholder={userData.dateOfBirth.slice(0, 10)}
                            value={form.dateOfBirth}
                            readOnly={!isEdit}
                            onChange={(e) => setForm(prev => ({ ...prev, dateOfBirth: e.target.value}))}
                            className='outline-none border-2 border-footer rounded-sm font-bold px-3 py-1'
                            />
                    </div>
                    {
                        isEdit ?
                        <div className='text-amber-50 justify-end gap-5 flex items-center font-bold tracking-wide'>
                            <div 
                            onClick={() => {
                                setIsEdit(!isEdit)
                                clearForm();
                            }}
                            className='transition-all w-2/7 text-center rounded-md py-2 mt-5 bg-[#ff0000] cursor-pointer active:opacity-65   hover:opacity-90'>
                                Cancel
                            </div>
                            <button
                            type='submit'
                            disabled={isLoading}
                            className='transition-all w-2/7 duration-500 rounded-md py-2 mt-5 bg-footer cursor-pointer active:opacity-65 hover:opacity-90'
                            >
                                {isLoading ? "Loading..." : "Update"}
                            </button>
                        </div>
                        :
                        <div className='w-full flex justify-end items-center text-amber-50 font-bold tracking-wide'>
                            <div 
                            onClick={() => setIsEdit(!isEdit)}
                            className='transition-all w-2/7 text-center rounded-md py-2 mt-5 bg-footer cursor-pointer active:opacity-65 hover:opacity-90'>
                                Edit
                            </div>
                        </div>
                    }
                </div>
            </form>
            <IoClose 
            onClick={() => setIsUserDetails(false)}
            className='absolute top-2 right-2 text-3xl cursor-pointer active:opacity-65 hover:opacity-90'/>
        </div>
    </div>
  )
}

export default UserDetails