import { ImFacebook2 } from "react-icons/im";
import { FaSquareInstagram, FaViber, FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

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

const Facebook = ImFacebook2;
const Instagram = FaSquareInstagram;
const Linkedin = FaLinkedin;
const YouTube = FaYoutube;

export const SocialMediaIcons = [
  {name: "Facebook", icon: Facebook, link: "https://www.facebook.com"},
  {name: "Instagram", icon: Instagram, link: "https://www.instagram.com"},
  {name: "YouTube", icon: YouTube, link: "https://www.youtube.com"},
  {name: "Linkedin", icon: Linkedin, link: "https://www.linkedin.com"}
]