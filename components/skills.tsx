import { NextPage } from 'next'
import React from 'react'
import Skill from './skill'
import { motion } from 'framer-motion'
import { fetchSkills } from '@/untils/fetchSkills'

type Props = {}

const Skills : NextPage = (props: Props) => {
  console.log(fetchSkills())
  return (
   <motion.div initial={{opacity : 0}} whileInView={{opacity : 1}} transition={{duration : 1.5}} className=" relative h-screen flex flex-col justify-center items-center space-y-8 max-w-7xl mx-auto">
     <div className=" absolute -top-7 flex flex-col space-y-3 justify-center items-center py-20">
        <h1 className="text-center text-2xl uppercase tracking-[15px] text-gray-500">Skills</h1>
        <h3 className="text-sm traking-[3px] uppercase text-gray-500">Hover ever a skill for currency profiesiency</h3>
    </div>
    <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
    </div>
   </motion.div>
  )
}

export default Skills