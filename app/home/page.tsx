'use client';
import React from 'react';
import Card from '../../components/Card';
import { FaCode, FaDatabase,FaAndroid,FaCogs   } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { BiChip } from 'react-icons/bi';
import { AiOutlineDatabase } from 'react-icons/ai';
import { FaLinux } from 'react-icons/fa';
import { FaNetworkWired } from 'react-icons/fa';

const variant = {
  hidden: {
      opacity: 0
  },
  visible: {
      opacity: 1,
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

const HomePage = () => {
    const personalInfo="My name is Islem Chammakhi, and I am currently pursuing a degree in software engineering after completing two years of integrated preparatory studies in computer science. My journey has allowed me to explore various fields such as web and mobile development, databases, networking, Linux, UML design, and object-oriented programming. Passionate about learning and discovering new technologies, I am constantly seeking new challenges and innovative projects to enhance my skills and experience."
    const webDescription="I learned the basics of web development with HTML, CSS, and JavaScript before moving on to React, Node.js, and MongoDB to create simple projects. Later, I explored server-side development with Java Servlet as part of my training."
    const dbDescription="I learned the basics of SQL and PL/SQL, gaining an understanding of database concepts and how to interact with data efficiently."
    const oopDescription="Extensive knowledge of object-oriented programming, with a focus on Java."
    const mobileDescription="Native mobile development with Java using Android Studio."
    const linuxDescription="Basic knowledge of Linux, including essential commands for system navigation and file management."
    const networkingDescription="Basic knowledge of networking concepts, including TCP/IP, DHCP, and DNS."
    return (
        <motion.div
            variants={variant}
            initial="hidden"
            animate="visible"
            className='bg-white rounded-md pb-8 mx-4 md:mx-8 lg:mx-12'>
            
            <motion.div 
                variants={title}
                className='flex flex-col items-center pt-4 mx-auto gap-4 my-3'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mx-2 text-center'>About Me</h1>
                <div className='flex justify-center'>
                    <span className='border-b-4 border-orange-400 w-[50vh] rounded-full'></span>
                </div>
            </motion.div>
            
            <p className='mx-2 my-4 text-lg sm:text-xl md:text-2xl text-gray-700'>
             {personalInfo}
            </p>

            <motion.h1 
                variants={title}
                className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mx-2 my-8 text-center'>What I Do!
            </motion.h1>

            <div className='container  flex flex-col items-center  gap-8   mx-auto '>
                
                <Card
                    backgroundColor="bg-red-100"
                    title="Web Development"
                    description={webDescription}
                    icon={<FaCode size={50} className="text-red-400" />}
                />
                <Card
                    title="Mobile Development"
                    description={mobileDescription}
                    icon={<FaAndroid  size={50} className="text-gray-600" />}
                    backgroundColor="bg-gray-200"
                />
                <Card
                    title="Object-Oriented Programming"
                    description={oopDescription}
                    icon={<FaCogs size={50} className="text-blue-600" />}
                    backgroundColor="bg-blue-200"
                />
                <Card
                    title="Database Management"
                    description={dbDescription}
                    icon={<FaDatabase size={50} className="text-green-600" />}
                    backgroundColor="bg-green-200"
                />
                <Card
                    title="Linux System Administration"
                    description={linuxDescription}
                    icon={<FaLinux size={50} className="text-yellow-600" />}
                    backgroundColor="bg-yellow-200"
                />
                <Card
                    title="Networking Basics"
                    description={networkingDescription}
                    icon={<FaNetworkWired size={50} className="text-purple-600" />}
                    backgroundColor="bg-purple-300"
                />
            </div>
        </motion.div>
    );
};

export default HomePage;
