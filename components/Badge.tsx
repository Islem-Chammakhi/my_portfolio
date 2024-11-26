import React from 'react'
import {motion} from 'framer-motion'
interface Skill {
    skill:string;
  }
const Badge:React.FC<Skill> = ({skill }) => {
  return (
    <motion.div
    whileHover={{scale:1.2}}
    className="flex items-center bg-blue-500 text-white py-1 px-3 rounded-lg shadow-md justify-center">
    <span className="text-lg font-semibold">{skill}</span>
  </motion.div>
  )
}

export default Badge