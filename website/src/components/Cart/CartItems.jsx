import { Button, IconButton } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from 'react'

function CartItem() {
    return (
        <div className='p-5 shadow-lg border rounded-md mb-7'>

            <div className='flex items-center'>

                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='h-full w-full object-cover object-top rounded-lg' src='https://www.beyoung.in/api/cache/catalog/products/men_new_jeans/bold_ink_blue_regular_fit_jeans_base_700x933.jpg' alt='' />
                </div>

                <div className='ml-5 space-y-1'>

                    <p className=' font-semibold'>Lorem ipsum dolor sit amet consectetur.</p>
                    <p className=' opacity-70'>Size: size,colour</p>
                    <p className=' opacity-70 mt-2'>Seller: Brand Name</p>

                    <div className='flex space-x-5 items-center text-gray-900 pt-10'>
                        <p className=' font-semibold'>₹200</p>
                        <p className=' opacity-50 line-through'>₹199</p>
                        <p className=' text-green-600 font-semibold'>5% off</p>
                    </div>

                </div>

            </div>

            <div className=' lg:flex items-center lg:space-x-10 pt-4'>

                <div className='flex items-center space-x-2'>
                    <IconButton sx={{color: '#03424C'}}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    
                    <span className='py-1 px-7 border rounded-sm'>1</span>

                    <IconButton sx={{color: '#03424C'}}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>

                <div>
                    <Button sx={{color: '#03424C', fontWeight: 'bold', fontSize: 15}}>
                        remove
                    </Button>
                </div>

            </div>

        </div>
    )
}

export default CartItem
