import React from 'react'
import { motion } from 'framer-motion'
import { NextPage } from 'next'

type Props = {}

const BgCircles : NextPage = (props: Props) => {
  return (
    <motion.div initial={{opacity : 0}} animate={{opacity : [0.1, 0.2, 0.4, 0.8, 0.1, 1], scale : [1, 2, 2, 3, 1], borderRadius : ["20%", "20%", "50%", "80%", "20%"]}} transition={{duration : 2.5}} className=" relative flex justify-center items-center z-0">
        <div className=" absolute border border-[#333333] mt-52 w-[200px] h-[200px] rounded-full animate-ping " />
        
        <div className=" absolute border border-[#333333] mt-52 w-[300px] h-[300px] rounded-full" />
        <div className=" absolute border border-[#333333] mt-52 w-[500px] h-[500px] rounded-full" />
        <div className=" absolute border border-[#f7abba] mt-52 w-[650px] h-[650px] rounded-full animate-pulse opacity-20" />
    </motion.div>
  )
}

export default BgCircles