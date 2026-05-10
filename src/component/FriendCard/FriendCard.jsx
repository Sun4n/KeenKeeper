
import React from 'react';

const FriendCard = ({friend}) => {
    console.log(friend);
    return (
        <h1>{friend.name}</h1>
    );
};

export default FriendCard;