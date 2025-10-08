import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext/Authcontex';
import { useCart } from '../Context/CartContext';

import long from '../assets/img/long.png'
import search from '../assets/img/search.png'
import favorite_border from '../assets/img/favorite_border.png'
import shopping from '../assets/img/shopping_cart.png'
import img from '../assets/img/more button.png'

const Navber = () => {
    const { user, logOut } = useContext(AuthContext); // ✅ ঠিক করা
    const { totalItems } = useCart(); // ✅ Cart সংখ্যা

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('logout user'))
            .catch(error => console.log(error));
    };

    return (
        <div className='bg-black py-[40px]'>
            <div className='container mx-auto instrument-sans'>
                <div className='flex justify-between items-center'>
                    <ul className='flex gap-10'>
                        <NavLink to="/"><li className='text-[#B0B0B0] text-[16px]'>HOME</li></NavLink>
                        <NavLink to="/shop"><li className='text-[#B0B0B0] text-[16px]'>SHOP</li></NavLink>
                        <NavLink to="/contact"><li className='text-[#B0B0B0] text-[16px]'>CONTACT US</li></NavLink>
                    </ul>

                    <div className='flex gap-[180px]'>
                        <h3 className='text-white text-[32px]'>ManStyle Co.</h3>
                    </div>

                    <div className='flex items-center gap-[40px]'>
                        <h4 className='flex gap-1'>
                            <span className='text-[#B0B0B0]'>Hello</span>
                            <span className='text-[#F6F6F6]'> {user?.displayName || "Anarda"}</span>
                        </h4>

                        <img src={long} alt="" />
                        <img src={search} alt="" />
                        <img src={favorite_border} alt="" />

                        <Link to="/cart" className="relative">
                            <img src={shopping} alt="Cart" className="w-8 h-8" />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </Link>

                        <div>
                            {user ? (
                                <button onClick={handleLogOut} className='btn'>LogOut</button>
                            ) : (
                                <>
                                    <Link to='/register'><button className='btn'>Register</button></Link>
                                    <Link to='/login'><button className='btn'>Login</button></Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#1D1D1D] mt-10'>
                <div className='container mx-auto flex justify-evenly mt-[40px] mb-[56px] pt-[22px] pb-[22px] instrument-sans'>
                    {["Shirts", "T-Shirts", "Blazers", "Suits", "Polo", "KnitWear", "Pants", "Underwear", "Accessories"].map((item, index) => (
                        <React.Fragment key={index}>
                            <h4 className='text-[#B0B0B0]'>{item}</h4>
                            <img src={img} alt="" />
                        </React.Fragment>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Navber;
