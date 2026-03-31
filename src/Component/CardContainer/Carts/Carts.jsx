import CartCard from './CartCard';
import EmptyCard from './EmptyCard';

const Carts = ({ selectedCards, setSelectedCards, cardPrice, setCardPrice }) => {
    const handleRemoveBtn = (card) => {
        const filteredCard = selectedCards.filter(
            (newCards) => newCards.name !== card.name
        )
        setSelectedCards(filteredCard)
        setCardPrice(cardPrice - card.price)
    }
    const handleProceedBtn = () => {
        setSelectedCards([])
    }

    return (
        <div className='container mx-auto p-4 space-y-6'>
            <h2 className='text-xl font-bold'>Your Cart</h2>
            {selectedCards.length === 0 ?
                <EmptyCard /> :
                <div>
                    {selectedCards.map(card => {
                        return (
                            <CartCard
                                key={card.id}
                                card={card}
                                selectedCards={selectedCards}
                                setSelectedCards={setSelectedCards}
                                cardPrice={cardPrice}
                                setCardPrice={setCardPrice}
                                handleRemoveBtn={handleRemoveBtn} />
                        )
                    })}
                    <div className='space-y-5'>
                        <div className='flex justify-between items-center'>
                        <p className='text-[#627382]'>Total:</p>
                        <p className='text-2xl font-bold'>${cardPrice}</p>
                    </div>
                    <button
                    onClick={handleProceedBtn}
                        className='btn btn-primary bg-linear-100 from-[#4F39F6] to-[#9514FA] rounded-full w-full'>Proceed to Checkout</button>
                    </div>
                </div>

            }
        </div>
    );
};

export default Carts;