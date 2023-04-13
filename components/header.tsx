import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="flex items-center justify-between py-5">
        <Link href="/" className="flex items-center space-x-1"><Image src="https://pbs.twimg.com/profile_images/1411199317013000197/kfesEZE9_400x400.jpg" className="border rounded-full p-1" width={40} height={40} alt="logo" /> <span className="uppercase font-bold">ShahjalalK</span></Link>
        <Link href="/admin" className="hidden md:inline-flex border rounded-md px-7 py-2 text-[#faab4a] bg-black font-bold">Check out my gig on fiverr-</Link>
    </div>
  )
}

export default Header