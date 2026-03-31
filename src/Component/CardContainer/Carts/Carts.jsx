import React from 'react';
import Cart from './Cart';

const Carts = ({cards, selectedCards, setSelectedCards}) => {
    return (
        <div className='container mx-auto p-4 space-y-6'>
            <h2 className='text-xl font-bold'>Your Cart</h2>
            {
                cards.map(card => {
                    return(
                        <Cart key={card.id} card={card}/>
                    )
                })
            }
            <div className='flex justify-between items-center'>
                <p className='text-[#627382]'>Total:</p>
                <p className='text-2xl font-bold'>$58</p>
            </div>
            <button className='btn btn-primary bg-linear-100 from-[#4F39F6] to-[#9514FA] rounded-full w-full'>Proceed to Checkout</button>
        </div>
    );
};

export default Carts;