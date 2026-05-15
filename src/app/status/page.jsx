"use client";
import { timelineContext } from '@/Context/TimelineProvider';
import React, { useContext } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const Stats = () => {
    const { logs } = useContext(timelineContext)

    const data = [
        { name: "Text", value: logs.filter(log => log.type === "Text").length ,fill:"#7f37f5" },
        { name: "Call", value: logs.filter(log => log.type === "Call").length ,fill:"#244d3f" },
        { name: "Video", value: logs.filter(log => log.type === "Video").length,fill:"#37a163"  },
    ]



    return (
        <div className="container mx-auto mt-6">
            <h1 className="font-bold text-[48px] mb-6">Friendship Analytics</h1>

            <div className="bg-white rounded-[12px] shadow-sm p-6">
                <p className="text-[16px] text-[#64748B] mb-4">By Interaction Type</p>

                <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh' , margin:"auto", aspectRatio: 1 }} responsive>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        
                        cornerRadius="50%"
                        fill="#8884d8"
                        
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    <Legend></Legend>
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
        </div>
    );
};

export default Stats;