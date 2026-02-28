export const GOOGLE_MAP_API = import.meta.env.VITE_GOOGLE_MAP_API_KEY;
export const EMAILJS_SERVICE_ID =  import.meta.env.VITE_EMAILJS_SERVICE_ID;
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
export const EMAILJS_ADMIN_EMAIL = import.meta.env.VITE_EMAILJS_ADMIN_EMAIL;
const API_BASE_URL = import.meta.VITE_API_BASE_URL || "http://localhost:8100/api/v1";
const VITE_SERVER_URL = import.meta.VITE_SERVER_URL || "http://localhost:8100/";

export const API_ROUTES = {
    LOCAL_BASE_URL: API_BASE_URL,
    LOCAL_SERVER_URL: VITE_SERVER_URL,

    //user auth
    USER_SIGNUP: "/user",
    USER_LOGIN: "/user/auth/login",
    GET_CURRENT_User: "/user/auth/me",
    UPDATE_USER: "/user",
    LOGOUT_USER: "/user/auth/logout",

    //cars
    GET_ALL_CARS: "/cars",
    GET_CARS_BY_DISCOUNT: "/cars/discount-car",

    //bookings
    GET_MY_BOOKINGS: "/bookings/auth/my-bookings",
    CREATE_BOOKING: "/bookings",
    UPDATE_MY_BOOKING: "/bookings/update-my-booking",
    CANCEL_MY_BOOKING: "/bookings/cancel-my-booking"
}