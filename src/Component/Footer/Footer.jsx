import React from 'react';
import About from './About';

const Footer = () => {
    return (
        <div className=''>
            <footer className="footer footer-horizontal footer-center bg-linear-100 from-[#4F39F6] to-[#9514FA] text-primary-content p-10 py-30">

                <h2 className='text-5xl font-bold'>Ready to Transform Your Workflow?</h2>
                <p>
                    Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.
                </p>
                <div className='flex gap-5 flex-col md:flex-row'>
                    <button className='btn bg-white text-black p-4 rounded-full'>Explore Products</button>
                    <button className="btn btn-outline rounded-full px-7 py-4">View Pricing</button>
                </div>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
            </footer>
            <About />
        </div>
    );
};

export default Footer;