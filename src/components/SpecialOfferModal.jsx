import React, { useEffect, useState } from 'react';
import copy from '../assets/img/copy_all.png';
import shoes from '../assets/img/modal shoes.png';

const SpecialOfferModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            {/* Modal Container */}
            <div className="bg-white rounded-lg shadow-2xl flex flex-col lg:flex-row overflow-hidden max-w-5xl w-full mx-4 relative">

                {/* Left Side */}
                <div className="bg-[#F6F4F0] p-6 flex flex-col justify-center items-center text-center lg:w-1/2">
                    <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold mb-4 instrument-serif-regular leading-tight">
                        Welcome to <br /><span className="text-[#AA8265]">ManStyle Co.</span>
                    </h2>
                    <p className="text-[#5B3E38] mb-6 text-sm sm:text-base lg:text-lg">
                        "Step into a world of sophistication with tailored designs that redefine
                        comfort and elevate confidence. Discover timeless pieces crafted for every occasion."
                    </p>

                    <img
                        src={shoes}
                        alt="Special Offer"
                        className="w-full h-[280px] sm:h-[350px] object-cover rounded-lg"
                    />
                </div>

                {/* Right Side */}
                <div className="p-8 flex flex-col justify-center lg:w-1/2">
                    <h5 className="text-[#5B3E38] font-semibold text-2xl mb-2">
                        Get 10% Off <br /> Your First Purchase
                    </h5>
                    <p className="text-[#AA8265] font-medium mb-6">
                        Use code below at checkout.
                    </p>

                    {/* Promo Code */}
                    <div className="flex items-center gap-4 mb-6">
                        <h4 className="border border-[#E9E2D8] h-[56px] px-6 rounded-md font-semibold text-[#5B3E38] flex items-center justify-center">
                            WELCOME10
                        </h4>
                        <button className="h-[56px] w-[56px] flex items-center justify-center bg-[#F6F4F0] border border-[#E9E2D8] rounded-md hover:bg-[#E9E2D8]">
                            <img src={copy} alt="Copy" className="w-6 h-6" />
                        </button>
                    </div>


                    {/* Shop Now Button */}
                    <button className="bg-[#AA8265] hover:bg-[#8b6850] transition-colors duration-300 h-[56px] px-8 rounded text-[#F6F4F0] font-semibold instrument-sans">
                        SHOP NOW
                    </button>
                </div>

                {/* Close Button */}
                <button
                    className="absolute top-3 right-3 text-2xl font-bold text-[#5B3E38] hover:text-[#AA8265] transition-colors"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close"
                >
                    ×
                </button>
            </div>
        </div>
    );
};

export default SpecialOfferModal;
