import React, { use } from 'react';

const CardContainer = ({cardsPromise}) => {
    const cards = use(cardsPromise)
    console.log(cards)
    return (
        <div>
            
        </div>
    );
};

export default CardContainer;