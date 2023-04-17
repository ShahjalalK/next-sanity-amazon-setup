import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {
  const projects = [1,3,5,9,3]
  return (
    <motion.div initial={{opacity : 0}} whileInView={{opacity : 1}} transition={{duration : 1.5}} className=" overflow-x-hidden relative h-screen flex justify-center items-center">
       <div className=" absolute -top-7 flex flex-col space-y-3 justify-center items-center py-20">
        <h1 className="text-center text-2xl uppercase tracking-[15px] text-gray-500">Projects</h1>        
    </div>
    <div className=" scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7abba]/40 z-20 flex overflow-x-scroll w-full p-1 md:p-10 snap-x space-x-3 snap-mandatory">
      {projects.map((project, i) => (
        <div className="flex-shrink-0 w-full snap-center">
         <div className="flex flex-col space-y-4 w-full md:max-w-3xl mx-auto">
         <motion.div initial={{y : -100, opacity : 0}} whileInView={{y : 0, opacity : 1}} transition={{duration : 1.5}}>
          <Image src="/projects1.png" width={350} height={350} alt="project" />
          </motion.div>
          <h1 className="text-4xl">Case Studio {i + 1} of {projects.length} Netflix clone</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem perspiciatis a! Possimus saepe doloremque laboriosam voluptas omnis! Laborum, tenetur animi? Officiis, nesciunt ratione consectetur ab cumque voluptate eaque suscipit.</p>
         </div>
        </div>
      ))}
    </div>
    <div className="w-full absolute top-[30%] bg-[#f7abba]/30 left-0 h-[500px] -skew-y-12">

    </div>
    </motion.div>
  )
}

export default Projects