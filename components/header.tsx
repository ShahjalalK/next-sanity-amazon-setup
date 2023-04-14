import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";

type Props = {}

const Header = (props: Props) => {
  return (
    <header className=" sticky flex top-0 items-start justify-between max-w-7xl mx-auto z-10">
        <motion.div initial={{x:-500, opacity : 0, scale : 0.5}} animate={{x:0, opacity : 1, scale : 1}} transition={{duration : 1.5}} className="flex flex-row items-center">
        <SocialIcon url="https://twitter.com/jaketrent" fgColor='gray' bgColor='transparent' target='_blank' />
        <SocialIcon url="https://twitter.com/jaketrent" fgColor='gray' bgColor='transparent' target='_blank' />
        <SocialIcon url="https://twitter.com/jaketrent" fgColor='gray' bgColor='transparent' target='_blank' />
        </motion.div>
        <motion.div initial={{x:500, opacity : 0, scale : 0.5}} transition={{duration : 1}} animate={{x:0, opacity : 1, scale : 1}} className="flex flex-row cursor-pointer text-gray-300 file: items-center">
            <SocialIcon network='email' url='shahjalalkhan215@gmail.com' target="_blank" fgColor='gray' bgColor='transparent' />
            <p className="uppercase hidden md:inline-flex text-sm">Get In Touch</p>
        </motion.div>
    </header>
  )
}

export default Header