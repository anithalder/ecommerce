import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';


function OrderDetail() {
    return (
        <div className='px-5 lg:px-20'>
            <div>
                <h1 className=' font-bold py-7 text-xl'>Delivery Address</h1>
                <AddressCard />
            </div>

            <div className='py-20'>
                <OrderTracker activeStep={3} />
            </div>

            <Grid container className='space-y-8'>

                {[1, 1, 1, 1, 1, 1].map(item => (
                    <Grid
                        item
                        container
                        className=' shadow-xl rounded-md p-5 border'
                        sx={{ alignItems: 'center', justifyContent: 'space-between' }}
                    >

                        <Grid item xs={6}>

                            <div className='flex items-center space-x-4'>
                                <img className='w-[5rem] h-[6rem] object-cover rounded-lg object-top' src="https://cdn.pixelspray.io/v2/black-bread-289bfa/iix9pB/wrkr/t.resize(h:600,w:510)/data/gas/23feb2024/410459045_Z013_MODEL.jpg" alt="" />

                                <div className=' space-y-2 ml-5'>
                                    <p className='font-semibold'>Tiltle Should Written Here</p>
                                    <p className=' space-x-5 opacity-50 text-xs font-semibold'>
                                        <span>Color : Black</span>
                                        <span>Size : M</span>
                                    </p>
                                    <p>Seller : Hindustan</p>
                                    <p>₹1500</p>
                                </div>
                            </div>

                        </Grid>

                        <Grid item>

                            <Box sx={{ color: 'green' }}>
                                <StarBorderIcon sx={{ fontSize: '2rem' }} className=' px-2' />
                                <span>Rate & Review</span>
                            </Box>

                        </Grid>

                    </Grid>
                ))}


            </Grid>
        </div>
    )
}

export default OrderDetail
