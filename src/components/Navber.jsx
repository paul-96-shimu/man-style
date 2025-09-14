import React from 'react';

const Navber = () => {
    return (
        <div className='bg-black'>
           <div className='container mx-auto  flex justify-between '>

             <ul className='flex gap-10'>

                <li className='text-[#B0B0B0] text-[16px]'>HOME</li>
                <li className='text-[#B0B0B0] text-[16px]'>SHOP</li>
                <li className='text-[#B0B0B0] text-[16px]
                '>CONTACT US</li>

            </ul>

            <h3 className='text-white'>ManStyle Co.</h3>
            <h4 className='flex'> 
                <span className='text-[#B0B0B0]'>Hello</span>
                <span className='text-[#F6F6F6]'> Anarda</span>
            </h4>
           </div>
         
        </div>
    );
};

export default Navber;