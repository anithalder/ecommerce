import React from 'react'
import CartItem from './CartItems'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Cart() {
    const navigate = useNavigate()
    const handleCheckout = () => {
        navigate(`/checkout?step=${2}`)
    }

    return (
        <div className='mt-10'>
            <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                <div className=' col-span-2'>
                    {[1, 1, 1, 1, 1].map((item) => <CartItem />)}
                </div>

                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border p-5 rounded-lg shadow-xl'>
                        <p className=' uppercase font-bold opacity-60 pb-4'>Price Details</p>
                        <hr />
                        <div className=' space-y-3 font-semibold mb-10'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Price</span>
                                <span>₹2548</span>
                            </div>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Discount</span>
                                <span className='text-green-600'>-₹1500</span>
                            </div>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Delivery Charge</span>
                                <span className='text-green-600'>Free</span>
                            </div>
                            <div className='flex justify-between pt-3 font-bold text-black'>
                                <span>Total Amount</span>
                                <span className='text-green-600'>₹2548</span>
                            </div>
                        </div>
                        <Button onClick={handleCheckout} variant='contained' className='w-full' sx={{ px: '2.5rem', py: '.7rem', bgcolor: '#03424C', fontWeight: 'bold' }}>
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
