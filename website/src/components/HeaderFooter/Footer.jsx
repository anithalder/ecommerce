import React from 'react'
import { Grid, Typography } from '@mui/material'

function Footer() {
    return (
        <div>
            <Grid container className='bg-[#03424C] text-white text-center mt-10 text-sm-center ' sx={{ bgcolor: '#03424C', color: 'white', py: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className=' pb-5 text-lg' varient='h6'>Company</Typography>
                    <div>
                        <button className=' pb-2 text-sm' varient='h6'>About</button>
                    </div>
                    <div>
                        <button className=' pb-2 text-sm' varient='h6'>Blog</button>
                    </div>
                    <div>
                        <button className=' pb-2 text-sm' varient='h6'>Press</button>
                    </div>
                    <div>
                        <button className=' pb-2 text-sm' varient='h6'>Jobs</button>
                    </div>
                    <div>
                        <button className=' pb-2 text-sm' varient='h6'>Partners</button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className=' pb-5 text-lg' varient='h6'>Solutions</Typography>
                    <div>
                        <button className=' pb-2 text-sm' varient='h6'>Marketing</button>
                    </div>
                    <div>
                        <button className=' pb-2 text-sm' varient='h6'>Analytics</button>
                    </div>
                    <div>
                        <button className=' pb-2 text-sm' varient='h6'>Commerce</button>
                    </div>
                    <div>
                        <button className=' pb-2 text-sm' varient='h6'>Insights</button>
                    </div>
                    <div>
                        <button className=' pb-2 text-sm' varient='h6'>Supports</button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className=' pb-5 text-lg' varient='h6'>Documentation</Typography>
                    <div>
                        <button className=' pb-2 text-sm' varient='h6'>Guides</button>
                    </div>
                    <div>
                        <button className=' pb-2 text-sm' varient='h6'>API status</button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className=' pb-5 text-lg' varient='h6'>Legal</Typography>
                    <div>
                        <button className=' pb-2 text-sm' varient='h6'>Claim</button>
                    </div>
                    <div>
                        <button className=' pb-2 text-sm' varient='h6'>Privacy Policy</button>
                    </div>
                    <div>
                        <button className=' pb-2 text-sm' varient='h6'>Terms & Conditions</button>
                    </div>
                </Grid>
                <Grid item xs={12} className='mt-10 mb-2 mx-0'>
                    <div className=' justify-around flex mt-5'>
                        Copyright &copy; 2024 by s&a | All Rights Reserved
                        <div className=" text-right lg:ml-0">
                            <a href="#">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="logo.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer