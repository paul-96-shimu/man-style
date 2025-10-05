import React from 'react';
import aworrbutton from '../assets/img/arroe button.png'
import brownman from '../assets/img/veryhandsome.png'
import blackpant from '../assets/img/veryformal.png'
import star from '../assets/img/Star 1.png'
import remove from '../assets/img/remove.png'
import add from '../assets/img/add.png'

const TheModernLook = () => {
    return (
        <section className='bg-[#F6F4F0] mt-[80px]'>

            <div className='container mx-auto '>

                <div className='flex gap-[100px] justify-between '>
                    <div className='pt-[80px]  '>
                        <h4 className='text-[#AA8265] text-[20px] font-bold instrument-sans mb-[24px]'>TRENDING NOW</h4>
                        <h1 className='text -primary instrument-serif-regular text-[96px] leading-[100%]'> The Modern <br /> Look: <span className='text-[#AA8265]'>Double- <br />Breasted</span>
                            Blazers</h1>
                        <p className='text-[#5B3E38] mt-[48px] instrument-sans font-semibold mb-[48px] text-[16px]'>Make a statement with our trending blazers. Perfectly cut for modern men
                            <br />looking for bold, standout style.</p>



                        <div>
                            <button className='text-[16px] text-[#F6F4F0] bg-[#AA8265] inline-flex gap-2 pt-4 pb-4 pr-8 pl-8'>Shop Trending Blazers <img src={aworrbutton} alt="" /></button>
                        </div>
                    </div>




                    <div className='bg-black '>

                        <img src={brownman} alt="" className='w-[700px] h-[723px]' />
                    </div>
                </div>


                <div className='flex gap-[100px] justify-between mt-10 '>





                    <div className='bg-neutral-200  '>
                        <div className='text-right'>

                          



                            <div className="relative  w-fit mx-auto">
                                <img src={blackpant} alt="" className="mx-auto" />

                                <div className='absolute top-15 right-20  flex justify-between px-2'>






                                    <small className="text-[#5B3E38] font-bold bg-[#E9E2D8] px-3 py-1 text-xs sm:text-sm instrument-sans">
                                        30% Off
                                    </small>
                                  
                                </div>
                            </div>


                        </div>

                    </div>



                    <div className='pt-[80px]  '>
                        <div>

                            <h4 className='text-[#AA8265] text-[20px] font-medium instrument-sans mb-[24px]'>Hot Item</h4>
                            {/* <h1 className='text -primary instrument-serif-regular text-[96px] leading-[100%]'> The Modern <br /> Look: <span className='text-[#AA8265]'>Double- <br />Breasted</span>
                            Blazers</h1> */}
                            <p className='text-[#5B3E38] mt-[48px] instrument-sans font-semibold mb-[48px] text-[36px]'>Slim Fit Khaki Stretch Chino Pants <br /> with Comfort Waistband.</p>
                        </div>


                        <div className='flex gap-[40px] '>

                            <div className='mb-[40px]'>
                                <button className=' instrument-sans btn pl-[16px] pr-[16px] pt-2 pb-2 inline-flex items-center gap-4'>
                                     <img src={remove} alt="" /> 1  <img src={add} alt="" /></button>

                            </div>


                            <div className=''>
                                <span className='text- primary font-bold text-[32px] Instrument Sans mr-[8px] mt-[8px]'>$74.99</span>
                                <span className='text-[#AA8265] text-[16px] font-semibold  Instrument Sans line-through'>$64.99</span>
                            </div>
                        </div>

                        <div className='flex gap-[16px] mb-[16px]'>
                            <div className='flex gap-1.5'>

                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>

                            <h6 className='text-[#5B3E38] text-[20px]  instrument-sans'> 56 reviews</h6>
                        </div>

                        <p className='text-[#5B3E38] text-[16px]  instrument-sans'>Impeccably tailored for a sharp silhouette, this blazer exudes class and <br /> confidence for any occasion.</p>

                        <div className='mt-[40px]'>
                            <button className='text-[16px] text-[#F6F4F0] bg-[#AA8265] inline-flex gap-2 pt-4 pb-4 pr-8 pl-8'> + ADD TO CART</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TheModernLook;