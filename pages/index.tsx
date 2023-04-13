import Banner from '@/components/banner'
import BlogLists from '@/components/bloglists'
import Header from '@/components/header'
import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import { type } from 'os'
import React from 'react'

const query = groq`
*[_type == "post"]{
  ...,
  categories[]->,
  author->
} | order(_createdAt desc)
`

type Props = {
  blogs : Post[]
}

const Home : React.FC <Props> = ({blogs} : Props) => {
  console.log(blogs)
 
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Banner />
      <BlogLists posts={blogs} />
    </div>
  )
}

export default Home

export const getServerSideProps = async (context : any) => {
  const blogs = await client.fetch(query)
  console.log(blogs)
  return {
    props: {blogs}, // will be passed to the page component as props
  }
}