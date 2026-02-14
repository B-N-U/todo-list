import React from 'react';
// import { IconName } from "react-icons/vsc";
import { VscCheck } from "react-icons/vsc";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
const iniTodos = [
    {
        id: uuidv4(),
        title: "عنوان المهمة",
        detials: "هذه المهمة عبارة عن",
        isCompleted: false,
    },
    {
        id: uuidv4(),
        title: "عنوان المهمة",
        detials: "هذه المهمة عبارة عن",
        isCompleted: false,
    },
    {
        id: uuidv4(),
        title: "عنوان المهمة",
        detials: "هذه المهمة عبارة عن",
        isCompleted: false,
    }
]

const Button = () => {

    const [todos, setTodos] = useState(iniTodos);
    const [taskTitle, setTaskTitle] = useState("");
    function handleAddClick() {
        const newTodo = {
            id: uuidv4(),
            title: taskTitle,
            detials: "",
            isCompleted: false
        };
        setTodos([...todos, newTodo]);
        setTaskTitle("");
    }

    const todoJsx = todos.map((t) => {

        return (

            <div key={t.id} className="bg-[#1e3a8a] text-white p-4 rounded-lg flex flex-row-reverse justify-between transition-transform hover:scale-105 items-center shadow-stone-600 mb-4">
                <div className="text-right">

                    <h3 className="font-bold text-3xl">{t.title}</h3>
                    <h2 className="text-2xl">{t.detials}</h2>
                </div>

                <div className="flex gap-2">
                    <button className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 cursor-pointer" onClick={() => toggleTodo(t.id)} ><VscCheck /></button>
                    <button className="w-9 h-9 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 cursor-pointer"><AiFillEdit /></button>
                    <button className="w-9 h-9 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer"><AiFillDelete /></button>
                </div>
            </div>
        );
    });

    function toggleTodo(id) {
        const newTodos = todos.map((t) => {
            if (t.id === id) {
                // هنا بنغير حالة المهمة اللي اخترناها بس
                return { ...t, isCompleted: !t.isCompleted };
            }
            // هنا بنقوله "سيب باقي المهام زي ما هي"
            return t;
        });
        setTodos(newTodos);
    }
    return (

        <div >
            {todoJsx}
            <div className="flex gap-2 mt-6 w-full px-4 pb-4">
                <button className="bg-[#8b1a36] text-white px-8 py-2 rounded-md font-bold hover:bg-red-900 transition-colors shadow-sm cursor-pointer" onClick={handleAddClick}>
                    إضافة
                </button>
                <input
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    type="text"
                    placeholder="عنوان المهمة"
                    className=" border border-gray-200 rounded-md p-2 text-right outline-none focus:border-red-800"
                />
            </div>
        </div>
    );

};

export default Button;