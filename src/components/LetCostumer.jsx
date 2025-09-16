import React from 'react';


import star from '../assets/img/Star 1.png'
const LetCostumer = () => {
    return (
        <section className='bg-[#FFF]'>


            <div className='container mx-auto'>

                <h1 className='text -primary text-[36px] Instrument Sans font-bold text-center mt-[80px] mb-[80px]'> LET COSTUMER SPEAKS FOR US </h1>


                <div className='flex justify-center gap-2'>

                    <img src={star} alt="" className='w-[40px]' />
                    <img src={star} alt="" className='w-[40px]' />
                    <img src={star} alt="" className='w-[40px]' />
                    <img src={star} alt="" className='w-[40px]' />
                    <img src={star} alt="" className='w-[40px]' />
                </div>

                <h3 className='text -primary text-center mt-6 mb-[24px] Instrument Sans font-semibold text-[24px]'> Perfect Fit and Incredible Quality! </h3>


                <p className='text-[36px] instrument-serif-regular text-center leading-[120%] mb-[24px]'>"I ordered the <span className='text-[#AA8265]'>Premium Tailored Blazer,</span> and it exceeded my expectations! The  <br /> fit was spot-on, and the fabric feels luxurious. I wore it to a formal event, and I got <br /> so many compliments. Definitely worth the investment."  </p>


                <h6 className='text-center text -primary font-bold text-[16px]  Instrument Sans'> Michael R.,</h6>
                <h6 className='text-center text-[#6D6D6D] Instrument Sans text-[16px] font-semibold'> Verified Customer</h6>

            </div>
        </section>
    );
};

export default LetCostumer;