import React from 'react';

import long from '../assets/img/long.png'
import search from '../assets/img/search.png'
import favorite_border from '../assets/img/favorite_border.png'
import shopping from '../assets/img/shopping_cart.png'


const Navber = () => {
    return (
        <div className='bg-black py-[40px]'>
            <div className='container mx-auto  flex justify-between '>

                <ul className='flex gap-10'>

                    <li className='text-[#B0B0B0] text-[16px]'>HOME</li>
                    <li className='text-[#B0B0B0] text-[16px]'>SHOP</li>
                    <li className='text-[#B0B0B0] text-[16px]
                '>CONTACT US</li>

                </ul>

                <div className='flex gap-[180px]'>

                    <h3 className='text-white text-[32px]'>ManStyle Co.</h3>
                   
                </div>


                <div className='flex items-center gap-[40px]  ' >

                     <h4 className='flex gap-1'>
                        <span className='text-[#B0B0B0]'>Hello</span>
                        <span className='text-[#F6F6F6]'> Anarda</span>
                    </h4>

                    <img src={long} alt="" />

                    <img src={search} alt="" />
                    <img src={favorite_border} alt="" />
                    <img src={shopping} alt="" />
                </div>
            </div>



        </div>
    );
};

export default Navber;