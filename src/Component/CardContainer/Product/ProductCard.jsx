import React, { useState } from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { toast } from 'react-toastify';

const ProductCard = ({ card, selectedCards, setSelectedCards}) => {
    const [isSelected, setIsSelected] = useState(false)

    const handleCards = () => {
        setIsSelected(true)
        toast(`${card.name} added to cart`)
        setSelectedCards([...selectedCards, card])
    }

    const tagStyle = {
        "new": "badge-info",
        "popular": "badge-primary",
        "best-seller": "badge-warning"
    }
    return (
        <div>
            <div className="card shadow-sm p-5">
                <div className="card-body bg-base-200 rounded-3xl text-left space-y-3 h-125">
                    <div className='text-right'>
                        <span className={`badge ${tagStyle[card.tagType]} badge-soft w-[35%]  mb-3`}>{card.tag}</span>
                    </div>
                    <p><img src={card.icon} alt="" /></p>
                    <h2 className="text-2xl font-bold">{card.name}</h2>
                    <p className='text-[#627382]'>{card.description}</p>
                    <span className="text-xl text-[#627382]"><span className='font-bold text-4xl text-black'>${card.price}</span>/{card.period}</span>
                    <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382]">
                        {
                            card.features.map((feature, index) => {
                                return (
                                    <li key={index}>
                                        <span className='flex gap-1'><GiCheckMark className='text-[#30B868]' />{feature}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="mt-6">
                        <button 
                        onClick={handleCards}
                        className={`btn btn-primary btn-block rounded-full ${isSelected? "bg-linear-100 from-[#03700b] to-[#1dce5e] pointer-events-none" :"bg-linear-100 from-[#4F39F6] to-[#9514FA]"}`}>{isSelected? "Added to cart": "Buy Now"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;