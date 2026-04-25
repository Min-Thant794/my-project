import axios from "axios";
import { API_ROUTES } from "./config";
import { getMemToken } from "../utils/authToken";

const axiosInstance = axios.create({
    baseURL: API_ROUTES.LOCAL_SERVER_URL,
    withCredentials: true,
    //timeout: 10000
});

axiosInstance.interceptors.response.use(
    (config) => {
        const memToken = getMemToken();

        if(memToken) {
            config.headers.Authorization = `Bearer ${memToken}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (res) => res,
    (error) => {
        const status = error?.response?.status;

        if(status === 403) {
            console.log("Forbidden: you don't have permission!");
        }

        return Promise.reject(error);
    }
)

export default axiosInstance;