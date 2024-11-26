'use client';
import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import Img1 from '../../assets/certif/1.jpg';
import Img3 from '../../assets/certif/3.png';
import Img4 from '../../assets/certif/4.png';
import Img5 from '../../assets/certif/5.jpg';
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

const Certificate = () => {
    return (
        <motion.div
            variants={variant}
            initial="hidden"
            animate="visible"
            className='bg-white rounded-md pb-8 mx-4 md:mx-8 lg:mx-12'>
            
            <motion.div
                variants={title}
                className='flex flex-col items-center pt-4 mx-auto gap-4 my-3'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mx-2 text-center'>Certificates</h1>
                <div className='flex justify-center'>
                    <span className='border-b-4 border-orange-400 w-[50vh] rounded-full'></span>
                </div>
            </motion.div>
            
            <div className='flex flex-col items-center space-y-6 p-4'>
                <ProjectCard
                    title="Certification 1"
                    description=""
                    image={Img5}
                />
                <ProjectCard
                    title="Certification 2"
                    description=""
                    image={Img1}
                />
                <ProjectCard
                    title="Certification 3"
                    description=""
                    image={Img3}
                />
                <ProjectCard
                    title="Certification 4"
                    description=""
                    image={Img4}
                />
            </div>
        </motion.div>
    );
};

export default Certificate;
