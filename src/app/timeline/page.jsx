"use client";
import { timelineContext } from "@/Context/TimelineProvider";
import { useContext, useState } from "react";
import TimelineCard from "@/component/TimelineCard/TimelineCard";
import Call from "@/UI/test/Call";
import Text from "@/UI/test/Text";
import Video from "@/UI/test/Video";

const Timeline = () => {
    const { logs } = useContext(timelineContext)
    const [sort, setSort] = useState("All") // ✅ default All
    
    const findFilter = logs.filter(log => log.type.toLowerCase() === sort.toLowerCase())

    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-[48px]">Timeline</h1>

         
            <details className="dropdown mb-6">
                <summary className="btn">
                    {sort} ⬇️
                </summary>
                <ul className="menu dropdown-content bg-white rounded-box z-10 w-52 p-2 shadow-md">
                    <li onClick={() => setSort("All")}><a>All</a></li>
                    <li onClick={() => setSort("Call")}><a>Call</a></li>
                    <li onClick={() => setSort("Text")}><a>Text</a></li>
                    <li onClick={() => setSort("Video")}><a>Video</a></li>
                </ul>
            </details>

           
            <div>
                {sort == 'All' && <TimelineCard logs={logs}></TimelineCard>}
                {sort == 'Call' && <Call findFilter={findFilter}></Call>}
                {sort == 'Text' && <Text findFilter={findFilter}></Text>}
                {sort == 'Video' && <Video findFilter={findFilter}></Video>}
            </div>
        </div>
    );
};

export default Timeline;