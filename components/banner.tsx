import React from 'react'

const Banner : React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-5">
            <h1 className="text-6xl font-bold">Shahjalal Daily Blogs </h1>
            <p className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, vitae!</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quae suscipit quis voluptates, nesciunt eligendi totam pariatur maiores recusandae. Accusamus!</p>
    </div>
  )
}

export default Banner