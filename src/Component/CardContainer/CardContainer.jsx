import React, { use, useState } from 'react';

const CardContainer = ({ cardsPromise }) => {
    const cards = use(cardsPromise)
    const [selectedType, setSelectedType] = useState("product")

    console.log(cards)
    return (
        <div className='py-30'>
            <div className='container mx-auto p-4 text-center space-y-4'>
                <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>
                    Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className='flex justify-center'>
                    <button
                        onClick={() => setSelectedType("product")}
                        className={`btn ${selectedType === 'product' ? "bg-linear-100 from-[#4F39F6] to-[#9514FA] text-white" : ""} rounded-full`}>Products</button>
                    <button
                        onClick={() => setSelectedType("cart")}
                        className ={`btn ${selectedType === 'cart' ? "bg-linear-100 from-[#4F39F6] to-[#9514FA] text-white" : ""} rounded-full`}>Cart (2)</button>
                </div>
            </div>
        </div>
    );
};

export default CardContainer;