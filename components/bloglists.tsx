import React from 'react'
import BlogList from './bloglist'

type Props = {
    posts : Post[]
}

const BlogLists : React.FC <Props> = ({posts} : Props) => {
  return (
    <div className="py-10 grid grid-flow-dense grid-cols-1 md:grid-cols-4 gap-5">
        {posts.map((post) =>(
            <BlogList key={post._id} post={post} />
        ))}
        
       
    </div>
  )
}

export default BlogLists