'use client';
import React from 'react';
import Card from '../../components/Card';
import ProjectCard from '../../components/ProjectCard';
import { FaGraduationCap } from 'react-icons/fa';
import { MdWorkOutline } from 'react-icons/md';
import Gallery from '../../assets/gallery.jpg';
import Badge from '../../components/Badge';
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

const Resume = () => {
    return (
        <motion.div 
            variants={variant}
            initial="hidden"
            animate="visible"
            className='bg-white rounded-md pb-8 mx-4 md:mx-8 lg:mx-12'>
            
            <motion.div 
                variants={title}
                className='flex flex-col items-center pt-4 mx-auto gap-4 my-3'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl mx-2'>Resume</h1>
                <div className='flex justify-center'>
                    <span className='border-b-4 border-orange-400 w-32 sm:w-40 md:w-48 lg:w-[50vh] rounded-full'></span>
                </div>
            </motion.div>

            <div className='container grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
                <div className='flex flex-col items-center'>
                    <div className='flex items-center gap-4 mb-4'>
                        <FaGraduationCap size={60} color="orange" />
                        <h2 className='text-2xl sm:text-3xl'>Education</h2>
                    </div>
                    <motion.div 
                        whileHover={{ scale: 1.2 }}
                        className='p-4'>
                        <Card
                            backgroundColor="bg-red-100"
                            title="Software Engineering"
                            description="2024-2027, ISIMM"
                            icon={null}
                        />
                    </motion.div>
                    <motion.div 
                        className='p-4'
                        whileHover={{ scale: 1.2 }}>
                        <Card
                            title="Integrated Prepatory Cycle"
                            description="2022-2024, ISIMM"
                            icon={null}
                            backgroundColor="bg-gray-200"
                        />
                    </motion.div>
                    <motion.div 
                        whileHover={{ scale: 1.2 }}
                        className='p-4'>
                        <Card
                            title="High School Diploma"
                            description="2019-2022, Jeune Fille"
                            icon={null}
                            backgroundColor="bg-blue-200"
                        />
                    </motion.div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='flex items-center gap-4 mb-4'>
                        <MdWorkOutline size={60} color="orange" />
                        <h2 className='text-2xl sm:text-3xl'>Projects</h2>
                    </div>
                    <ProjectCard
                        title="Image Gallery App"
                        description="I developed a simple image gallery application using Next.js, Tailwind CSS, and the Pexels API. The app allows users to browse a dynamic collection of high-quality images. Next.js ensures efficient server-side rendering, while Tailwind CSS provides a modern and responsive layout. Integration with the Pexels API facilitates easy retrieval and display of images from a vast online library, delivering a smooth and visually appealing user experience."
                        image={Gallery}
                    />
                </div>
            </div>

            <div className='flex flex-col items-center pt-4 mx-auto gap-4 my-3'>
                <motion.h1 
                    variants={title}
                    className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>WORK SKILLS</motion.h1>
            </div>
            <div className='container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4'>
                <div className='mx-auto'><Badge skill="Next Js" /></div>
                <div className='mx-auto'><Badge skill="React Js" /></div>
                <div className='mx-auto'><Badge skill="Tailwindcss" /></div>
                <div className='mx-auto'><Badge skill="Node Js" /></div>
                <div className='mx-auto'><Badge skill="Framer Motion" /></div>
                <div className='mx-auto'><Badge skill="Python" /></div>
                <div className='mx-auto'><Badge skill="JavaScript" /></div>
                <div className='mx-auto'><Badge skill="C" /></div>
                <div className='mx-auto'><Badge skill="C++" /></div>
                <div className='mx-auto'><Badge skill="Java" /></div>
                <div className='mx-auto'><Badge skill="UML" /></div>
                <div className='mx-auto'><Badge skill="SQL" /></div>
                <div className='mx-auto'><Badge skill="PL/SQL" /></div>
                <div className='mx-auto'><Badge skill="Linux" /></div>
            </div>
        </motion.div>
    );
};

export default Resume;
