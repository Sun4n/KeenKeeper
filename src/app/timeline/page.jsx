"use client";
import { timelineContext } from "@/Context/TimelineProvider";
import { useContext } from "react";
import callPng from '../../asset/call.png';
import textPng from '../../asset/text.png'
import videoPng from '../../asset/video.png'
import Image from "next/image";


const Timeline = () => {
    const { logs } = useContext(timelineContext)
    console.log(logs);
    return (
        <div className="container mx-auto ">
            <h1 className="font-bold text-[48px]">Timeline</h1>
            <div className="flex gap-4 flex-col ">
                {
                    logs.map((log, indx) => {
                        return (
                            <div key={indx} style={{ padding: "16px", marginTop: "24px" }} className="card bg-base-100 w-full h-[238px] shadow-md rounded-[8px]  flex gap-2 items-center ">
                                <figure className="p-4">
                                    {log.type.toLowerCase() == 'call' ? <Image src={callPng} alt="callImage" width={40} height={40}></Image> : log.type.toLowerCase() == 'text' ? <Image src={textPng} width={40} height={40} alt="textImage"></Image> : <Image src={videoPng} width={40} height={40} alt="videoImage"></Image>}
                                </figure>
                                <div className="ml-2">
                                    <div className="card-body flex gap-2 items-center p-40">
                                        <span className="uppercase text-[20px] font-medium">{log.type}</span>
                                        <h2 className="card-title">with {log.friend.name}</h2>
                                    </div>
                                    <p>{new Date().toDateString()}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Timeline;