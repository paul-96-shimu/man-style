import React from 'react'

import bgcover from '../assets/img/bg-black.png'
import shoes from '../assets/img/shoes9999.png'


export default function Stay() {
    return (
        <section style={{
            backgroundImage: `url(${bgcover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
            className="py-20"
        >


            <div className='container mx-auto'>


                <div className='flex justify-between'>

                    <div>


                        <h1 className='text-[#F6F4F0] text-[36px] font-bold tracking-[0.72px] instrument-sans'>STAY IN KNOW</h1>
                        <p className='text-[#B0B0B0] text-[20px] mt-[16px] font-medium instrument-sans'> Subscribe for the latest updates, exclusive offers, and <br /> latest arrivals.</p>




                        <div className='mt-[40px] flex gap-[20px]'>
                            <form className='bg-[#FFF] pt-[16px] pb-[16px] pr-[32px] pl-[32px] instrument-sans'>
                                <input type="email" placeholder='Your Email Address' />

                            </form>

                            <button className='text-[#F0FDF5] bg-[#AA8265] pt-[16px] pb-[16px] pr-[32px] pl-[32px] instrument-sans'> SUBSCRIBE</button>
                        </div>
                    </div>




                    <div>

                        <img src={shoes} alt="" />
                    </div>
                </div>

            </div>
        </section>
    )
}
