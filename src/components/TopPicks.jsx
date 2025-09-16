import React from 'react';

import whiteshirt from '../assets/img/whiteshirt11.png'

import pant from '../assets/img/pant111.png'

import brown from '../assets/img/browncot111.png'

import shoes from '../assets/img/shoes444.png'
import pluse from '../assets/img/plus.png'
import pamlar from '../assets/img/pamlar.png'

import bluecot from '../assets/img/blue cot.png'
import formal from '../assets/img/white formal shirt.png'
import blackpant from '../assets/img/black pant.png'
import pamlar2 from '../assets/img/pamlar2.png'
import formal2 from '../assets/img/formal2.png'
import shoes2 from '../assets/img/shoes3.png'
import gray from '../assets/img/gray cot.png'


const TopPicks = () => {
    return (

        <section className=' bg-[#FFF] '>

            <div className='container mx-auto mt-[80px]'>

                <h1 className='text- primary text-[36px] font-bold instrument-sans'>TOP PICKS FOR YOU</h1>

                <div className='mt-[40px] flex gap-[42px]'>

                    {/* card section part-1 */}

                    {/* card 1 */}

                    <div>

                        <div className='bg-neutral-100  pt-4 pl-4 pr-4'>
                            <div className='flex justify-between items-center'>

                                <small className='text- primary  font-bold bg-[#E9E2D8] pl-[12px] pr-[14px]   instrument-sans'>30% Off</small>
                                <img src={pluse} alt="" className='w-[24px] border border-[#E9E2D8] p-[5px] '

                                />
                            </div>

                            <img src={whiteshirt} alt="" />


                        </div>

                        <h6 className='instrument-sans text-[#5B3E38] text-[16px] instrument-sans mt-[16px] font-bold'>Classic White Tailored Oxford Shirt  <br />with Reinforced Collar</h6>

                        <small className='text-[#AA8265] text-[14px] font-semibold instrument-sans mt-[8px]'>Shirts</small>
                        <br />
                        <span className='text- primary font-bold text-[24px] Instrument Sans mr-[8px] mt-[8px]'>$64.99</span> 
                        <span className='text-[#6D6D6D] text-[16px] font-semibold  Instrument Sans line-through'>$64.99</span>
                    </div>

                    {/* card 2 */}

                    <div>

                        <div className='bg-neutral-100  pl-4 pr-4 '>


                            <div className='flex justify-end pt-2'>

                                {/* <small className='text- primary  font-bold bg-[#E9E2D8] pl-[12px] pr-[14px]   instrument-sans'>30% Off</small> */}
                                <img src={pluse} alt="" className='w-[24px] border border-[#E9E2D8] p-[5px] '

                                />
                            </div>


                            <img src={pant} alt="" className='' />


                        </div>

                        <h6 className='instrument-sans text-[#5B3E38] text-[16px] instrument-sans mt-[16px] font-bold'>Slim Fit Sandstone Chino Pants <br /> with Stretch Comfort Fabric</h6>

                        <small className='text-[#AA8265] text-[14px] font-semibold instrument-sans mt-[8px]'>Trousers</small>
                        <br />
                        <span className='text- primary font-bold text-[24px] Instrument Sans mr-[8px] mt-[8px]'>$64.99</span> <span className='text-[#6D6D6D] text-[16px] font-semibold  Instrument Sans'>$64.99</span>
                    </div>


                    {/* card-3 */}

                    <div>

                        <div className='bg-neutral-100 pt-4 pl-4 pr-4'>


                            <div className='flex justify-end'>

                                {/* <small className='text- primary  font-bold bg-[#E9E2D8] pl-[12px] pr-[14px]   instrument-sans'>30% Off</small> */}
                                <img src={pluse} alt="" className='w-[24px] border border-[#E9E2D8] p-[5px] '

                                />
                            </div>

                            <img src={brown} alt="" />


                        </div>

                        <h6 className='instrument-sans text-[#5B3E38] text-[16px] instrument-sans mt-[16px] font-bold'>Premium Brown Double-Breasted <br /> Tailored Blazer</h6>

                        <small className='text-[#AA8265] text-[14px] font-semibold instrument-sans mt-[8px]'>Outerwears</small>
                        <br />
                        <span className='text- primary font-bold text-[24px] Instrument Sans mr-[8px] mt-[8px]'>$149.99</span>

                    </div>

                    {/* card-4 */}

                    <div>

                        <div className='bg-neutral-100  pt-4 pl-4 pr-4'>

                            <div className='flex justify-end'>

                                {/* <small className='text- primary  font-bold bg-[#E9E2D8] pl-[12px] pr-[14px]   instrument-sans'>30% Off</small> */}
                                <img src={pluse} alt="" className='w-[24px] border border-[#E9E2D8] p-[5px] '

                                />
                            </div>

                            <img src={shoes} alt="" />


                        </div>

                        <h6 className='instrument-sans text-[#5B3E38] text-[16px] instrument-sans mt-[16px] font-bold'>Handcrafted Italian Leather Brogue <br /> Shoes with Stitched Detailing </h6>

                        <small className='text-[#AA8265] text-[14px] font-semibold instrument-sans mt-[8px]'>Shoes</small>
                        <br />
                        <span className='text- primary font-bold text-[24px] Instrument Sans mr-[8px] mt-[8px]'>$99.99</span>

                    </div>
                </div>




                {/* card section part -2 */}



                <div className='mt-[40px] flex gap-[42px]'>

                    {/* card 1 */}

                    <div>

                        <div className='bg-neutral-100  pt-4 pl-4 pr-4'>
                            <div className='flex justify-end items-center'>

                               
                                <img src={pluse} alt="" className='w-[24px] border border-[#E9E2D8] p-[5px] '

                                />
                            </div>

                            <img src={pamlar} alt="" />


                        </div>

                        <h6 className='instrument-sans text-[#5B3E38] text-[16px] instrument-sans mt-[16px] font-bold'>Ultra-Soft Black Wool and <br /> Cashmere Blend Scarf with Fringe</h6>

                        <small className='text-[#AA8265] text-[14px] font-semibold instrument-sans mt-[8px]'>Accessories</small>
                        <br />
                        <span className='text- primary font-bold text-[24px] Instrument Sans mr-[8px] mt-[8px]'>$54.99</span>
                         {/* <span className='text-[#6D6D6D] text-[16px] font-semibold  Instrument Sans'>$64.99</span> */}
                    </div>

                    {/* card 2 */}

                    <div>

                        <div className='bg-neutral-100  pl-4 pr-4 '>


                            <div className='flex justify-between items-center pt-2'>

                                <small className='text- primary  font-bold bg-[#E9E2D8] pl-[12px] pr-[14px]   instrument-sans'>30% Off</small>
                                <img src={pluse} alt="" className='w-[24px] border border-[#E9E2D8] p-[5px] '

                                />
                            </div>


                            <img src={bluecot} alt="" className='' />


                        </div>

                        <h6 className='instrument-sans text-[#5B3E38] text-[16px] instrument-sans mt-[16px] font-bold'>Navy Blue Single-Breasted Wool <br /> Blazer with Slim-Cut Design </h6>

                        <small className='text-[#AA8265] text-[14px] font-semibold instrument-sans mt-[8px]'>Outerwear</small>
                        <br />
                        <span className='text- primary font-bold text-[24px] Instrument Sans mr-[8px] mt-[8px]'>$159.99</span> 
                        <span className='text-[#6D6D6D] text-[16px] font-semibold  Instrument Sans line-through'>$64.99</span>
                    </div>


                    {/* card-3 */}

                    <div>

                        <div className='bg-neutral-100 pt-4 pl-4 pr-4'>


                            <div className='flex justify-end'>

                                {/* <small className='text- primary  font-bold bg-[#E9E2D8] pl-[12px] pr-[14px]   instrument-sans'>30% Off</small> */}
                                <img src={pluse} alt="" className='w-[24px] border border-[#E9E2D8] p-[5px] '

                                />
                            </div>

                            <img src={formal} alt="" />


                        </div>

                        <h6 className='instrument-sans text-[#5B3E38] text-[16px] instrument-sans mt-[16px] font-bold'>Classic White Long-Sleeve Oxford <br /> Shirt with Tailored Fit and Button</h6>

                        <small className='text-[#AA8265] text-[14px] font-semibold instrument-sans mt-[8px]'>Shirts</small>
                        <br />
                        <span className='text- primary font-bold text-[24px] Instrument Sans mr-[8px] mt-[8px]'>$64.99</span>

                    </div>

                    {/* card-4 */}

                    <div>

                        <div className='bg-neutral-100  pt-4 pl-4 pr-4'>

                            <div className='flex justify-between'>

                                <small className='text- primary  font-bold bg-[#E9E2D8] pl-[12px] pr-[14px]   instrument-sans'>30% Off</small>
                                <img src={pluse} alt="" className='w-[24px] border border-[#E9E2D8] p-[5px] '

                                />
                            </div>

                            <img src={blackpant} alt="" />


                        </div>

                        <h6 className='instrument-sans text-[#5B3E38] text-[16px] instrument-sans mt-[16px] font-bold'>Slim Fit Black Stretch Chino Pants <br /> with Comfort Waistband </h6>

                        <small className='text-[#AA8265] text-[14px] font-semibold instrument-sans mt-[8px]'>Trousers</small>
                        <br />
                        <span className='text- primary font-bold text-[24px] Instrument Sans mr-[8px] mt-[8px]'>$74.99</span>
                            <span className='text-[#6D6D6D] text-[16px] font-semibold  Instrument Sans line-through'>$64.99</span>

                    </div>
                </div>




                {/* card section part-3 */}





                  <div className='mt-[40px] flex gap-[42px]'>

                    {/* card 1 */}

                    <div>

                        <div className='bg-neutral-100  pt-4 pl-4 pr-4'>
                            <div className='flex justify-between items-center'>

                                <small className='text- primary  font-bold bg-[#E9E2D8] pl-[12px] pr-[14px]   instrument-sans'>30% Off</small>
                                <img src={pluse} alt="" className='w-[24px] border border-[#E9E2D8] p-[5px] '

                                />
                            </div>

                            <img src={pamlar2} alt="" />


                        </div>

                        <h6 className='instrument-sans text-[#5B3E38] text-[16px] instrument-sans mt-[16px] font-bold'>Luxurious Soft Grey Wool and <br /> Cashmere Blend Scarf</h6>

                        <small className='text-[#AA8265] text-[14px] font-semibold instrument-sans mt-[8px]'>Accessories</small>
                        <br />
                        <span className='text- primary font-bold text-[24px] Instrument Sans mr-[8px] mt-[8px]'>$64.99</span> <span className='text-[#6D6D6D] text-[16px] font-semibold  Instrument Sans'>$64.99</span>
                    </div>

                    {/* card 2 */}

                    <div>

                        <div className='bg-neutral-100  pl-4 pr-4 '>


                             <div className='flex justify-end pt-2'>

                                {/* <small className='text- primary  font-bold bg-[#E9E2D8] pl-[12px] pr-[14px]   instrument-sans'>30% Off</small> */}
                                <img src={pluse} alt="" className='w-[24px] border border-[#E9E2D8] p-[5px] '

                                />
                            </div>


                            <img src={formal2 } alt=""  className=''/>


                        </div>

                        <h6 className='instrument-sans text-[#5B3E38] text-[16px] instrument-sans mt-[16px] font-bold'>Signature Crisp White Tailored <br /> Oxford Shirt with Premium Cotton </h6>

                        <small className='text-[#AA8265] text-[14px] font-semibold instrument-sans mt-[8px]'>shirts</small>
                        <br />
                        <span className='text- primary font-bold text-[24px] Instrument Sans mr-[8px] mt-[8px]'>$64.99</span>
                         <span className='text-[#6D6D6D] text-[16px] font-semibold  Instrument Sans'>$64.99</span>
                    </div>


                    {/* card-3 */}

                    <div>

                        <div className='bg-neutral-100 pt-4 pl-4 pr-4'>


                                 <div className='flex justify-end'>

                                {/* <small className='text- primary  font-bold bg-[#E9E2D8] pl-[12px] pr-[14px]   instrument-sans'>30% Off</small> */}
                                <img src={pluse} alt="" className='w-[24px] border border-[#E9E2D8] p-[5px] '

                                />
                            </div>

                            <img src={shoes2} alt="" />


                        </div>

                        <h6 className='instrument-sans text-[#5B3E38] text-[16px] instrument-sans mt-[16px] font-bold'>Handcrafted Brown Italian Leather <br /> Derby Shoes with Premium Stitch</h6>

                        <small className='text-[#AA8265] text-[14px] font-semibold instrument-sans mt-[8px]'>Shoes</small>
                        <br />
                        <span className='text- primary font-bold text-[24px] Instrument Sans mr-[8px] mt-[8px]'>$149.99</span>

                    </div>

                    {/* card-4 */}

                    <div>

                        <div className='bg-neutral-100  pt-4 pl-4 pr-4'>

                                 <div className='flex justify-end'>

                                {/* <small className='text- primary  font-bold bg-[#E9E2D8] pl-[12px] pr-[14px]   instrument-sans'>30% Off</small> */}
                                <img src={pluse} alt="" className='w-[24px] border border-[#E9E2D8] p-[5px] '

                                />
                            </div>

                            <img src={gray} alt="" />


                        </div>

                        <h6 className='instrument-sans text-[#5B3E38] text-[16px] instrument-sans mt-[16px] font-bold'>Modern Charcoal Grey Double- <br />Breasted Wool Suit Blazer </h6>

                        <small className='text-[#AA8265] text-[14px] font-semibold instrument-sans mt-[8px]'>Outerwear</small>
                        <br />
                        <span className='text- primary font-bold text-[24px] Instrument Sans mr-[8px] mt-[8px]'>$99.99</span>

                    </div>
                </div>


            </div>


        </section>

    );
};

export default TopPicks;