import React from 'react'
import { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [filterType, setFilterType] = useState("all");

    return (
        <TodoContext.Provider value={{ todos, setTodos, filterType, setFilterType }}>
            {children}
        </TodoContext.Provider>
    );
};
