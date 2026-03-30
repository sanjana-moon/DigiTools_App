import React from 'react';
import { FaFacebook, FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='bg-neutral'>
            <div className='container mx-auto pt-30'>
                <footer className="footer flex sm:footer-horizontal bg-neutral text-neutral-content p-10 justify-around items-start">
                    <nav>
                        <h2 className="text-5xl font-bold bg-linear-65 from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent py-4">DigiTools</h2>
                        <p>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                    </nav>
                    <nav>
                        <h6 className="font-bold text-lg">Product</h6>
                        <a className="link link-hover">Features</a>
                        <a className="link link-hover">Pricing</a>
                        <a className="link link-hover">Templates</a>
                        <a className="link link-hover">Integrations</a>
                    </nav>
                    <nav>
                        <h6 className="font-bold text-lg">Company</h6>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Press</a>
                    </nav>
                    <nav>
                        <h6 className="font-bold text-lg">Resources</h6>
                        <a className="link link-hover">Documentation</a>
                        <a className="link link-hover">Help Center</a>
                        <a className="link link-hover">Community</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav>
                        <h6 className="font-bold text-lg">Social Links</h6>
                        <div className="grid grid-flow-col gap-4">
                            <a className='border rounded-full p-4 bg-white text-black'>
                                <RiInstagramFill />
                            </a>
                            <a className='border rounded-full p-4 bg-white text-black'>
                                <FaFacebook/>
                            </a>
                            <a className='border rounded-full p-4 bg-white text-black'>
                                <FaXTwitter/>
                            </a>

                            

                        </div>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;