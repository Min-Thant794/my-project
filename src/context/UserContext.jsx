import React, { useCallback, useEffect, useRef, useState } from 'react'
import { getUser } from '../services/user.service';
import axiosInstance from '../config/axiosInstance';
import { API_ROUTES } from '../config/config';
import { toast } from 'react-toastify';
import { clearMemToken } from '../utils/authToken';
import { UserContext } from './UserContextObject';

const isRememberMe = () => JSON.parse(localStorage.getItem("rememberMe") || "false");

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [ authLoading, setAuthLoading ] = useState(true);

    const timerRef = useRef(null);

    const refreshUser = useCallback(async () => {
        try {
            const result = await getUser();
            const payload = result?.data ?? result;

            const merged = payload?.user ?
            {
                ...payload.user,
                ...(payload.customerProfile || {}),
                userId: payload.user?._id || payload.user?.id,
                customerId: payload.customerProfile?._id || payload.customerProfile?.id
            }
            :
            (payload?.userName ? payload : null);

            setUserData(merged);
            return merged;
        } catch {
            setUserData(null);
            return null;
        } finally {
            setAuthLoading(false);
        }
    }, []);

    useEffect(() => {
        refreshUser();
    }, [refreshUser]);

    const logout = useCallback(async () => {
        setUserData(null);
        clearMemToken();

        try {
            await axiosInstance.post(API_ROUTES.LOGOUT_USER);
            localStorage.removeItem("rememberMe");
            toast.success("Logged out");
        } catch (error) {
            console.error("Failed to logout from server", error);
        }
    }, []);

    useEffect(() => {
        if(!userData) return;

        if(isRememberMe()) {
            clearTimeout(timerRef.current);
            return;
        }

        const resetTimer = () => {
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                logout();
            }, 6000);
        };

        resetTimer();

        window.addEventListener("mousemove", resetTimer);
        window.addEventListener("keydown", resetTimer);
        window.addEventListener("click", resetTimer);

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener("mousemove", resetTimer);
            window.removeEventListener("keydown", resetTimer);
            window.removeEventListener("click", resetTimer);
        };
    }, [userData, logout]);

    return (
        <UserContext.Provider value={{ userData, setUserData, authLoading, refreshUser, logout }}>
            {children}
        </UserContext.Provider>
    )
}