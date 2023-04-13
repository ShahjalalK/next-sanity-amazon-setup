import React from 'react'
type Props = {
    post : Post
}

const BlogList : React.FC <Props> = ({post} : Props) => {
    console.log(post)
  return (
    <div>
       {post.title}
    </div>
  )
}

export default BlogList