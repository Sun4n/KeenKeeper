import React from 'react';
import Image from 'next/image';
import callPng from '../../asset/call.png';
import textPng from '../../asset/text.png'
import videoPng from '../../asset/video.png';
const Text = ({findFilter}) => {
    console.log(findFilter);
    return (
        <div>
            <div className="flex gap-4 flex-col ">
                {
                    findFilter.map((log, indx) => {
                        return (
                            <div key={indx} style={{ padding: "16px", marginTop: "24px" }} className=" bg-base-100 w-full shadow-md rounded-[8px]  flex gap-2 items-center ">
                                <figure className="">
                                    {log.type.toLowerCase() == 'call' ? <Image src={callPng} alt="callImage" width={40} height={40}></Image> : log.type.toLowerCase() == 'text' ? <Image src={textPng} width={40} height={40} alt="textImage"></Image> : <Image src={videoPng} width={40} height={40} alt="videoImage"></Image>}
                                </figure>
                                <div className="ml-2">
                                    <div className=" flex gap-2 items-center">
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

export default Text;