import React from 'react';

const Stat = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='container mx-auto px-4'>
                <div className="stats stats-vertical lg:stats-horizontal shadow flex flex-col md:flex-row">
                    <div className="stat text-center">
                        <div className="text-5xl font-bold text-white">50K+</div>
                        <div className="text-lg text-white">Active Users</div>
                    </div>
                    <div className="divider lg:divider-horizontal bg-white my-3 rounded-4xl"></div>
                    <div className="stat text-center">
                        <div className="text-5xl font-bold text-white">200+</div>
                        <div className="text-lg text-white">Premium Tools</div>
                    </div>
                    <div class="divider lg:divider-horizontal bg-white my-3 rounded-4xl"></div>
                    <div className="stat text-center">
                        <div className="text-5xl font-bold text-white">4.9</div>
                        <div className="text-lg text-white">Rating</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stat;