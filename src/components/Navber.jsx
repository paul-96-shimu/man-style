import React from 'react';

import long from '../assets/img/long.png'
import search from '../assets/img/search.png'
import favorite_border from '../assets/img/favorite_border.png'
import shopping from '../assets/img/shopping_cart.png'
import img from '../assets/img/more button.png'
import { NavLink } from 'react-router';

const Navber = () => {
    return (
        <div className='bg-black py-[40px]'>
            <div className='container mx-auto instrument-sans  '>

                <div className='flex justify-between'>
                    <ul className='flex gap-10'>

                        <NavLink to="/"> <li className='text-[#B0B0B0] text-[16px]'>HOME</li></NavLink>
                        <NavLink to="shop"> <li className='text-[#B0B0B0] text-[16px]'>SHOP</li></NavLink>


                        <NavLink to="contact"> <li className='text-[#B0B0B0] text-[16px]'>CONTACT US</li>   </NavLink>

               
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


            <div className='bg-[#1D1D1D] '>
                <div className=' container mx-auto  flex justify-evenly mt-[40px] mb-[56px] pt-[22px] pb-[22px] instrument-sans'>

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


        </div>
    );
};

export default Navber;