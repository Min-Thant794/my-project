import { FaFacebook, FaInstagram, FaViber, FaTelegram } from "react-icons/fa";

export const navLinks = [
    {
        path: "/",
        name: "Home"
    },
    {
        path: "/rates",
        name: "Rates"
    },
    {
        path: "/locations",
        name: "Locations"
    },
    {
        path: "/cars",
        name: "Cars"
    },
    {
        path: "/blog",
        name: "Blog"
    },
    {
        path: "/login",
        name: "Login"
    }
]

const Facebook = FaFacebook;
const Instagram = FaInstagram;
const Viber = FaViber;
const Telegram = FaTelegram;

export const SocialMediaIcons = [
  {name: "Facebook", icon: Facebook, link: "https://www.facebook.com"},
  {name: "Instagram", icon: Instagram, link: "https://www.instagram.com"},
  {name: "Viber", icon: Viber, link: "https://www.viber.com"},
  {name: "Telegram", icon: Telegram, link: "https://www.telegram.org"},
]