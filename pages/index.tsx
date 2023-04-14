import Header from '@/components/header'
import Hero from '@/components/hero'
import { NextPage } from 'next'

const Home : NextPage = () => {
  return (
    <div className="bg-[rgba(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />
      <section id='hero' className="snap-center">
        <Hero />
      </section>
    </div>
  )
}

export default Home