import React from 'react';
import { GiCheckMark } from 'react-icons/gi';

const Product = ({ card }) => {
    const tagStyle = {
        "new": "badge-info",
        "popular": "badge-primary",
        "best-seller": "badge-warning"
    }
    return (
        <div>
            <div className="card w-96 shadow-sm ">
                <div className="card-body bg-base-200 rounded-3xl text-left space-y-3">
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
                        <button className="btn btn-primary bg-linear-100 from-[#4F39F6] to-[#9514FA] btn-block rounded-full">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;