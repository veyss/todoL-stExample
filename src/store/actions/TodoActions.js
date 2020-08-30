import axios from "axios"
import { API_BASE } from "../../config/env"
export const FETCH_TODOS_FULFILLED = "FETCH_TODOS_FULFILLED";
export const FETCH_TODOS_REJECTED = "FETCH_TODOS_REJECTED";
export const FETCH_TODOS_PENDING = "FETCH_TODOS_PENDING";

export const ADD_TODO_FULFILLED = "ADD_TODO_FULFILLED"
export const ADD_TODO_REJECTED = "ADD_TODO_REJECTED"
export const ADD_TODO_PENDING = "ADD_TODO_PENDING"

export const DELETE_TODO_FULFILLED = "DELETE_TODO_FULFILLED"
export const DELETE_TODO_REJECTED = "DELETE_TODO_REJECTED"
export const DELETE_TODO_PENDING = "DELETE_TODO_PENDING"



export function addTodo(newTodo) {
    return dispatch => {
        dispatch({
            type: "ADD_TODO",
            payload: axios.post(`${API_BASE}/todos`, newTodo).then(() => newTodo)
        })
    }
}

export function fetchTodos() {
    return dispatch => {
        dispatch({
            type: "FETCH_TODOS",
            payload: axios.get(`${API_BASE}/todos`)
                .then(result =>
                    result.data)
        })
    }
}


export function deleteTodo(id) {     
    return dispatch => {     
        dispatch({
            type: "DELETE_TODO",
            payload: axios.delete(`${API_BASE}/todos/${id}`).then(() =>
                id)           
        })
    }
}


