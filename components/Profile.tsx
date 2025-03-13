'use client';
import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import profilePic from '../assets/profile.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const variant = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            delay: 0.2,
            stiffness: 100
        }
    }
};

const title = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1.5,
            duration: 1.5
        }
    }
};

const Profile = () => {
    return (
        <motion.div
            variants={variant}
            initial="hidden"
            animate="visible"
            className='bg-white rounded-md shadow-lg p-6 md:p-8 lg:p-10 mx-4 md:mx-6 lg:mx-8'>
            
            <div className="flex justify-center mb-3">
                <Image
                    src={profilePic}
                    alt="Profile Picture"
                    className="rounded-full border-4 border-gray-200"
                    width={200}
                    height={200}
                />
            </div>
            
            <motion.h1
                variants={title}
                className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2'>
                Chammakhi Islem
            </motion.h1>
            
            <h3 className='text-gray-500 text-xl text-center mb-4'>Software Engineer</h3>
            
            {/* Social media links included with Icons */}
            <div className="flex justify-center gap-6 mb-3">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className='bg-blue-50 rounded-full p-3 hover:bg-blue-300'>
                    <a href="https://www.linkedin.com/in/islem-chammakhi-2bb03b316/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                        <FaLinkedin size={30} />
                    </a>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className='bg-blue-50 rounded-full p-3 hover:bg-blue-300'>
                    <a href="https://github.com/Islem-Chammakhi" target="_blank" rel="noopener noreferrer" className="text-gray-800">
                        <FaGithub size={30} />
                    </a>
                </motion.div>
            </div>
            
            {/* Personal information */}
            <div className='bg-gray-100 p-6 rounded-md'>
                <div className='flex items-center mb-4'>
                    <MdPhone size={30} className="text-orange-400 mr-4" />
                    <div>
                        <h3 className='text-gray-500 text-lg'>Phone</h3>
                        <p className='text-lg'>23447937</p>
                    </div>
                </div>
                <div className='flex items-center mb-4'>
                    <MdEmail size={30} className="text-orange-400 mr-4" />
                    <div>
                        <h3 className='text-gray-500 text-lg'>Email</h3>
                        <p className='text-lg'>islemchammakhi@gmail.com</p>
                    </div>
                </div>
                <div className='flex items-center mb-4'>
                    <MdLocationOn size={30} className="text-orange-400 mr-4" />
                    <div>
                        <h3 className='text-gray-500 text-lg'>Location</h3>
                        <p className='text-lg'>Tunisia, Monastir</p>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default Profile;


