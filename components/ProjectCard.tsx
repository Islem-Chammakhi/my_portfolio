'use client'
import Image, { StaticImageData } from "next/image";
import {motion} from 'framer-motion'
interface SkillCardProps {
    title: string;
    description: string;
    image: StaticImageData;
  }

const ProjectCard:React.FC<SkillCardProps> = ({ title, description, image }) => {
    return (
      <motion.div 
      whileHover={{scale:1.1}}
      className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <Image className="w-full" src={image} alt={title} width={600} height={600} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </motion.div>
    );
  };
  
  export default ProjectCard;
  