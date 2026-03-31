import React from 'react';
import { LuShoppingCart } from 'react-icons/lu';

const Navbar = ({selectedCards, setSelectedCards}) => {
    return (
        <div className='sticky z-10 top-0'>
            <div className="navbar mx-auto bg-base-100 flex shadow-sm py-4 gap-4 flex-col md:flex-row">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-bold bg-linear-65 from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li className=''><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-4 justify-between md:justify-end">
                    <div>
                        <span className="relative flex size-8 left-2.5 top-1">
                            <span className={`absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75 ${selectedCards.length >0 ? "animate-ping" : "hidden"}`}></span>
                            <span className="relative inline-flex size-8 rounded-full bg-red-400 items-center justify-center">{selectedCards.length}</span>
                        </span>
                        <LuShoppingCart />
                    </div>
                    <a className=''>Login</a>
                    <a className="btn btn-primary rounded-full">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;