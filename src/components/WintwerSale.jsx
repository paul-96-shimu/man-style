import React from 'react';


import whiteshirt from '../assets/img/whiteshirt11.png'

import pluse from '../assets/img/plus.png'
import bluecot from '../assets/img/blue cot.png'

import blackpant from '../assets/img/black pant.png'
import pamlar2 from '../assets/img/pamlar2.png'
import aworrbutton from '../assets/img/arroe button.png'



const WintwerSale = () => {
    return (
        <section className='bg-black'>


            <div className='container mx-auto pt-[80px] mt-10' >

                <h1 className='text-[84px] text-center instrument-serif-regular leading-[100%]'><span className='text-[#F6F4F0] '>Winter Essentials  <br />Sale  Up to</span>
                    <span className='text-[#D5C4B3] italic'>  30% Off</span> <span className='text-[#F6F4F0]'>Selected Outerwear</span></h1>

                <p className='text-center text-[16px] text-[#B0B0B0] instrument-sans mb-[52px]'> Stay warm without compromising on style. Explore our collection of wool coats, tailored
                    <br /> blazers, and scarves at exclusive prices this season.</p>

                <div className='flex gap-[42px]'>



                    <div>

                        <div className='bg-neutral-100  pt-4 pl-4 pr-4'>
                            <div className='flex justify-between items-center'>

                                <small className='text- primary  font-bold bg-[#E9E2D8] pl-[12px] pr-[14px]   instrument-sans'>30% Off</small>
                                <img src={pluse} alt="" className='w-[24px] border border-[#E9E2D8] p-[5px] '

                                />
                            </div>

                            <img src={whiteshirt} alt="" />


                        </div>

                        <h6 className='instrument-sans text-[#F6F4F0] text-[16px] instrument-sans mt-[16px] font-bold'>Classic White Tailored Oxford Shirt  <br />with Reinforced Collar</h6>

                        <small className='text-[#D5C4B3] text-[14px] font-semibold instrument-sans mt-[8px]'>Shirts</small>
                        <br />
                        <span className='text-[#F6F4F0] font-bold text-[24px] Instrument Sans mr-[8px] mt-[8px]'>$64.99</span>
                        <span className='text-[#6D6D6D] text-[16px] font-semibold  Instrument Sans line-through'>$64.99</span>
                    </div>




                    <div>

                        <div className='bg-neutral-100  pl-4 pr-4 '>


                            <div className='flex justify-between items-center pt-2'>

                                <small className='text- primary  font-bold bg-[#E9E2D8] pl-[12px] pr-[14px]   instrument-sans'>30% Off</small>
                                <img src={pluse} alt="" className='w-[24px] border border-[#E9E2D8] p-[5px] '

                                />
                            </div>


                            <img src={bluecot} alt="" className='' />


                        </div>

                        <h6 className='instrument-sans text-[#F6F4F0]  text-[16px] instrument-sans mt-[16px] font-bold'>Navy Blue Single-Breasted Wool <br /> Blazer with Slim-Cut Design </h6>

                        <small className='text-[#D5C4B3] text-[14px] font-semibold instrument-sans mt-[8px]'>Outerwear</small>
                        <br />
                        <span className='text-[#F6F4F0]  font-bold text-[24px] Instrument Sans mr-[8px] mt-[8px]'>$159.99</span>
                        <span className='text-[#6D6D6D] text-[16px] font-semibold  Instrument Sans line-through'>$64.99</span>
                    </div>




                    <div>

                        <div className='bg-neutral-100  pt-4 pl-4 pr-4'>

                            <div className='flex justify-between'>

                                <small className='text- primary  font-bold bg-[#E9E2D8] pl-[12px] pr-[14px]   instrument-sans'>30% Off</small>
                                <img src={pluse} alt="" className='w-[24px] border border-[#E9E2D8] p-[5px] '

                                />
                            </div>

                            <img src={blackpant} alt="" />


                        </div>

                        <h6 className='instrument-sans text-[#F6F4F0] text-[16px] instrument-sans mt-[16px] font-bold'>Slim Fit Black Stretch Chino Pants <br /> with Comfort Waistband </h6>

                        <small className='text-[#D5C4B3] text-[14px] font-semibold instrument-sans mt-[8px]'>Trousers</small>
                        <br />
                        <span className='text-[#F6F4F0]  font-bold text-[24px] Instrument Sans mr-[8px] mt-[8px]'>$74.99</span>
                        <span className='text-[#6D6D6D] text-[16px] font-semibold  Instrument Sans line-through'>$64.99</span>

                    </div>




                    <div>

                        <div className='bg-neutral-100  pt-4 pl-4 pr-4'>
                            <div className='flex justify-between items-center'>

                                <small className='text- primary  font-bold bg-[#E9E2D8] pl-[12px] pr-[14px]   instrument-sans'>30% Off</small>
                                <img src={pluse} alt="" className='w-[24px] border border-[#E9E2D8] p-[5px] '

                                />
                            </div>

                            <img src={pamlar2} alt="" />


                        </div>

                        <h6 className='instrument-sans text-[#F6F4F0] text-[16px] instrument-sans mt-[16px] font-bold'>Luxurious Soft Grey Wool and <br /> Cashmere Blend Scarf</h6>

                        <small className='text-[#D5C4B3] text-[14px] font-semibold instrument-sans mt-[8px]'>Accessories</small>
                        <br />
                        <span className='text-[#F6F4F0]  font-bold text-[24px] Instrument Sans mr-[8px] mt-[8px]'>$64.99</span> 
                        <span className='text-[#6D6D6D] text-[16px] font-semibold  Instrument Sans line-through'>$64.99</span>
                    </div>

                </div>



                <div className='text-center mt-[52px] pb-[80px]'>

                    <button className='text-[#F6F4F0] border border-white inline-flex gap-2 pt-4 pb-4 pl-8 pr-8 instrument-sans '> SHOW ALL  <img src={aworrbutton} alt="" /></button>
                </div>

            </div>
        </section>
    );
};

export default WintwerSale;