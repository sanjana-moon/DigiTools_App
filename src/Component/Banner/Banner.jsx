import React from 'react';
import banner from '../../assets/banner.png'
import { FaRegCircleDot } from 'react-icons/fa6';
import { LuPlay } from 'react-icons/lu';

const Banner = () => {
    return (
            <div className="hero min-h-screen">
                <div className="hero-content flex-col w-full justify-around lg:flex-row-reverse gap-15">
                    <img
                        src={banner}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <div className="badge badge-soft badge-primary w-75"><FaRegCircleDot /> New: AI-Powered Tools Available</div>
                        <h1 className="text-6xl font-bold my-4">Supercharge Your <br /> Digital Workflow</h1>
                        <p className="py-4">
                            Access premium AI tools, design assets, templates, and productivity <br />
                            software—all in one place. Start creating faster today.
                            <br /> Explore Products</p>
                        <div className='flex gap-5'>
                            <button className="btn btn-primary rounded-full">Explore Products</button>
                            <button className="btn btn-outline btn-primary rounded-full"><LuPlay/> Watch Demo</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Banner;