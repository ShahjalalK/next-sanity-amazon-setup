import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { NextPage } from 'next'

const About : NextPage = () => {
  return (
    <motion.div initial={{opacity : 0}} whileInView={{opacity : 1}} transition={{duration : 1.5}} className=" h-screen  max-w-7xl mx-auto">
        <div className="flex justify-center items-center py-20">
        <h1 className="text-center text-2xl uppercase tracking-[15px] text-gray-500">About</h1>
    </div>
    <div className="grid grid-cols-1 space-y-5 md:grid-cols-2 gap-x-10">
       <motion.div initial={{x:-200, opacity : 0}} whileInView={{x:0, opacity : 1}} transition={{duration : 1.5}} viewport={{once : true}} className="flex items-center justify-center">
       <div className="overflow-hidden border rounded-full md:rounded-md w-32 md:w-full h-32 md:h-96">
        <Image src="/profile.avif" alt='image2' width={650} height={650} className=" object-cover w-32 md:w-full h-32 md:h-96" />
        </div>
       </motion.div>
        <motion.div initial={{x:200, opacity : 0}} whileInView={{x:0, opacity : 1}} transition={{duration : 1.5}} viewport={{once : true}} className="text-center md:text-left">
            <h1 className="text-4xl mb-3">He is <span className=" decoration-[#f7abba]/40 underline">littele</span> Background </h1>
            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quas cupiditate laboriosam. Magni ex reprehenderit recusandae soluta impedit consequuntur alias? Recusandae eaque enim, itaque magni eligendi nisi ipsam omnis cumque numquam dolore? Tempore, aspernatur facilis delectus ratione veritatis itaque, animi alias mollitia, et aut eveniet excepturi dicta tenetur laborum nesciunt!</p>
        </motion.div>
    </div>
    </motion.div>
  )
}

export default About