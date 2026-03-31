import React from 'react';
import shoppingCard from '../../../assets/products/shopping-cart.png'

const EmptyCard = () => {
    return (
        <div className='container mx-auto text-center space-y-6'>
            <img src={shoppingCard} className='w-20 h-15 mx-auto text-[#627382]' alt="" />
            <p className='text-[#627382]'>Your Cart is empty</p>
        </div>
    );
};

export default EmptyCard;