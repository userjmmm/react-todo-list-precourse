import React from "react";

const TodoList = ({ todos, toggleDone }) => {
    return (
        <ul>
            {todos.filter(todo => todo !== null).map((todo, index) => (
                <li key={index} onClick={() => toggleDone(todo)}>
                    <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
                        {todo.text}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;