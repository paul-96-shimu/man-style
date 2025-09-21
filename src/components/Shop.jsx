import React from 'react';


import viewmore from '../assets/img/view more button.png'
import man2 from '../assets/img/smartman.png'
import man3 from '../assets/img/formal man.png'
import man4 from '../assets/img/formal pant.png'
import cap from '../assets/img/cap.png'
import half from '../assets/img/underware.png'
import jacket from '../assets/img/brown jacket.png'
import shoes from '../assets/img/shoes.png'
import textcontent from '../assets/img/textcontent.png'

const Shop = () => {
    return (
        <div className='bg-[#FFF]'>
            <div className='container mx-auto mt-[80px]'>





                <div className=' flex items-center justify-between pb-[40px]'>
                    <h2 className='text- primary text-[36px] font-bold instrument-sans'>SHOP BY CATEGORY</h2>
                    <button className='text-[#906951] flex gap-2'>View More <img src={viewmore} alt="" /></button>

                </div>

                <div className='grid grid-cols-4 gap-[43px] '>
                    <div className='col-span-2'>
                        <div className='flex  pt-[30px] pl-[39px] bg-[#c9c2bd] '>

                            <div>


                                <h4 className='instrument-serif-regular-italic  text-[#AA8265] text-[64px] leading-[100%]'>Suits & <br /> Formal <br /> Wear</h4>
                                <img src={man2} alt="" className='' />
                            </div>


                        </div>


                        <div>

                            <h5 className='flex gap-[8px] text-[#5B3E38] mt-[16px] font-bold instrument-sans'>Suits (Formal & Casual) <img src={textcontent} alt="" className='' /> Tuxedo<img src={textcontent} alt="" /> Waistcoats</h5>
                        </div>
                    </div>
                    <div className='col-span-2 grid grid-cols-2'>
                        <div>


                            <img src={man3} alt="" className='' />

                            <h5 className='flex gap-[8px] text-[#5B3E38] mt-[16px] font-bold instrument-sans'>Shirts (Formal & Casual) | Polo Shirts |
                                <br /> Knitwear </h5>
                        </div>
                        <div className=''>

                            <img src={man4} alt="" className='w-[337px] h-[337px]' />

                            <h5 className='flex gap-[8px] text-[#5B3E38] mt-[16px] font-bold instrument-sans'>Trousers (Formal & Casua)| Chinos| <br />Shorts </h5>
                        </div>
                        <div className=' col-span-2 text-[#AA8265] instrument-sans font-medium'>
                            <p>Discover a collection that seamlessly blends modern sophistication with timeless appeal. Our handpicked jackets, shirts, and tailored trousers are crafted to redefine your wardrobe, ensuring style and comfort in every detail. Each piece is designed to enhance your confidence and reflect your unique personality, making you stand out effortlessly.</p>
                        </div>
                    </div>


                    <div>

                        <div className='grid grid-cols-2 col-span-2'>
                            <img className='w-full' src={jacket} alt="" />
                            <h4 className='instrument-serif-regular-italic  text-[#AA8265] text-[64px] leading-[100%]'>outer <br />  Wear</h4>



                        </div>

                        <h5 className='flex gap-[8px] text-[#5B3E38] mt-[16px] font-bold instrument-sans'>Shirts (Formal & Casual) | Polo Shirts |
                            <br /> Knitwear </h5>



                    </div>

                    <div>
                        <div className="flex">
                            {/* Image */}
                            <img className="w-full" src={half} alt="" />

                            {/* Text under the image */}
                            <h4 className="instrument-serif-regular-italic text-[#AA8265] text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight mt-4 text-center">
                                Under <br /> Wear
                            </h4>
                        </div>

                        {/* Subtitle */}
                        <h5 className="flex flex-wrap gap-2 text-[#5B3E38] mt-4 font-bold instrument-sans text-sm sm:text-base md:text-lg text-center">
                            Shirts (Formal & Casual) | Polo Shirts | Knitwear
                        </h5>
                    </div>

                    <div>

                        <div className=''>

                             <h4 className='instrument-serif-regular-italic  text-[#AA8265] text-[64px] leading-[100%]'>Accessories</h4>

                            <img className='w-full' src={cap} alt="" />


                           



                        </div>


                        <h5 className='flex gap-[8px] text-[#5B3E38] mt-[16px] font-bold instrument-sans'>Shirts (Formal & Casual) | Polo Shirts |
                            <br /> Knitwear </h5>

                    </div>


                    <div>



                        <div className='flex flex-col '>
                            <img className='w-full' src={shoes} alt="" />
                            <h4 className='instrument-serif-regular-italic  text-[#AA8265] text-[64px] leading-[100%]'>shoes</h4>



                        </div>

                        <h5 className='flex gap-[8px] text-[#5B3E38] mt-[16px] font-bold instrument-sans'>Shirts (Formal & Casual) | Polo Shirts |
                            <br /> Knitwear </h5>

                    </div>

                </div>







            </div>








        </div>
    );
};

export default Shop;