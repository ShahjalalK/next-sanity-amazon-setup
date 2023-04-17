import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import { NextPage } from 'next'

type Props = {}

const ExprienceCard : NextPage = (props: Props) => {
  return (
   <article className="flex flex-col space-y-7 rounded-lg items-center flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden scrollbar scrollbar-track-[#f7abba]/80">
    <motion.div initial={{y : -100, opacity : 0}} whileInView={{y : 0, opacity : 1}} transition={{duration : 1.5}} viewport={{once : true}} className="w-32 h-32 xl:w-[150px] xl:h-[150px] rounded-full overflow-hidden">
    <Image src="/exprience1.jpg" width={80} height={80} alt='exprience' className="w-32 h-32 xl:w-[150px] xl:h-[150px] object-cover" />
    </motion.div>
    <div>
        <h4 className="text-4xl font-light"> CEO of SHAHJALALK</h4>
        <p>SHAHJALALK</p>      
        <div className="flex items-center space-x-3 my-3">
          <Image src="/html.png" width={24} height={24} alt='html' className="h-10 w-10" />
          <Image src="/html.png" width={24} height={24} alt='html' className="h-10 w-10" />
          <Image src="/html.png" width={24} height={24} alt='html' className="h-10 w-10" />
        </div>
        <p className="text-gray-300 uppercase">Standard work.... -Ended... </p>
        <ul className="list-disc space-y-4 ml-4 text-lg ">
            <li>Shahjalal Points Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eveniet perferendis, ipsa assumenda neque nisi.</li>
            <li>Shahjalal Points Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eveniet perferendis, ipsa assumenda neque nisi.</li>
            <li>Shahjalal Points Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eveniet perferendis, ipsa assumenda neque nisi.</li>
        </ul>
    </div>
   </article>
  )
}

export default ExprienceCard