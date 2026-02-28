import React from 'react'
import { motion as Motion } from 'framer-motion'

// Define the animation states (Fade in and slide up slightly)
const animationConfiguration = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
};

const PageTransition = ({ children }) => {
  return (
    <Motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </Motion.div>
  )
}

export default PageTransition