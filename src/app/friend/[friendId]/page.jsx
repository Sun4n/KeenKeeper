'use client '
import React from 'react';
import path from "path";
import fs from "fs";
import FriendDetailDesign from '@/UI/FriendDetailDesign/FriendDetailDesign';




const urlMaker = (fileName) => {
    const filePath = path.join(process.cwd(), "public", fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);
    return data;
};
const FriendDetail = async ({ params }) => {
    const { friendId } = await params
    const friends = urlMaker("data.json");
    
    
    
    return (
        <div>
            <FriendDetailDesign friends={friends} friendId={friendId}></FriendDetailDesign>
        </div>
    );
};

export default FriendDetail;