'use client'
import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion';
const variant={
  hidden :{
    opacity:0
  },
  visible:{
    opacity:1,
    transition:{
        type:'spring',
        delay:0.5,
        stiffness:50
              }
            }
}
const Navbar = () => {
  return (
    
    <motion.nav
    variants={variant}
    initial="hidden"
    animate="visible"
    className="fixed w-full z-50 bg-white shadow-md rounded-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center space-x-8">
            <Link href="/">
              <motion.div 
              whileHover={{scale:1.3}}
              transition={{type:'spring',stiffness:500}}
              className="text-gray-800 hover:text-orange-500 text-lg cursor-pointer">Home</motion.div>
            </Link>
            <Link href="/resume">
              <motion.div
              whileHover={{scale:1.3}}
              transition={{type:'spring',stiffness:500}}  
              className="text-gray-800 hover:text-orange-500 text-lg cursor-pointer">Resume</motion.div >
            </Link>
            <Link href="/certif">
              <motion.div 
              whileHover={{scale:1.3}}
              transition={{type:'spring',stiffness:500}}
              className="text-gray-800 hover:text-orange-500 text-lg cursor-pointer">Certificate</motion.div >
            </Link>
        </div>
      </div>
    </motion.nav>

  )
}

export default Navbar