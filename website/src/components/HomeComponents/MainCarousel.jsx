import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { data as HomeCarouselData } from './HomeCarouselData';

const items = HomeCarouselData.map((item) => (
    <div className=''>
        <img src={item.image} className='cursor-pointer mt-0 object-cover h-auto items-center' alt="" />
    </div>
))

export const MainCarousel = () => (
    <AliceCarousel
        autoPlay
        animationType="fadeout"
        animationDuration={4 * 1000}
        disableButtonsControls
        infinite
        items={items}
    />
);