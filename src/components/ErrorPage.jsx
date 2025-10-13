import React from 'react';

import error from '../assets/img/error.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>

            <div className="flex flex-col items-center justify-center min-h-screen  p-4">


                <div className='relative'>


                    <div className='bg-[#F6F4F0] pt-[80px] pb-[80px] pl-[80px] pr-[80px]'>
                        <img src={error} alt="Error" className="mb-4" />
                    </div>
                    <div className=''>
                        <h1 className= 'bg-[#AA8265] absolute top-6 left-30 text-white text-[96px] instrument-serif-regular-italic pt-[24px] pb-[24px] pl-[48px] pr-[48px]'>OOPS</h1>

                    </div>
                </div>

                <h1 className="text-[96px] font-normal mb-2"><span className='text-[#121212] instrument-serif-regular'>Oh no?</span>
                    <span className='text-[#AA8265] instrument-serif-regular-italic'>Error 404</span></h1>
                <p className="text-[#5B3E38] text-[16px]">We can’t seem to find the page you are looking for.</p>

                <Link to="/">
                    <button className="mt-4 px-4 py-2 text-[16px] bg-[#AA8265] text-white rounded instrument-sans">BACK TO MAIN PAGE</button>
                </Link>
            </div>


        </div>
    );
};

export default ErrorPage;