import Image from 'next/image';
import React from 'react';

const FriendCard = ({ friend }) => {
    // console.log(friend);
    return (
        <div className='bg-white shadow-2xl w-full h-[254px] p-[24px]  rounded-[8px]'>
            <div className='space-y-2 text-center'>
                <Image src={friend.picture} alt='friend pic' width={80} height={80} className='max-w-[80px] mx-auto'></Image>
                <p className='font-semibold text-[20px]'>{friend.name}</p>
                <p className='text-[#64748B] text-[12px]'>{friend.goal}d ago</p>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <div className="badge badge-success">{friend.tags[0]}</div>
                    <div className="badge badge-warning">{friend.status}</div>
                </div>
            </div>
        </div>
    );
};

export default FriendCard;