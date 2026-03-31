import React from 'react';
import Product from './Product';

const Products = ({ cards, selectedCards, setSelectedCards }) => {
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3'>
            {
                cards.map(card => {
                    return (
                        <Product key={card.id} card={card} />
                    )
                })
            }
        </div>
    );
};

export default Products;