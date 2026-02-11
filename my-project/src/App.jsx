import React from 'react'
// import { IconName } from "react-icons/vsc";
// import { VscCheck } from "react-icons/vsc";

// import { useState } from 'react'

import './App.css'
import TodoList from './TodoList.jsx'
import Button from './button.jsx'
import Footer from './Footer.jsx'

function App() {


  return (
    <div className="min-h-screen  flex items-center justify-center p-4">


      <div className="bg-white w-full max-w-sm rounded-2xl shadow-lg p-6 flex flex-col gap-4">

        <TodoList />

        <div className="p-2">
          <Button />
        </div>
        <div className="p-2">
          <Button />
        </div>
        <div className="p-2">
          <Button />
        </div>
        <div className="p-2">
          <Footer />
        </div>

      </div>
    </div>
  )
}

export default App
