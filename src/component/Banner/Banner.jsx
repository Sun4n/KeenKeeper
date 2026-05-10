import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="py-20">
            
                <div className="max-w-[1100px] text-center">
                    <h1 className="text-[48px] font-bold">Friends to keep close in your life</h1>
                    <p className="py-4 text-[1rem] text-center text-[#64748B] max-w-[1100px] ">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture <br /> the
                        relationships that matter most.
                    </p>
                    <button className="btn bg-[#244D3F] text-white"><FaPlus />Add a Friend</button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-6 text-center'>
                    <div className='w-full h-[136px] rounded-[8px] bg-white shadow-xl'>
                        <p className='px-[110px] pt-[32px] pb-2 text-[2rem] font-semibold text-[#64748B]'>10</p>
                        <p className='px-[32px]  text-[1rem] text-center text-[#64748B]'>Total Friend</p>
                    </div>
                    <div className='w-full h-[136px] rounded-[8px] bg-white shadow-xl'>
                        <p className='px-[110px] pt-[32px] pb-2 text-[2rem] font-semibold text-[#64748B]'>3</p>
                        <p className='px-[32px]  text-[1rem] text-center text-[#64748B]'>On Track</p>
                    </div>
                    <div className='w-full h-[136px] rounded-[8px] bg-white shadow-xl'>
                        <p className='px-[110px] pt-[32px] pb-2 text-[2rem] font-semibold text-[#64748B]'>6</p>
                        <p className='px-[32px]  text-[1rem] text-center text-[#64748B]'>Need Attention</p>
                    </div>
                    <div className='w-full h-[136px] rounded-[8px] bg-white shadow-xl'>
                        <p className='px-[110px] pt-[32px] pb-2 text-[2rem] font-semibold text-[#64748B]'>12</p>
                        <p className='px-[32px]  text-[1rem] text-center text-[#64748B]'>Interactions This Month</p>
                    </div>
                </div>
        
        </div>
    );
};

export default Banner;