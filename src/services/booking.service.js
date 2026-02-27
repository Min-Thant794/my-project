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

export const createMyBooking = async ({ carId, startDate, endDate }) => {
    try {
        const response = await axiosInstance.post(API_ROUTES.CREATE_BOOKING, {
            carId,
            startDate,
            endDate
        });
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

export const updateMyBooking = async (bookingId, { startDate, endDate }) => {
    try {
        const payload = {};
        if(startDate !== undefined) {
            payload.startDate = startDate;
        }

        if(endDate !== undefined) {
            payload.endDate = endDate;
        }

        const response = await axiosInstance.patch(`${API_ROUTES.UPDATE_MY_BOOKING}/${bookingId}`);

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

export const cancelMyBooking = async (bookingId) => {
    try {
        const response = await axiosInstance.delete(`${API_ROUTES.DELETE_MY_BOOKING}/${bookingId}`);

        console.log("cancelMyBooking() response: ", response);
        return response.data;
    } catch (error) {
        console.log("An Error Occurred at cancelMyBooking()", error);
        return {
            success: false,
            message: error.response?.data?.message || "Internal Server Error",
            error
        }
    }
}