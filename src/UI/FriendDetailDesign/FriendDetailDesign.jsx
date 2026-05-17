"use client";
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { MdDelete } from 'react-icons/md';
import { RiNotificationSnoozeFill } from 'react-icons/ri';
import { FaBoxArchive, FaMessage, FaVideo } from 'react-icons/fa6';
import { IoCallSharp } from 'react-icons/io5';
import { LuPhoneCall } from 'react-icons/lu';
import { timelineContext } from '@/Context/TimelineProvider';
const FriendDetailDesign = ({ friends, friendId }) => {
    const findFriend = friends.find(friend => friend.id == friendId)

    const { handleCall, handleText, handleVideo, call } = useContext(timelineContext)
    console.log(handleCall, call);
    return (
        <div className='max-w-[1100px] mx-auto flex gap-4 mt-20 lg:flex-row flex-col justify-center items-center'>
            <div className=''>
                <div className='bg-white shadow-2xl w-[370px] h-[300px] p-[24px]  rounded-[8px]'>
                    <div className='space-y-2 text-center'>
                        <Image src={findFriend.picture} alt='friend pic' width={80} height={80} className='max-w-[80px] mx-auto'></Image>
                        <p className='font-semibold text-[20px]'>{findFriend.name}</p>
                        <p className='text-[#64748B] text-[12px]'>{findFriend.goal}d ago</p>
                        <div className='flex flex-col gap-2 justify-center items-center'>
                            <div className="badge badge-success">{findFriend.tags[0]}</div>
                            <div className="badge badge-warning">{findFriend.status}</div>
                        </div>
                        <i className='text-[1rem] font-medium text-[#64748B]'>{findFriend.bio}</i>
                        <p className='mb-2 text-[#64748B]'>Preferred: email</p>
                    </div>
                </div>
                <div className='space-y-2'>
                    <button className="btn w-full mt-2 shadow-md bg-white font-medium text-[1rem]"><RiNotificationSnoozeFill />Snooze 2 weeks</button>
                    <button className="btn w-full shadow-md font-medium text-[1rem] bg-white"><FaBoxArchive />Archive</button>
                    <button className="btn w-full shadow-md bg-white font-medium text-[1rem] text-[#EF4444]"> <MdDelete />Delete</button>
                </div>
            </div>
            <div>
                <div className='grid md:grid-cols-3 gap-1 flex flex-col'>
                    <div className='bg-white shadow-md h-[134px] rounded-[8px] flex flex-col justify-center items-center '>
                        <p className='text-[2rem] font-semibold text-[#64748B]'>62</p>
                        <p className='text-[1rem] text-center text-[#64748B]'>Days Since Contact</p>
                    </div>
                    <div className='bg-white shadow-md h-[134px] rounded-[8px] flex flex-col justify-center items-center '>
                        <p className='px-[110px] pt-[32px] pb-2 text-[2rem] font-semibold text-[#64748B]'>30</p>
                        <p className='px-[32px]  text-[1rem] text-center text-[#64748B]'>Goal (Days)</p>
                    </div>
                    <div className='bg-white shadow-md w-full md:w-[230px]  h-[134px] rounded-[8px] flex flex-col justify-center items-center '>
                        <p className='px-[16px] text-[2rem] font-semibold text-[#64748B]'>Feb 27, 2026</p>
                        <p className='px-[32px]  text-[1rem] text-center text-[#64748B]'>Next Due</p>
                    </div>
                </div>
                <div className='bg-white shadow-md w-full  lg:w-full rounded-[8px] mb-4'>
                    <div className='flex justify-between items-center w-full p-6'>
                        <p className='text-[#244D3F] font-medium  text-[20px]'>Relationship Goal</p>
                        <button className='bg-[#F8FAFC] font-medium text-[14px] px-[17px] py-[8px] rounded-[4px]'>Edit</button>
                    </div>
                    <p className='px-6 text-[18px]'>Connect every <span className='font-bold'>30 days</span> </p>
                </div>
                <div className='bg-white shadow-md p-6 rounded-[8px] w-full'>
                    <p className='font-medium text-[20px] text-[#244D3F]'>Quick Check-In</p>
                    <div className='grid grid-cols-3 gap-2 mt-2'>
                        <div className='bg-[#F8FAFC] shadow-sm rounded-[8px]'>
                            <button onClick={() => handleCall(findFriend)} className='w-full h-[95px] flex justify-center items-center flex-col gap-1 text-[25px]'>
                                <LuPhoneCall />
                                <span className='text-[14px]'>Call</span>
                            </button>
                        </div>
                        <div className='bg-[#F8FAFC] shadow-sm rounded-[8px]'>
                            <button onClick={() => handleText(findFriend)} className='w-full h-[95px] flex justify-center items-center flex-col gap-1 text-[25px]'>
                                <FaMessage />
                                <span className='text-[14px]'>Text</span>
                            </button>
                        </div>
                        <div className='bg-[#F8FAFC] shadow-sm rounded-[8px]'>
                            <button onClick={() => handleVideo(findFriend)} className='w-full h-[95px] flex justify-center items-center flex-col gap-1 text-[25px]'>
                                <FaVideo />
                                <span className='text-[14px]'>Video</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      
    );
};

export default FriendDetailDesign;