import { Social } from '@/typings';
import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {
  socials : Social[]
}

const Header = ({socials}: Props) => {
 
  return (
    <div className="sticky top-0 flex items-center justify-between max-w-7xl mx-auto z-20">
        <div className="flex flex-row items-center">
          {socials.map((item) => (
            <SocialIcon url={item?.url} target="_blank" fgColor='gray' bgColor='transparent' />
          ))}
        
        
        </div>
        <div className="flex flex-row items-center text-gray-300">
          <SocialIcon network="email" url="#contact" fgColor='gray' bgColor='transparent' />
            <p className="uppercase hidden md:inline-flex font-medium cursor-pointer">Get In Touch</p>
        </div>
    </div>
  )
}

export default Header

