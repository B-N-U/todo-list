import React from 'react';
// import { IconName } from "react-icons/vsc";
import { VscCheck } from "react-icons/vsc";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

const Button = () => {
    return (

        <div className="bg-[#1e3a8a] text-white p-4 rounded-lg flex flex-row-reverse justify-between items-center">
            <div className="text-right">
                <h3 className="font-bold text-3xl ">مهمة جديدة</h3>
                <h2 className="text-2xl">تفاصيل المهمة</h2>
            </div>
            <div className="flex gap-2">
                <button className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 cursor-pointer"><VscCheck /></button>
                <button className="w-9 h-9 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 cursor-pointer "><AiFillEdit /></button>
                <button className="w-9 h-9 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer"><AiFillDelete /></button>
            </div>

        </div>
    );
};

export default Button;