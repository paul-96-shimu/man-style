import React from 'react';


import viewmore from '../assets/img/view more button.png'
import man2 from '../assets/img/man2.png'
import man3 from '../assets/img/man3 (1).png'
import man4 from '../assets/img/man34(2).png'
import cap from '../assets/img/cap.png'
import half from '../assets/img/half.png'
import jacket from '../assets/img/jacket.png'
import shoes from '../assets/img/shoes.png'
import textcontent from '../assets/img/textcontent.png'

const Shop = () => {
    return (
        <div className='bg-[#FFF]'>
            <div className='container mx-auto mt-[80px]'>





                <div className=' flex items-center justify-between'>
                    <h2 className='text- primary text-[36px] font-bold'>SHOP BY CATEGORY</h2>
                    <button className='text-[#906951] flex gap-2'>View More <img src={viewmore} alt="" /></button>

                </div>

                <div className='flex gap-[40px] items-center   mt-[40px]'>
                    <div className=''>
                        <h4>Suits & Formal Wear</h4>
                        <img src={man2} alt="" className='w-[775px]' />
                        <h5 className='flex gap-[8px] text-[#5B3E38] mt-[16px] font-bold'>Suits (Formal & Casual) <img src={textcontent} alt="" className='' /> Tuxedo<img src={textcontent} alt="" /> Waistcoats</h5>


                    </div>


                    <div className=''>
                        <div className='flex items-center '>


                            <div>


                                <img src={man3} alt="" className='' />

                                <h5 className='flex gap-[8px] text-[#5B3E38] mt-[16px] font-bold'>Shirts (Formal & Casual) <img src={textcontent} alt="" className='' /> Polo Shirts <img src={textcontent} alt="" /> Knitwear </h5>
                            </div>

                            <div className=''>

                                <img src={man4} alt="" className='w-[337px] h-[337px]' />

                                <h5 className='flex gap-[8px] text-[#5B3E38] mt-[16px] font-bold'>Trousers (Formal & Casual) <img src={textcontent} alt="" className='' /> Chinos <img src={textcontent} alt="" /> Shorts </h5>
                            </div>
                        </div>



                        <p className='text-[#AA8265] mt-[85px]'>

                            Discover a collection that seamlessly blends modern sophistication with timeless appeal. Our handpicked jackets, shirts, and tailored trousers are crafted to redefine your wardrobe, ensuring style and comfort in every detail. Each piece is designed to enhance your confidence and reflect your unique personality, making you stand out effortlessly.
                        </p>

                    </div>
                </div>




                <div className='flex items-center  gap-[43px] mt-[40px] '>
                    <img src={jacket} alt="" />
                    <img src={half} alt="" />
                    <img src={cap} alt="" />

                    <img src={shoes} alt="" />




                </div>


            </div>








        </div>
    );
};

export default Shop;