import axiosInstance from "../config/axiosInstance";
import { API_ROUTES } from "../config/config";

export const createUser = async (payload) => {
    try {
        const response = await axiosInstance.post(API_ROUTES.USER_SIGNUP, payload, payload instanceof FormData ? { headers: {"Content-Type" : "multipart/form-data"}} : undefined);
        console.log("createUser() response: ", response);
        return response.data;
    } catch (error) {
        console.log("An Error Occurred at createUser()", error);
        return {
            success: false,
            message: error?.response?.data?.message || error?.message || "Internal Server Error",
            error
        }
    }
}

export const loginUser = async (payload) => {
    try {
        const response = await axiosInstance.post(API_ROUTES.USER_LOGIN, payload);
        console.log("loginUser() response: ", response);
        return response.data;
    } catch (error) {
        console.log("An Error Occurred at loginUser()", error);
        return {
            success: false,
            message: error?.response?.data?.message || error?.message || "Internal Server Error",
            error
        }
    }
}

export const getUser = async () => {
    try {
        const response = await axiosInstance.get(API_ROUTES.GET_CURRENT_User);
        console.log("getUser() response: ", response);
        return response.data;
    } catch (error) {
        console.log("An Error Occurred at getUser()", error);
        return {
            success: false,
            message: error.response?.data?.message || "Internal Server Error",
            error
        }
    }
}

export const updateUser = async(id, payload) => {
    try {
        const route = `${API_ROUTES.UPDATE_USER}/${id}`.replace(/\/+/g, "/");
        const response = await axiosInstance.put(
            route,
            payload,
            payload instanceof FormData ? { headers: { "Content-Type": "multipart/form-data" } } : undefined
        );

        console.log("updateUser() response: ", response);
        return response.data;
    } catch (error) {
        console.log("An Error Occurred at updateUser()", error);
        return {
            success: false,
            message: error.response?.data?.message || "Internal Server Error",
            error
        }
    }
}

export const resetPassword = async ({ token, newPassword }) => {
 try {
    const response = await axiosInstance.post(API_ROUTES.RESET_PASSWORD, {token, newPassword});

    if(!response.success) {
        console.log("password reset failed: ", response?.data?.message);
        return;
    }

    console.log("resetPassword response(): ", response);
    return response?.data;
 } catch (error) {
    console.log("An Error Occurred at resetPassword()", error);
    return {
        success: false,
        message: error?.response?.data?.message || "Internal Server Error",
        error
    }
 }   
}