import React from 'react'
import TodoItem from "../components/TodoItem"

export default function TodoList({ todos, deleteTodo }) {
    return (
        <div className="card-body">            
            <h3 className="card-title d-flex justify-content-center" id="tasks-title">Todolar</h3>

            {
                todos.todos.map((todo, index) => <TodoItem key={index} todo={todo} deleteTodo={deleteTodo} />)
            }
        </div>
    )
}
