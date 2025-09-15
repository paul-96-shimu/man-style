import React from 'react';


import man from '../assets/img/man.png'
import fb from '../assets/img/facebook.png'
import insta from '../assets/img/instagram.png'
import tiktalk from '../assets/img/tiktok.png'
import youtube from '../assets/img/youtube.png'
import callcenter from '../assets/img/call center.png'


const Banner = () => {
    return (
        <div className='bg-black pt-10'>


            <div className='container mx-auto relative'>
                <div className='flex justify-between'>
                    <div>

                        <h1 className='text-[80px] leading-[100%] instrument-serif-regular '><span className='text-[#F6F4F0]'>Elevate Your</span> <span className='text-[#D5C4B3] italic'>Style</span> <br />


                            <span className="text-[#F6F4F0]">Redefine Your</span> <br /> <span className='text-[#D5C4B3] italic'>Confidence</span></h1>



                        <p className='text-[#B0B0B0] text-[14px] mt-[24px] instrument-sans'>Discover timeless designs crafted for the modern gentleman. <br />
                            From tailored fits to luxurious details, redefine your wardrobe <br /> with essentials that inspire confidence and sophistication.</p>

                        <button className='bg-[#AA8265] pt-[16px] pb-[16px] pl-[32px] pr-[32px] rounded-xs text-[#F6F4F0] mt-[48px] instrument-sans mb-[200px]'>
                            SHOP NOW
                        </button>
                    </div>

                    <div className='absolute left-[50%] bottom-0  ' style={{ transform: "translate(-80%, 0%)" }} >

                        <div className='flex items-center'>

                            <img src={man} alt="" className='w-[750px] h-[500px]' />


                            <div className="">
                            <p>
                             Premium Double-Breasted Tailored Blazer 
                            </p>
                        </div>
                        </div>

                    </div>


                    <div>


                        <div className="absolute right-10 bottom-60 flex   items-center"
                            style={{ transform: "translate(100%, 0%)" }}>
                            {/* Social icons */}
                            <ul className="flex flex-col gap-[56px]">
                                <li><a href=""><img src={fb} alt="Facebook" className='w-[24px]' /></a></li>
                                <li><a href=""><img src={insta} alt="Instagram" className='w-[24px]' /></a></li>
                                <li><a href=""><img src={tiktalk} alt="Tiktok" className='w-[24px]' /></a></li>
                                <li><a href=""><img src={youtube} alt="YouTube" className='w-[24px]' /></a></li>

                            </ul>


                        </div>

                        <img src={callcenter} alt="" />
                    </div>

                    {/* Text */}


                </div>
            </div>






        </div >
    );
};

export default Banner;