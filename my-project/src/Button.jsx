import React from 'react';
// import { IconName } from "react-icons/vsc";
import { VscCheck } from "react-icons/vsc";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import { useState, useContext, useEffect } from 'react';
import { TodoContext } from './TodoContext'


const Button = () => {
    const { todos, setTodos, filterType } = useContext(TodoContext);
   
    const [taskTitle, setTaskTitle] = useState("");
    useEffect(() => {
        const storageTodos = localStorage.getItem("todos");
        if (storageTodos) {
            setTodos(JSON.parse(storageTodos));
        }
    }, [setTodos]);


    function handleEditClick(id) {
        const newTitle = prompt("اكتب العنوان الجديد للمهمة:");
        if (newTitle) {
            const updatedTodos = todos.map((t) => {
                if (t.id === id) {
                    return { ...t, title: newTitle };
                }
                return t;
            });
            setTodos(updatedTodos);
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
        }
    }
    function handleDeleteClick(id) {
        const updatedTodos = todos.filter((t) => t.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }
    function handleAddClick() {
        const newTodo = {
            id: uuidv4(),
            title: taskTitle,
            detials: "",
            isCompleted: false
        };
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setTaskTitle("");
    }
    let todosToBeRendered = todos;

    if (filterType === "completed") {
        todosToBeRendered = todos.filter((t) => t.isCompleted === true);
    } else if (filterType === "non-completed") {
        todosToBeRendered = todos.filter((t) => t.isCompleted === false);
    }

    const todoJsx = todosToBeRendered.map((t) => {
        return (
            <div key={t.id} className="bg-[#1e3a8a] text-white p-4 rounded-lg flex flex-row-reverse justify-between transition-transform hover:scale-105 items-center shadow-stone-600 mb-4">
                <div className="text-right">

                    <h3 className="font-bold text-3xl">{t.title}</h3>
                    <h2 className="text-2xl">{t.detials}</h2>
                </div>

                <div className="flex gap-2">
                    <button className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 cursor-pointer" onClick={() => toggleTodo(t.id)}  ><VscCheck /></button>
                    <button className="w-9 h-9 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 cursor-pointer" onClick={() => handleEditClick(t.id)}
                    > <AiFillEdit /></button>
                    <button className="w-9 h-9 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer" onClick={() => {
                        if (window.confirm("هل أنت متأكد من حذف هذه المهمة؟")) {
                            handleDeleteClick(t.id);
                        }
                    }} ><AiFillDelete /></button>
                </div>
            </div>
        
    );
    });

    function toggleTodo(id) {
        const newTodos = todos.map((t) => {
            if (t.id === id) {
                return { ...t, isCompleted: !t.isCompleted };
            }
            return t;
        });
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
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