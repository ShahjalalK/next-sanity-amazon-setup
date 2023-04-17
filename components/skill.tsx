import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

type Props = {
  directionLeft? : boolean
}

const Skill = ({directionLeft}: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div initial={{x: directionLeft ? -200 : 200, opacity : 0}}  transition={{duration : 1}} whileInView={{opacity : 1, x: 0}} >
      <Image src="/css-3.png" alt="skill" width={24} height={24} className="w-24 xl:w-32 h-24 xl:h-32 object-cover filter hover:grayscale rounded-full border border-gray-500 duration-300 ease-in-out" />
      
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 w-24 md:w-28 h-24 md:h-28 xl:w-32 xl:h-32 group-hover:bg-white rounded-full z-0">
       <div className="flex items-center justify-center h-full">
       <p className="text-5xl font-bold text-black opacity-100">100%</p>
       </div>
      </div>
    </div>
  )
}

export default Skill