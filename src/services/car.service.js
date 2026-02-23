import axiosInstance from "../config/axiosInstance";
import { API_ROUTES } from "../config/config";

export const getAllCars = async () => {
    try {
        const response = await axiosInstance.get(API_ROUTES.GET_ALL_CARS);
        console.log("getAllCars() response: ", response);
        return response.data;
    } catch (error) {
        console.log("An Error Occurred at getAllCars()", error);
        return {
            success: false,
            message: error.response?.data.message || "Internal Server Error",
            error
        }
    }
}