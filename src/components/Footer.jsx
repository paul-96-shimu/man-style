import React from 'react';

import payment from '../assets/img/Visa.png'
import payment1 from '../assets/img/Mastercard.png'
import payment2 from '../assets/img/Stripe.png'
import payment3 from '../assets/img/AmazonPay.png'
import payment4 from '../assets/img/Alipay.png'
import payment5 from '../assets/img/JCB.png'
import payment6 from '../assets/img/Skrill.png'
import payment7 from '../assets/img/Payoneer.png'
import payment8 from '../assets/img/Affirm.png'

const Footer = () => {
    return (
        <section className='bg-black'>
            <div className='container mx-auto pt-[80px] px-4'>
                {/* main footer layout */}
                <div className='flex flex-col-reverse lg:flex-row lg:gap-[65px] justify-between items-center lg:items-start text-center lg:text-left'>
                    
                    {/* Left Logo Section */}
                    <div className='mb-8 lg:mb-0'>
                        <h2 className='text-[#F6F4F0] text-[28px] md:text-[32px] instrument-sans font-bold'>ManStyle Co.</h2>
                        <p className='text-[#B0B0B0] text-[15px] md:text-[16px] mt-[17px] instrument-sans'>
                            Explore a wardrobe designed to elevate <br className='hidden md:block' />
                            your everyday style and empower you to <br className='hidden md:block' />
                            leave a lasting impression—because you <br className='hidden md:block' />
                            deserve nothing less than the finest.
                        </p>
                    </div>

                    {/* Payment Section */}
                    <div className='mb-8 lg:mb-0'>
                        <h2 className='text-[#F6F4F0] instrument-sans font-bold text-[24px] md:text-[28px] mb-[12px] text-center'>
                            Accepted Payments
                        </h2>

                        <div className='flex flex-col lg:flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3'>
                            {/* Top Row */}
                            <div className='flex flex-wrap justify-center gap-3'>
                                <img src={payment} alt="" className='w-[60px] md:w-[65px]' />
                                <img src={payment1} alt="" className='w-[60px] md:w-[65px]' />
                                <img src={payment2} alt="" className='w-[60px] md:w-[65px]' />
                                <img src={payment3} alt="" className='w-[60px] md:w-[65px]' />
                                <img src={payment4} alt="" className='bg-white pt-[8px] pb-[12px] px-[7px] rounded-[7.5px] w-[60px] md:w-[65px]' />
                                <img src={payment5} alt="" className='w-[60px] md:w-[65px]' />
                            </div>
                            {/* Bottom Row */}
                            <div className='flex flex-wrap justify-center gap-3'>
                                <img src={payment6} alt="" className='w-[60px] md:w-[65px]' />
                                <img src={payment7} alt="" className='w-[60px] md:w-[65px]' />
                                <img src={payment8} alt="" className='w-[60px] md:w-[65px]' />
                            </div>
                        </div>
                    </div>

                    {/* Categories + Information */}
                    <div className='flex flex-col sm:flex-row gap-[36px] mb-8 lg:mb-0'>
                        <div>
                            <h4 className='text-[#F6F4F0] instrument-sans text-[18px] md:text-[20px] font-bold'>Categories</h4>
                            <ul className='text-[#B0B0B0] instrument-sans text-[15px] md:text-[16px] font-medium'>
                                <li className='mt-[4px] underline decoration-[#B0B0B0]'>Shop</li>
                                <li className='mt-[4px] underline decoration-[#B0B0B0]'>Sale</li>
                                <li className='mt-[4px] underline decoration-[#B0B0B0]'>New Arrivals</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className='text-[#F6F4F0] instrument-sans text-[18px] md:text-[20px] font-bold'>Information</h4>
                            <ul className='text-[#B0B0B0] instrument-sans text-[15px] md:text-[16px] font-medium'>
                                <li className='mt-[4px] underline decoration-[#B0B0B0]'>About Us</li>
                                <li className='mt-[4px] underline decoration-[#B0B0B0]'>Contact Us</li>
                                <li className='mt-[4px] underline decoration-[#B0B0B0]'>FAQ</li>
                                <li className='mt-[4px] underline decoration-[#B0B0B0]'>Returns Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-b-2 border-b-[#B0B0B0] w-full mt-[50px]"></div>
                <div className='pb-[16px]'>
                    <h1 className='text-center text-[#B0B0B0] text-[13px] md:text-[14px] font-medium instrument-sans mt-[16px]'>
                        © 2024 ManStyle Co. All Rights Reserved.
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Footer;
