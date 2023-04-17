import { NextPage } from 'next'
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import BgCircles from './bgcircles'
import Image from 'next/image'
import Link from 'next/link'
import { PageInfo } from '@/typings'

type Props = {
  pageinfo : PageInfo
}

const Hero = ({pageinfo}: Props) => {
  console.log(pageinfo)
    const [text, count] = useTypewriter({
        words : [`Hi, This is ${pageinfo?.name}`, "Guy-who-loves-Coffee.tsx", "<ButLovesToCodoMore />"],
        loop : true,
        delaySpeed : 2000
    })
  return (
    <div className="text-white flex flex-col space-y-8 justify-center items-center h-screen text-center overflow-hidden">
        <BgCircles />
        <Image src="https://pbs.twimg.com/profile_images/1411199317013000197/kfesEZE9_400x400.jpg" width={100} height={100} alt='profile' className=" rounded-full" />
        <div className="z-10">
            <h2 className="text-sm text-gray-500 tracking-[15px] uppercase pb-2">{pageinfo?.role}</h2>
            <h1 className=" px-4 font-semibold text-5xl md:text-6xl">{text}</h1>
        </div>
        <div className="pt-5 z-10">
           <Link href="#about"> <button className="herobutton">About</button></Link>
           <Link href="#exprience"><button className="herobutton">Experience</button></Link> 
           <Link href="#skills"> <button className="herobutton">Skills</button></Link>
            <Link href="#projects">
            <button  className="herobutton">Projects</button>
            </Link>
        </div>
    </div>
  )
}

export default Hero