import React from 'react'

const Footer = () => {
    return (
        <div className="flex gap-2 mt-6 w-full px-4 pb-4">
            <button className="bg-[#8b1a36] text-white px-8 py-2 rounded-md font-bold hover:bg-red-900 transition-colors shadow-sm cursor-pointer">
                إضافة
            </button>
            <input
                type="text"
                placeholder="عنوان المهمة"
                className=" border border-gray-200 rounded-md p-2 text-right outline-none focus:border-red-800"
            />
        </div>
    )
}

export default Footer
