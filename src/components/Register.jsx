import React from 'react';

import jacket from '../assets/img/brown jacket.png'

const Register = () => {
    return (
        <section>



            <div className='container mx-auto py-[198px]'>


                <div className=' '>
                    <div className=' flex'>

                        <div className='bg-[rgba(91,62,56,0.38)] pt-[40px] pl-[40px]'>

                            <h1 className=' text- primary text-[72px] instrument-serif-regular leading-[100%
                            ]'>Style That
                                <span className='text-[#AA8265] instrument-serif-regular-italic'>Speaks</span> <br /> for You</h1>

                            <div className='flex'>

                                <p>“From classic staples to <br /> modern essentials, elevate <br /> your wardrobe with pieces <br />that redefine timeless fashion."</p>

                                <img src={jacket} alt="" />

                                <p>Discover expertly crafted <br /> menswear designed to <br /> inspire confidence and <br /> sophistication</p>
                            </div>
                        </div>


                    


                        <div className='bg-[#FFF] shadow-lg  pl-[80px] pr-[80px] pt-[80px] '>

                            <h1 className='text-[#5B3E38] instrument-sans font-bold text-[24px]'>Create Account</h1>
                            <p className='text-[#5B3E38] text-[16px] font-medium'> Already have an account? <span className='text-[#AA8265]'>Log in here</span></p>


                            <button className=" text-[14px] font-medium inline-flex items-center gap-[8px] text-[#AA8265] border border-[#E9E2D8] mt-[40px] pr-[32px] pl-[32px] pt-[16px] pb-[16px] instrument-sans">

                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>


                         <form action="">

                               <input type="text" placeholder='Email' />
                         </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register; 