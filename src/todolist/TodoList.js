import React from 'react'
import TodoItem from "../components/TodoItem"

export default function TodoList({ todos, deleteTodo, searchTodo, editTodo }) {
    return (
        <div className="card row mb-5" >
            <div className="card-body">
                <h3 className="card-title d-flex justify-content-center" id="tasks-title">Todolar</h3>
                {
                   todos.length>0 && todos.map((todo, index) => (
                      (todo.todo || "").toLowerCase().indexOf((searchTodo || "").toLowerCase()) !== -1
                            ? <TodoItem key={index} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
                            : ""
                    ))
                }
            </div>
        </div>
    )
}
