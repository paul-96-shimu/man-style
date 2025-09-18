import React from 'react'

import bgcover from '../assets/img/bg-black.png'
import shoes from '../assets/img/shoessssss.png'


export default function Stay() {
    return (
        <section style={{
            backgroundImage: `url(${bgcover})`,
             backgroundSize: "2200px",
            backgroundRepeat:"no-repeat",
            backgroundPosition: "center",
        }}
            className=""
        >


            <div className='container mx-auto'>


                <div className='flex justify-between'>

                    <div className='mt-[80px]'>


                        <h1 className='text-[#F6F4F0] text-[36px] font-bold tracking-[0.72px] instrument-sans'>STAY IN KNOW</h1>
                        <p className='text-[#B0B0B0] text-[20px] mt-[16px] font-medium instrument-sans'> Subscribe for the latest updates, exclusive offers, and <br /> latest arrivals.</p>




                        <div className='mt-[40px] flex gap-[20px]'>
                            <form className='bg-[#FFF] pt-[16px] pb-[16px] pr-[32px] pl-[32px] instrument-sans '>
                                <input type="email" placeholder='Your Email Address' className='placeholder-[#D5C4B3] ' />

                            </form>

                            <button className='text-[#F0FDF5] bg-[#AA8265] pt-[16px] pb-[16px] pr-[32px] pl-[32px] instrument-sans'> SUBSCRIBE</button>
                        </div>
                    </div>




                    <div className=''>

                        <img src={shoes} alt="" className='w-[736px] h-[372px]' />
                    </div>
                </div>

            </div>
        </section>
    )
}
