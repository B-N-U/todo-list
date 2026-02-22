import React from 'react'
// import { IconName } from "react-icons/vsc";
// import { VscCheck } from "react-icons/vsc";

// import { useState } from 'react'

import './App.css'
import TodoList from './TodoList.jsx'
import Button from './button.jsx'
import Footer from './Footer.jsx'
import { useState } from 'react';
import { TodoContext } from './TodoContext';
import { v4 as uuidv4 } from 'uuid';
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


function App() {



    const [todos, setTodos] = useState(iniTodos);
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">

      <TodoContext.Provider value={{ todos, setTodos }}>
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-lg p-6 flex flex-col gap-4">

        <TodoList />
     
        <div className="p-2">
          <Button />
          </div>
      
   
      </div>
      </TodoContext.Provider >
    </div>
     
  )
}

export default App
