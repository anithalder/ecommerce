import React, { useState } from 'react';
import HomeCarts from './HomeCartStructure';
import Carousel from "react-multi-carousel";
import { Button } from '@mui/base';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import "react-multi-carousel/lib/styles.css";

function HomeSectionCart({ prop, sectionName }) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    const CustomRightArrow = ({ onClick }) => (
        <Button
            onClick={onClick}
            className='absolute right-0 top-1/2 transform -translate-y-1/2 hover:bg-[#03424C] rounded-full transition-all p-2'
            style={{ zIndex: 9999 }}
        >
            <KeyboardArrowLeftIcon sx={{ fontSize: '2.5rem', color: 'gray', rotate: '180deg', ":hover": { color: 'white' } }} />
        </Button>
    );

    const CustomLeftArrow = ({ onClick }) => (
        <Button
            onClick={onClick}
            className='absolute left-0 top-1/2 transform -translate-y-1/2 hover:bg-[#03424C] rounded-full transition-all p-2'
            style={{ zIndex: 9999 }}
        >
            <KeyboardArrowLeftIcon sx={{ fontSize: '2.5rem', color: 'gray', ":hover": { color: 'white' } }} />
        </Button>
    );

    return (
        <div>
            <h2 className='text-2xl font-extrabold text-gray-600 py-2 pt-4'>{sectionName}</h2>
            <Carousel
                className=' mx-auto'
                responsive={responsive}
                customRightArrow={<CustomRightArrow />}
                customLeftArrow={<CustomLeftArrow />}
            >
                {prop.map((item) => {
                    return <HomeCarts prop={item} key={item.id} />
                })}
            </Carousel>
        </div>
    )
};

export default HomeSectionCart