'use client';
import React from 'react';
import Card from '../../components/Card';
import { FaCode, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
            My name is Islem Chammakhi, and I am currently pursuing a degree in software engineering after completing two years of integrated preparatory studies in computer science. My journey has allowed me to explore various fields such as web development, databases, networking, Linux, UML design, and object-oriented programming. Passionate about learning and discovering new technologies, I am constantly seeking new challenges and innovative projects to enhance my skills and experience.
            </p>

            <motion.h1 
                variants={title}
                className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mx-2 my-8 text-center'>What I Do!
            </motion.h1>

            <div className='container  flex flex-col items-center lg:grid lg:grid-cols-2 gap-8 p-8 mx-auto '>
                
                <Card
                    backgroundColor="bg-red-100"
                    title="Web Development"
                    description="With extensive experience in web development, I excel at crafting comprehensive and dynamic web solutions. My expertise spans across creating well-structured and visually engaging web pages, designing responsive layouts, and developing interactive functionalities. I leverage modern tools and frameworks to build efficient and scalable applications, focusing on optimizing performance and enhancing user experience."
                    icon={<FaCode size={50} className="text-orange-400" />}
                />
                <Card
                    title="Low-Level Programming"
                    description="Skilled in managing memory, utilizing pointers,strong understanding of data structures and implementing efficient algorithms. Experienced in developing and debugging system-level applications, focusing on performance and resource management."
                    icon={<FaDatabase size={50} className="text-gray-600" />}
                    backgroundColor="bg-gray-200"
                />
                <Card
                    title="Object-Oriented Programming & Enterprise Solutions"
                    description="Experienced in designing and implementing robust and scalable software using OOP concepts such as inheritance, polymorphism, encapsulation, and abstraction. Skilled in creating modular and maintainable code, with a focus on improving software design and system architecture."
                    icon={<FaDatabase size={50} className="text-blue-600" />}
                    backgroundColor="bg-blue-200"
                />
                <Card
                    title="Database Management"
                    description="Proficient in SQL and PL/SQL for designing, implementing, and maintaining relational databases. Skilled in data modeling, query optimization, and performance tuning to ensure efficient data handling. Experienced in creating robust database solutions to meet diverse business needs."
                    icon={<FaDatabase size={50} className="text-green-600" />}
                    backgroundColor="bg-green-200"
                />
                <Card
                    title="Linux System Administration"
                    description="Skilled in Linux system administration with experience in configuring, managing, and troubleshooting Linux environments. Skilled in shell scripting, process management, and system performance optimization. Adept at handling user permissions, package management, and network configuration to ensure a stable and secure system."
                    icon={<FaDatabase size={50} className="text-green-600" />}
                    backgroundColor="bg-yellow-200"
                />
                <Card
                    title="Networking Basics"
                    description="Basic knowledge of networking concepts, including MAC addresses, IP addresses, routers, and network protocols such as TCP and UDP. Familiar with DHCP for dynamic IP address allocation and DNS servers for domain name resolution. Capable of understanding and troubleshooting fundamental network configurations and connectivity issues."
                    icon={<FaDatabase size={50} className="text-green-600" />}
                    backgroundColor="bg-purple-300"
                />
            </div>
        </motion.div>
    );
};

export default HomePage;
