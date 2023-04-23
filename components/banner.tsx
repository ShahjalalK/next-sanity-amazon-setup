import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { HomeBanner } from '@/typings';
import { urlFor } from '@/lib/sanity.client';

type Props = {
    homeBanners : HomeBanner[]
}

const Banner = ({homeBanners}: Props) => {
  return (
    <div className="relative">
        <div className=" absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-200 to-transparent h-52 z-0" />
         <Carousel
         autoPlay={true}
         infiniteLoop
         interval={5000}
         showStatus={false}
         showIndicators={false}
         showThumbs={false}
         >
           {homeBanners[0].images.map((item) => (
            <div key={item._key}>
                <Image src={urlFor(item).url()} alt='banner' width={1350} height={350} className=" object-cover" priority />
            </div>
           ))}
                
                
            </Carousel>
    </div>
  )
}

export default Banner