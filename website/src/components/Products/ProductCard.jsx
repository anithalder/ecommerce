import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'

function ProductCard({prop}) {
  const navigate = useNavigate()

  return (
    <div
    onClick={() => navigate(`/product/${5}`)}
      className='prouctCard w-[13rem] m-3 transition-all cursor-pointer shadow-xl rounded-lg'
    >
      <div className='h-[16rem]'>
        <img className='h-full w-full  object-cover object-left-top rounded-b-none' src={prop.image} alt="" />
      </div>

      <div className='textPart bg-white p-3 justify-center items-center rounded-t-none'>
        <div>
          <p className=' font-bold opacity-60`'>{prop.brand}</p>
          <p>{prop.title}</p>
        </div>
        <div className=' flex space-x-3 mt-2'>
          <p className=' font-semibold'>{prop.discountPrice}</p>
          <p className=' line-through opacity-55'>{prop.price}</p>
          <p className=' text-green-600 font-semibold'>{prop.discountPercent}% off</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
