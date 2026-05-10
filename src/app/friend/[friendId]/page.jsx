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
        <div className='max-w-[1100px] mx-auto'>
            <div>
                <div className='bg-white shadow-2xl w-[350px] h-[300px] p-[24px]  rounded-[8px]'>
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
                    <button className="btn w-full shadow-md bg-white"><FaBoxArchive />Archive</button>
                    <button className="btn w-full shadow-md bg-white"> <MdDelete />Delete</button>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default FriendDetail;