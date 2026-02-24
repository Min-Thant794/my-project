import React, { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import LoginImg from '../assets/maclaren.jpg'
import Signup from './Signup';
import { loginUser } from '../services/user.service';
import { toast } from 'react-toastify';
import { setMemoryToken, clearMemToken } from '../utils/authToken';
import { useUser } from '../context/UserContext';

const Login = ({setClickLogin}) => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [isRemember, setIsRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [userNameRequired, setUserNameRequired] = useState("");
  const [passwordRequired, setPasswordRequired] = useState("");

  useEffect(() => {
    if(isSignUpForm) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
  }, [isSignUpForm])

  const toggleRememberMe = () => {
    setIsRemember(!isRemember);
  }

  const handleLogin = async () => {
    try {
        setIsLoading(true);
        setUserNameRequired("");
        setPasswordRequired("");
        
        if(userName.trim() === "") {
            setUserNameRequired("Username is required!");
            return;
        }

        if(password.trim() === "") {
            setPasswordRequired("Password is required!");
            return;
        }

        const payload = {userName: userName, password: password, rememberMe: isRemember}
        const response = await loginUser(payload);

        if(!response) {
            toast.error("No response returned from handleLogin().");
            return;
        }

        if(!response.success) {
            toast.error(response?.message || "Failed to login!");
            return;
        }

        if(!isRemember) {
            const token =  response?.data?.token;

            if(!token) {
                toast.error("Token missing.");
                return;
            }

            setMemoryToken(token);
        } else {
            clearMemToken();
        }

        toast.success(response?.message || "Login success");
        
        setUserName('');
        setPassword('');
        setClickLogin(false);

    } catch (error) {
        console.log("An Error Occurred at handleLogin()", error);
        toast.error("Something went wrong. Please try again later!");
        return
    } finally {
        setIsLoading(false);
    }
  }

  useEffect(() => {
    if(userNameRequired && userName.trim()) setUserNameRequired("");
  }, [userName]);

  useEffect(() => {
    if(passwordRequired && password.trim()) setPasswordRequired("");
  }, [password]);

  return (
    <div 
    onClick={() => setClickLogin(false)}
    className='absolute flex justify-center items-center w-full inset-0 h-200 z-50 bg-black/10'>
        {
            isSignUpForm ?
            <Signup
            setClickLogin={setClickLogin}
            setIsLoginForm={setIsSignUpForm}
            />
            :
            <div 
            onClick={(e) => {
                e.stopPropagation();
            }}
            className='bg-[#a4a4a4] relative rounded-xl flex w-1/2 h-7/10 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] shadow-gray-700 justify-center items-center'>
                <div className='w-1/2 h-full'>
                    <img src={LoginImg} className='h-full w-full rounded-tl-xl rounded-bl-xl object-fit' />
                </div>
                <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                }}
                className='flex flex-col gap-5 w-1/2 px-5 text-footer'>
                    <div className='text-5xl font-bold tracking-wide'>
                        Welcome Back!
                    </div>
                    <div className='text-4xl font-bold tracking-wide'>
                        Login
                    </div>
                    <div className='flex flex-col'>
                        <label 
                        htmlFor="username"
                        className='font-bold tracking-wide'
                        >
                            Username
                        </label>
                        <input 
                        type="text" 
                        id='username' 
                        value={userName}
                        placeholder='Enter Your Username' 
                        onChange={(e) => {
                            setUserName(e.target.value)
                            if(userNameRequired) setUserNameRequired("");
                        }}
                        className='border-2 border-footer rounded-sm font-bold px-3 py-1 outline-none'
                        />
                        {userNameRequired && <p className="text-red-600 text-sm mt-1">{userNameRequired}</p>}
                    </div>
                    <div className=''>
                        <label 
                        htmlFor="password"
                        className='font-bold tracking-wide'
                        >
                            Password
                        </label>
                        <div className='flex items-center justify-between border-2 border-footer rounded-sm px-3 py-1'>
                            <input 
                            type={isShowPassword ? "text" : "password"} 
                            id='password' 
                            value={password}
                            placeholder='Enter Your Password'
                            onChange={(e) => {
                                setPassword(e.target.value)
                                if(passwordRequired) setPasswordRequired("");
                            }}
                            className='outline-none font-bold'
                            />
                            {
                                isShowPassword ?
                                <FaEye
                                onClick={() => setIsShowPassword(!isShowPassword)}
                                className='cursor-pointer active:opacity-75 hover:opacity-90'
                                />
                                :
                                <FaEyeSlash
                                onClick={() => setIsShowPassword(!isShowPassword)}
                                className='cursor-pointer active:opacity-75 hover:opacity-90'
                                />
                            }
                        </div>
                    </div>
                    <div className='flex justify-between items-center font-semibold text-sm'>
                        <div
                        onClick={toggleRememberMe}
                        className="cursor-pointer flex items-center gap-2"
                        >
                        <div
                            className={`relative w-11 h-5 rounded-full transition-colors duration-700 ${
                            isRemember ? "bg-[#eaeaea]" : "bg-footer"
                            }`}
                        >
                            <div
                            className={`absolute top-1/2 left-0.5 -translate-y-1/2 h-4 w-4 rounded-full transition-transform duration-700 ${
                                isRemember ? "translate-x-6 bg-footer" : "translate-x-0 bg-[#eaeaea]"
                            }`}
                            />
                        </div>
                        <div className='hover:opacity-90 active:opacity-65'>Remember Me</div>
                        </div>
                        <div className='active:opacity-65 hover:opacity-90 cursor-pointer'>
                            Forget Password?
                        </div>
                    </div>
                    <button
                    type='submit'
                    disabled={isLoading}
                    className='transition-all duration-500 py-2 bg-footer text-amber-50 rounded-md font-bold tracking-wide cursor-pointer active:opacity-65 hover:opacity-90'
                    >
                        {isLoading ? "Loading..." : "Login"}
                    </button>
                    <div className='text-sm flex justify-center gap-1'>
                        <div>Don't have an account?</div>
                        <div 
                        onClick={() => setIsSignUpForm(true)}
                        className='underline cursor-pointer active:opacity-65 hover:opacity-90 font-bold'>Sign up</div>
                    </div>
                </form>
                <IoClose 
                onClick={() => setClickLogin(false)}
                className='absolute top-2 right-2 text-3xl cursor-pointer active:opacity-65 hover:opacity-90'/>
            </div>
        }
    </div>
  )
}

export default Login