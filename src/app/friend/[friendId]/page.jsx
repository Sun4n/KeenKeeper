import React from 'react';
import path from "path";
import fs from "fs";
import Image from 'next/image';
import { MdDelete } from 'react-icons/md';
import { RiNotificationSnoozeFill } from 'react-icons/ri';
import { FaBoxArchive } from 'react-icons/fa6';


const urlMaker = (fileName) => {
    const filePath = path.join(process.cwd(), "public", fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);
    return data;
};
const FriendDetail = async ({ params }) => {
    const { friendId } = await params
    const friends = urlMaker("data.json");
    const findFriend = friends.find(friend => friend.id == friendId)
    console.log(findFriend);

    console.log(friends);
    return (
        <div className='max-w-[1100px] mx-auto flex gap-4 mt-20'>
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
                <div className='flex gap-1'>
                    <div className='bg-white shadow-md w-[235px] h-[134px] rounded-[8px] '>
                        <p className='px-[110px] pt-[32px] pb-2 text-[2rem] font-semibold text-[#64748B]'>62</p>
                        <p className='px-[32px]  text-[1rem] text-center text-[#64748B]'>Days Since Contact</p>
                    </div>
                    <div className='bg-white shadow-md w-[235px] h-[134px] rounded-[8px] '>
                        <p className='px-[110px] pt-[32px] pb-2 text-[2rem] font-semibold text-[#64748B]'>30</p>
                        <p className='px-[32px]  text-[1rem] text-center text-[#64748B]'>Goal (Days)</p>
                    </div>
                    <div className='bg-white shadow-md w-[420px] h-[134px] rounded-[8px] '>
                        <p className='px-[110px] pt-[32px] pb-2 text-[2rem] font-semibold text-[#64748B]'>Feb 27, 2026</p>
                        <p className='px-[32px]  text-[1rem] text-center text-[#64748B]'>Next Due</p>
                    </div>
                </div>
                <div className='bg-white shadow-md w-full h-[134px] rounded-[8px] '>
                    <div className='flex justify-between items-center p-6'>
                        <p className='text-[#244D3F] font-medium text-[20px]'>Relationship Goal</p>
                        <button className='bg-[#F8FAFC] font-medium text-[14px] px-[17px] py-[8px] rounded-[4px]'>Edit</button>
                    </div>
                    <p className='px-6 text-[18px]'>Connect every <span className='font-bold'>30 days</span> </p>
                </div>
            </div>
        </div>
    );
};

export default FriendDetail;