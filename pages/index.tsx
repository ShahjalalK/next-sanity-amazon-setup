import About from '@/components/about'
import Contact from '@/components/contact'
import Exprience from '@/components/exprience'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import { PageInfo, Skill, Social } from '@/typings'
import { fetchPageInfo } from '@/untils/fetchPageInfo'
import { fetchSkills } from '@/untils/fetchSkills'
import { fetchSocials } from '@/untils/fetchSocial'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'

type Props = {
  socials : Social[]
  pageinfo : PageInfo
}

const Home = ({socials, pageinfo}: Props) => { 
  console.log(pageinfo)
  return (
    <div className="bg-[rgba(36,36,36)] text-white h-screen overflow-scroll snap-y snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7abba]/80 z-0">
      <Header socials={socials} />
      <section id='hero' className="snap-start">
        <Hero pageinfo={pageinfo} />
      </section>
      <section id='about' className="snap-center">
        <About />
      </section>
      <section id='exprience' className="snap-center">
        <Exprience />
      </section>
      <section id='skills' className="snap-center">
        <Skills />
      </section>
      <section id='projects' className="snap-center">
        <Projects />
      </section>
      <section id='contact' className="snap-center">
        <Contact />
      </section>
      
    </div>
  )
}

export default Home


export async function getServerSideProps() {
  const socials : Social[] = await fetchSocials()
  const pageinfo : PageInfo = await fetchPageInfo()
  return {
    props: {socials, pageinfo}, // will be passed to the page component as props
  }
}