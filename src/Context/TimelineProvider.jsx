"use client";
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const timelineContext = createContext();

const TimelineProvider = ({ children }) => {
   const [logs, setLogs] = useState([]) // array of object

const handleCall = (findFriend) => {
    toast.success(`Call with ${findFriend.name} `, {
      position: 'top-left',
      autoClose: 3000, 
    });
    setLogs([...logs, { type: "Call", friend: findFriend }])
}

const handleText = (findFriend) => {
     toast.success(`Text with ${findFriend.name} `, {
      position: 'top-left',
      autoClose: 3000, 
    });
    setLogs([...logs, { type: "Text", friend: findFriend }])
}

const handleVideo = (findFriend) => {
     toast.success(`Video with ${findFriend.name} `, {
      position: 'top-left',
      autoClose: 3000, 
    });
    setLogs([...logs, { type: "Video", friend: findFriend }])
}
    const data = {
        handleCall, logs, setLogs,handleText,handleVideo
    }
    return <timelineContext.Provider value={data}>
        {children}
    </timelineContext.Provider>
};

export default TimelineProvider;