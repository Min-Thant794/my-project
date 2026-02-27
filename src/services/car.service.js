import axiosInstance from "../config/axiosInstance";
import { API_ROUTES } from "../config/config";

export const getAllCars = async (page = 1, limit = 12, q = "", mode = "contain", startDate = null, endDate = null) => {
  try {
    const normalizedMode = (mode || "contain").toLowerCase();
    
    const safeMode = ["contain", "typeahead"].includes(normalizedMode) ? normalizedMode : "contain";
    const params = { page, limit, q, mode: safeMode };

    if (startDate && endDate) {
      params.startDate = startDate;
      params.endDate = endDate;
    }

    const response = await axiosInstance.get(API_ROUTES.GET_ALL_CARS, {
      params
    });

    console.log("Response all car: ", response.data);
    return response.data;

  } catch (error) {
//   console.log("An Error Occurred at getAllCars()");
//   console.log("status:", error?.response?.status);
//   console.log("data:", error?.response?.data);
//   console.log("params:", { page, limit, q, mode, startDate, endDate });
    return {
      success: false,
      message: error.response?.data.message || "Internal Server Error",
      error
    };
  }
};

export const getCarById = async (id) => {
    try {
        const response = await axiosInstance.get(`${API_ROUTES.GET_ALL_CARS}/${id}`);
        console.log("Response getCarById", response);
        return response.data;
    } catch (error) {
        console.log("An Error Occurred at getCarById()", error);
        return {
            success: false,
            message: error.response?.data.message || "Internal Server Error",
            error
        }
    }
}

export const getCarsByDiscount = async ({ page = 1, limit = 6 } = {}) => {
  try {
    const response = await axiosInstance.get(API_ROUTES.GET_CARS_BY_DISCOUNT, {
      params: { page, limit }
    });

    console.log("getCarsByDiscount() response.data: ", response.data);
    return response.data;
  } catch (error) {
    console.log("An Error Occurred at getCarsByDiscount()", error);
    return {
      success: false,
      message: error.response?.data?.message || "Internal Server Error",
      error
    };
  }
};