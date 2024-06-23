import React from 'react'
import { MainCarousel } from "../components/HomeComponents/MainCarousel";
import HomeSectionCart from "../components/HomeComponents/HomeSectionCart";
import shirts from '../components/HomeComponents/CartData';
import MetaData from '../components/MetaData';

function Home() {
    return (
        <div>
            <MetaData title="s&a | Home" description="s&a Garments" />
            <MainCarousel />

            <div className="container mx-auto py-4 space-y-0.5 px-5 lg:px-5">
                <HomeSectionCart prop={shirts} sectionName={"Men's Shirt"}/>
                <HomeSectionCart prop={shirts} sectionName={"Men's T-shirt"}/>
            </div>
        </div>
    )
}

export default Home

