import React from 'react';

const Banner = () => {
    return (
        <div className='bg-black'>
            <div className='container mx-auto'>
                <h1 className='text-[80px] leading-[100%]'><span className='text-[#F6F4F0]'>Elevate Your</span> <span className='text-[#D5C4B3] italic'>Style</span> <br />
                
                 <span className="text-[#F6F4F0]">Redefine Your</span> <span className='text-[#D5C4B3] italic'>Confidence</span></h1>
                <p className='text-[#B0B0B0] text-[14px] mt-[24px]'>Discover timeless designs crafted for the modern gentleman. <br /> 
                From tailored fits to luxurious details, redefine your wardrobe <br /> with essentials that inspire confidence and sophistication.</p>
                
                <button className='bg-[#AA8265] pt-[16px] pb-[16px] pl-[32px] pr-[32px] rounded-xs text-[#F6F4F0] mt-[48px]'>
                    Shop Now
                </button>
            </div>

        </div>
    );
};

export default Banner;