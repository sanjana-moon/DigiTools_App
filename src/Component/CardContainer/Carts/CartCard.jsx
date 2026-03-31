import React from 'react';

const CartCard = ({ card }) => {
    return (
        <div className='flex justify-between py-5'>
            <div className='flex items-center gap-5'>
                <p><img src={card.icon} alt="" /></p>
                <div>
                    <p className='text-xl font-medium'>{card.name}</p>
                    <p className='text-[#627382]'>${card.price}</p>
                </div>
            </div>
            <button className='btn text-red-500'>Remove</button>
        </div>
    );
};

export default CartCard;