"use client";
import React, { createContext, useState } from 'react';


export const timelineContext = createContext();

const TimelineProvider = ({ children }) => {
   const [logs, setLogs] = useState([]) // array of object

const handleCall = (findFriend) => {
    setLogs([...logs, { type: "Call", friend: findFriend }])
}

const handleText = (findFriend) => {
    setLogs([...logs, { type: "Text", friend: findFriend }])
}

const handleVideo = (findFriend) => {
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