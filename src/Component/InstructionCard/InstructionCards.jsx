import React from 'react';
import user from '../../assets/user.png'
import Package from '../../assets/package.png'
import rocket from '../../assets/rocket.png'

const Instruction = () => {
    return (
        <div className='bg-[#F9FAFC]'>
            <div className='container mx-auto py-30'>
                <div className='text-center mb-10'>
                    <h2 className='text-5xl font-bold mb-4'>Get Started in 3 Steps</h2>
                    <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='flex gap-6 items-center justify-center flex-col md:flex-row'>
                    <div className="card bg-base-100 px-6 py-20 shadow-sm">
                        <div className="size-9 rounded-full bg-radial-[at_50%_75%] from-[#4F39F6] to-[#4F39F6] to-90% text-white relative left-100 bottom-12 flex items-center justify-center">01</div>
                        <figure className="px-10 pt-10">
                            <img src={user} />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-xl">Create Account</h2>
                            <p>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 px-6 py-20 shadow-sm">
                        <div className="size-9 rounded-full bg-radial-[at_50%_75%] from-[#4F39F6] to-[#4F39F6] to-90% text-white relative left-90 bottom-12 flex items-center justify-center">02</div>
                        <figure className="px-10 pt-10">
                            <img src={Package} />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-xl">Choose Products</h2>
                            <p>Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 px-6 py-20 shadow-sm">
                        <div className="size-9 rounded-full bg-radial-[at_50%_75%] from-[#4F39F6] to-[#4F39F6] to-90% text-white relative left-90 bottom-12 flex items-center justify-center">03</div>
                        <figure className="px-10 pt-10">
                            <img src={rocket} />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-xl">Start Creating</h2>
                            <p>Download and start using your premium tools immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instruction;