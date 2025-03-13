'use client'
import Image, { StaticImageData } from "next/image";
import {motion} from 'framer-motion'
import Link from "next/link";
interface SkillCardProps {
    title: string;
    description: string;
    image: StaticImageData;
    link ?: string;
}

const ProjectCard:React.FC<SkillCardProps> = ({ title, description, image, link }) => {
    return (
      <Link href={link || '#'}
       target="_blank"
       rel="noopener noreferrer"
      >
        <motion.div 
        whileHover={{scale:1.1}}
        className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer">
          <Image className="w-full" src={image} alt={title} width={600} height={600} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </motion.div>
      </Link>
    );
  };
  
  export default ProjectCard;
  