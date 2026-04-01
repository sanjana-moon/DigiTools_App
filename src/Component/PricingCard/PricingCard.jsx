import React from 'react';
import { GiCheckMark } from 'react-icons/gi';

const PricingCard = () => {
    return (
        <div className='py-30'>
            <div className='text-center pb-10'>
                <h1 className='text-5xl font-bold pb-4'>Simple, Transparent Pricing</h1>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='container mx-auto flex gap-8 justify-center flex-col items-center lg:flex-row lg:items-stretch'>
                <div className="card w-96 shadow-sm">
                    <div className="card-body bg-base-200 rounded-3xl">
                        <h2 className="text-2xl font-bold">Starter</h2>
                        <p className='text-[#627382]'>Perfect for getting started</p>
                        <span className="text-xl text-[#627382]"><span className='font-bold text-4xl text-black'>$0</span>/mo</span>
                        <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382]">
                            <li>
                                <span className='flex gap-1'><GiCheckMark className='text-[#30B868]' /> Access to 10 free tools</span>
                            </li>
                            <li>
                                <span className='flex gap-1'><GiCheckMark className='text-[#30B868]' /> Basic templates</span>
                            </li>
                            <li>
                                <span className='flex gap-1'><GiCheckMark className='text-[#30B868]' /> Community support</span>
                            </li>
                            <li>
                                <span className='flex gap-1'><GiCheckMark className='text-[#30B868]' /> 1 project per month</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary bg-linear-100 from-[#4F39F6] to-[#9514FA] btn-block rounded-full">Get Started Free</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 shadow-sm">
                    <div className="card-body bg-linear-100 from-[#4F39F6] to-[#9514FA] text-white rounded-3xl">
                        <span className="badge badge-warning w-[35%] absolute left-30 -top-2.5">Most Popular</span>
                        <h2 className="text-2xl font-bold">Pro</h2>
                        <p className=''>Best for professionals</p>
                        <span className="text-xl"><span className='font-bold text-4xl'>$29</span>/mo</span>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <span className='flex gap-1'><GiCheckMark/> Access to all premium tools</span>
                            </li>
                            <li>
                                <span className='flex gap-1'><GiCheckMark/> Unlimited templates</span>
                            </li>
                            <li>
                                <span className='flex gap-1'><GiCheckMark /> Priority support</span>
                            </li>
                            <li>
                                <span className='flex gap-1'><GiCheckMark /> Unlimited projects</span>
                            </li>
                            <li>
                                <span className='flex gap-1'><GiCheckMark /> Cloud sync</span>
                            </li>
                            <li>
                                <span className='flex gap-1'><GiCheckMark/> Advanced analytics</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-white text-primary btn-block rounded-full">Start Pro Trial</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 shadow-sm">
                    <div className="card-body bg-base-200 rounded-3xl">
                        <h2 className="text-2xl font-bold">Enterprise</h2>
                        <p className='text-[#627382]'>For teams and businesses</p>
                        <span className="text-xl text-[#627382]"><span className='font-bold text-4xl text-black'>$99</span>/mo</span>
                        <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382]">
                            <li>
                                <span className='flex gap-1'><GiCheckMark className='text-[#30B868]' /> Everything in Pro</span>
                            </li>
                            <li>
                                <span className='flex gap-1'><GiCheckMark className='text-[#30B868]' /> Team collaboration</span>
                            </li>
                            <li>
                                <span className='flex gap-1'><GiCheckMark className='text-[#30B868]' /> Custom integrations</span>
                            </li>
                            <li>
                                <span className='flex gap-1'><GiCheckMark className='text-[#30B868]' /> Dedicated support</span>
                            </li>
                            <li>
                                <span className='flex gap-1'><GiCheckMark className='text-[#30B868]' /> SLA guarantee</span>
                            </li>
                            <li>
                                <span className='flex gap-1'><GiCheckMark className='text-[#30B868]' /> Custom branding</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary bg-linear-100 from-[#4F39F6] to-[#9514FA] btn-block rounded-full">Contact Sales</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;