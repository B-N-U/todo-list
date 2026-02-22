import React from 'react'
import { useContext } from 'react'; 
import { TodoContext } from './TodoContext';

const TodoList = () => {
    const { filterType, setFilterType } = useContext(TodoContext); 
    return (

        <div className="">


            <div className="">

                <h1 className="text-5xl font-bold text-center mb-8">مهامي</h1>

                <div className="flex justify-center gap-2 mb-8 border-b pb-5 ">
                    <button className="px-5 py-1 rounded border text-sm border-gray-100 bg-white shadow-sm cursor-pointer" onClick={() => setFilterType("non-completed")} >غير منجز</button>
                    <button className="px-5 py-1 rounded border text-sm border-gray-100 bg-white shadow-sm cursor-pointer" onClick={() => setFilterType("completed")} >منجز</button>
                    <button className="px-5 py-1 rounded border text-sm border-gray-100 bg-white shadow-sm cursor-pointer" onClick={() => setFilterType("all")} >الكل</button>
                </div>



            </div>

        </div>
    )
}

export default TodoList
