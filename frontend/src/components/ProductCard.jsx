import React from 'react'

const ProductCard = (props) => {
  return (
    <div className='flex flex-col gap-2 p-4 hover:border hover:border-blue-500 rounded-md shadow-md w-1/3 min-w-70 my-4'>
      <div>
        <img src={props.item.image} alt="Product Image" />
      </div>
      <div>
        <h4>{props.item.name}</h4>
        <h4>${props.item.price.toFixed(2)}</h4>
      </div>
      <div className='flex gap-2'>
        <button className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-4 font-semibold w-full cursor-pointer'>Edit</button>
        <button className='bg-red-500 text-white p-2 rounded hover:bg-red-600 mt-4 font-semibold w-full cursor-pointer'>Delete</button>
      </div>
    </div>
  )
}

export default ProductCard