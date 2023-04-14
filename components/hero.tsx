import { NextPage } from 'next'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './backgroundcircles'
import Image from 'next/image'

type Props = {}

const Hero : NextPage = (props: Props) => {
    const [text, count] = useTypewriter({
        words : ["Hi, The Name's Shahjalal Khan", "Guy-who-loves-Coffee.tsx", "<ButLovesToCodoMore />"],
        loop : true,
        delaySpeed : 2000
    })
  return (
    <div className="flex items-center justify-center h-screen space-y-8 text-center overflow-hidden flex-col">
        <BackgroundCircles />
        <Image src="https://pbs.twimg.com/profile_images/1411199317013000197/kfesEZE9_400x400.jpg" alt='profile' width={80} height={80} className="rounded-full" />
        <div>
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
        <h1 className=" font-semibold px-4 text-5xl lg:text-6xl">
        {text}
        <Cursor cursorColor='#f7abba' />
        </h1>
        </div>
    </div>
  )
}

export default Hero