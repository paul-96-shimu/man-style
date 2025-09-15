import React from 'react';

import img from '../assets/img/more button.png'
import man from '../assets/img/man.png'
import fb from '../assets/img/facebook.png'
import insta from '../assets/img/instagram.png'
import tiktalk from '../assets/img/tiktok.png'
import youtube from '../assets/img/youtube.png'
import brown from '../assets/img/brown--background 1.png'
import bagde from '../assets/img/bage.png'
import shirt from '../assets/img/shirt.png'
import box from '../assets/img/box.png'
import car from '../assets/img/car.png'



const Banner = () => {
    return (
        <div className='bg-black pt-10'>

            <div className='bg-[#1D1D1D] '>
                <div className='container mx-auto flex justify-evenly mt-[40px] mb-[56px] pt-[22px] pb-[22px]'>

                    <h4 className='text-[#B0B0B0]'>Shirts</h4>
                    <img src={img} alt="" />
                    <h4 className='text-[#B0B0B0]'>T-Shirts</h4>
                    <img src={img} alt="" />
                    <h4 className='text-[#B0B0B0]'>Blazers</h4>
                    <img src={img} alt="" />
                    <h4 className='text-[#B0B0B0]'>Suits</h4>
                    <img src={img} alt="" />
                    <h4 className='text-[#B0B0B0]'>Polo</h4>
                    <img src={img} alt="" />
                    <h4 className='text-[#B0B0B0]'>KnitWear</h4>
                    <img src={img} alt="" />
                    <h4 className='text-[#B0B0B0]'>Pants</h4>
                    <img src={img} alt="" />
                    <h4 className='text-[#B0B0B0]'>Underwear</h4>
                    <img src={img} alt="" />
                    <h4 className='text-[#B0B0B0]'>Accessories</h4>
                    <img src={img} alt="" />

                </div>

            </div>
            <div className='container mx-auto'>
                <div>

                    <h1 className='text-[80px] leading-[100%]'><span className='text-[#F6F4F0]'>Elevate Your</span> <span className='text-[#D5C4B3] italic'>Style</span> <br />


                        <span className="text-[#F6F4F0]">Redefine Your</span> <br /> <span className='text-[#D5C4B3] italic'>Confidence</span></h1>



                    <p className='text-[#B0B0B0] text-[14px] mt-[24px]'>Discover timeless designs crafted for the modern gentleman. <br />
                        From tailored fits to luxurious details, redefine your wardrobe <br /> with essentials that inspire confidence and sophistication.</p>

                    <button className='bg-[#AA8265] pt-[16px] pb-[16px] pl-[32px] pr-[32px] rounded-xs text-[#F6F4F0] mt-[48px]'>
                        Shop Now
                    </button>
                </div>

                <div className='flex' >

                    <img src={man} alt="" />



                    <div>

                        <a href=""><img src={fb} alt="" /></a>
                        <a href=""><img src={insta} alt="" /></a>
                        <a href=""><img src={tiktalk} alt="" /></a>
                        <a href=""><img src={youtube} alt="" /></a>
                    </div>

                </div>




            </div>

            <div className='relative'>

                <img src={brown} alt="" className='w-full  min-w-[1440px]' />
                <div className='flex gap-[32px]'>

                    <div  className="absolute inset-0 flex justify-center items-center gap-[32px]">




                        <div className="flex items-center gap-[17px]">
                            <img src={bagde} alt="" />
                            <div>
                                <h6 className="text-[24px] italic text-[#F6F6F6] font-normal">Satisfaction Guarantee</h6>
                                <p className="text-[12px] text-[#B0B0B0]">
                                    Non-conforming items can be <br /> returned within 7 days
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[17px]'>

                            <img src={shirt} alt="" />
                            <div>

                                <h4 className='text-[24px] italic text-[#F6F6F6]'>Size Consultation</h4>
                                <p className='text-[12px] text-[#B0B0B0]'>We can help you finding the <br /> right size</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[17px]'>

                            <img src={box} alt="" />
                            <div>

                                <h4 className='text-[24px] italic text-[#F6F6F6]'>Easy Payment Options</h4>
                                <p className='text-[12px] text-[#B0B0B0]'>Check out payment with your <br /> favourit method</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[17px ]'>

                            <img src={car} alt="" />
                            <div>

                                <h4 className='text-[24px] italic text-[#F6F6F6]'>On Time Shipping</h4>
                                <p className='text-[12px] text-[#B0B0B0]'>Order will shipped on the same <br /> day</p>
                            </div>
                        </div>




                    </div>



                </div>

            </div>

        </div >
    );
};

export default Banner;