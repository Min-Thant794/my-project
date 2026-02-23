import axiosInstance from "../config/axiosInstance";
import { API_ROUTES } from "../config/config";

export const getMyBooking =  async () => {
    try {
        const response = await axiosInstance.get(API_ROUTES.GET_MY_BOOKINGS);
        console.log("getMyBooking() response: ", response);
        return response.data;
    } catch (error) {
        console.log("An Error Occurred at getMyBooking()", error);
        return {
            success: false,
            message: error.response?.data?.message || "Internal Server Error",
            error
        }
    }
}

export const createMyBooking = async (payload) => {
    try {
        const response = await axiosInstance.post(API_ROUTES.CREATE_BOOKING, payload);
        console.log("createMyBooking() response: ", response);
        return response.data;
    } catch (error) {
        console.log("An Error Occurred at createMyBooking()", error);
        return {
            success: false,
            message: error.response?.data?.message || "Internal Server Error",
            error
        }
    }
}

export const updateMyBooking = async (id, payload) => {
    try {
        const response = axiosInstance.put(`${API_ROUTES.UPDATE_MY_BOOKING}/${id}`, payload);
        console.log("updateMyBooking() response: ", response);
        return response.data;
    } catch (error) {
        console.log("An Error Occurred at updateMyBooking()", error);
        return {
            success: false,
            message: error.response?.data?.message || "Internal Server Error",
            error
        }
    }
}

export const deleteMyBooking = async (id) => {
    try {
        const response = await axiosInstance.delete(`${API_ROUTES.DELETE_MY_BOOKING}/${id}`);
        console.log("deleteMyBooking() response: ", deleteMyBooking);
        return response.data;
    } catch (error) {
        console.log("An Error Occurred at deleteMyBooking()", error);
        return {
            success: false,
            message: error.response?.data?.message || "Internal Server Error",
            error
        }
    }
}