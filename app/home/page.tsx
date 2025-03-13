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
    const personalInfo="My name is Islem Chammakhi, a software engineering student with a strong foundation in computer science, built through two years of integrated preparatory studies. My academic and personal projects have allowed me to gain hands-on experience in web and mobile development, database management, and machine learning. Driven by a passion for innovation and problem-solving, I am committed to expanding my expertise and contributing to cutting-edge technological advancements."
    const webDescription="Experienced in building modern web applications using React.js, Next.js, and TailwindCSS for frontend development, and Node.js and Spring Boot for backend solutions. Skilled in delivering end-to-end projects, from intuitive user interfaces to scalable backend systems."
    const dbDescription="I learned the basics of SQL and PL/SQL, gaining an understanding of database concepts and how to interact with data efficiently."
    const oopDescription="Extensive knowledge of object-oriented programming, with a focus on Java."
    const mobileDescription="Familiar with the basics of mobile development, including native Android development using Java and cross-platform development with React Native. Eager to grow my skills and tackle new challenges in this field."
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
