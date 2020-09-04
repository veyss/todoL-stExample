import React  from 'react'
import EditItem from "./EditItem"

export default function TodoItem({ todo, deleteTodo,editTodo }) {
    const deleteItem = () => {
        deleteTodo(todo.id)       
    }      


    return (       
            <li className="list-group-item d-flex justify-content-between align-items-center">
                {todo.todo}
                <div>
                    <EditItem  editTodo={editTodo} todo={todo}/>
                    <i className="fas fa-trash-alt" style={{ color: "#8b7e66" }} onClick={deleteItem}></i>
                </div>
            </li>
  
    )
}

