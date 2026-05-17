import FriendCard from '@/component/FriendCard/FriendCard';
import React, { Suspense } from 'react';
import path from "path";
import fs from "fs";
import Link from 'next/link';

const urlMaker = (fileName) => {
    const filePath = path.join(process.cwd(), "public", fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);
    return data;
};

const Friend = () => {
    const friends = urlMaker("data.json");

    return (
        <>
            <h1 className='text-[24px] text-[#1F2937] font-semibold mb-4'>Your Friends</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                <Suspense fallback={
                    <div className='max-w-[1110px] mx-auto'><span className="loading loading-spinner loading-xl"></span></div>
                }>
                    {friends.map(friend => (
                        <Link key={friend.id} href={`/friend/${friend.id}`}>
                            <FriendCard friend={friend} />
                        </Link>
                    ))}
                </Suspense>
            </div>
        </>
    );
};

export default Friend;