import React from 'react';
import ProductCard from './ProductCard';

const Products = ({ cards, selectedCards, setSelectedCards, cardPrice, setCardPrice }) => {
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                cards.map(card => {
                    return (
                        <ProductCard 
                        key={card.id} 
                        card={card} 
                        selectedCards={selectedCards}
                        setSelectedCards={setSelectedCards}
                        cardPrice={cardPrice}
                        setCardPrice={setCardPrice} />
                    )
                })
            }
        </div>
    );
};

export default Products;