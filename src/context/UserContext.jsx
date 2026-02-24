import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { getUser } from '../services/user.service';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [ authLoading, setAuthLoading ] = useState(true);

    useEffect(() => {
        const hydrate = async () => {
            try {
                const result = await getUser();
                const payload = result?.data ?? result;

                const merged = payload?.user ?
                {
                    ...payload.user,
                    ...(payload.customerProfile || {}),
                    userId: payload.user?._id || payload.user?.id,
                    customerId: payload.customerProfile?._id || payload.customerProfile?.id,
                }
                :
                (payload?.userName ? payload : null);

                setUserData(merged);
            } catch (error) {
                setUserData(null);
            } finally {
                setAuthLoading(false);
            }
        }
        hydrate();
    }, []);

    const logoutLocal = () => setUserData(null);

    return (
        <UserContext.Provider value={{ userData, setUserData, authLoading, logoutLocal }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);
    if(!context) {
        throw new Error("useUser must be used inside <UserProvider>");
    }
    return context;
};