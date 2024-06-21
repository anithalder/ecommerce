import React from "react";

const HomeCarts = ({prop}) => {
    return (
        <div className="m-2 ml-12 lg:my-[5rem] lg:ml-[5rem] cursor-pointer">
            <div className=" cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-xl border overflow-hidden w-[15rem] mx-3 hover:bg-gray-100">
                <div className="h-[13rem] w-[10rem] p-4 pb-0">
                    <img className="object-cover object-top w-full h-full rounded-lg" src={prop.image} alt="" />
                </div>
                <div className="flex flex-col p-3">
                    <h3 className="text-lg font-medium text-gray-700 pr-1 pl-3">{prop.brand}</h3>
                    <p className="mt-2 mb-[0.6rem] text-sm text-gray-500 pr-1 pl-3">{prop.title}</p>
                </div>
            </div>
        </div>
    )
}

export default HomeCarts