import React from 'react'
import { products } from '../data/data'
import { views } from '../data/data'

const More = () => {
  return (
    <div className='bg-gray-100 mt-20 min-h-screen  py-10  px-5 text-center' >

<p className='text-6xl font-bold mb-4'>Our Sections</p>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-10">
    {products.map((product) => (
      <div
        key={product.id}
        className="flex flex-col rounded-lg shadow-md bg-white p-4"
      >
        <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
        <img
          src={product.img}
          alt={product.title}
          className="mt-4 w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
    ))}
  </div>

<div className="mt-20 px-4 lg:px-10">
  {/* Heading */}
  <p className="text-6xl font-bold mb-10">Contributions</p>

  {/* Cards: column on small screens, row of 3 on large screens */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {views.map((item) => (
      <div
        key={item.id}
        className="flex flex-col rounded-lg bg-gray-300 p-6"
      >
        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
        <p className="text-xl mb-4 font-bold">{item.description}</p>
        <p className="text-lg ">"{item.quote}"</p>
      </div>
    ))}
  </div>
</div>
  </div>
  )
}

export default More