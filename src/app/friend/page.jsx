import FriendCard from '@/component/FriendCard/FriendCard';
import React, { use } from 'react';
import path from "path";
import fs from "fs";

const urlMaker = (fileName) => {
  const filePath = path.join(process.cwd(), "public", fileName);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);
  return data;
};
const Friend = () => {
   const friends = urlMaker("data.json");
    console.log(friends);
    return (
        <div>
            {
                friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
            }
        </div>
    );
};

export default Friend;