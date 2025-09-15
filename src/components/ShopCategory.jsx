import React from 'react';


// import man from '../assets/img/man.png'
// import fb from '../assets/img/facebook.png'
// import insta from '../assets/img/instagram.png'
// import tiktalk from '../assets/img/tiktok.png'
// import youtube from '../assets/img/youtube.png'
import brown from '../assets/img/brown--background 1.png'
import bagde from '../assets/img/bage.png'
import shirt from '../assets/img/shirt.png'
import box from '../assets/img/box.png'
import car from '../assets/img/car.png'



const ShopCategory = () => {
    return (
        <div className='bg-black '>

            <div className=' relative  '>

                <img src={brown} alt="" className='w-full min-w-[1440px]' />
                <div className='flex gap-[32px]'>

                    <div className="absolute inset-0 flex justify-center items-center gap-[32px]">




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

export default ShopCategory;