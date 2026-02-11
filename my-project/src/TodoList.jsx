import React from 'react'

const TodoList = () => {
    return (

        <div className="">


            <div className="">

                <h1 className="text-5xl font-bold text-center mb-8">مهامي</h1>

                <div className="flex justify-center gap-2 mb-8 border-b pb-5 ">
                    <button className="px-5 py-1 rounded border text-sm border-gray-100 bg-white shadow-sm cursor-pointer">غير منجز</button>
                    <button className="px-5 py-1 rounded border text-sm border-gray-100 bg-white shadow-sm cursor-pointer">منجز</button>
                    <button className="px-5 py-1 rounded border text-sm border-gray-100 bg-white shadow-sm cursor-pointer">الكل</button>
                </div>



            </div>

        </div>
    )
}

export default TodoList
