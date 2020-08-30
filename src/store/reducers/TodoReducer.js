import { FETCH_TODOS_FULFILLED, FETCH_TODOS_PENDING, FETCH_TODOS_REJECTED } from "../actions/TodoActions"
import { ADD_TODO_FULFILLED, ADD_TODO_PENDING, ADD_TODO_REJECTED } from "../actions/TodoActions"
import { DELETE_TODO_FULFILLED, DELETE_TODO_PENDING, DELETE_TODO_REJECTED } from "../actions/TodoActions"

const initialState = {
    fetching: false,
    todos: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS_PENDING:
            return {
                ...state,
                fetching: true

            };
        case FETCH_TODOS_FULFILLED:
            return {
                ...state,
                todos: action.payload,
                fetching: false
            };
        case FETCH_TODOS_REJECTED:
            return {
                ...state,
                todos: action.payload,
                fetching: true
            };

        case ADD_TODO_PENDING:
            return {
                ...state,
                fetching: true

            };
        case ADD_TODO_FULFILLED:
            console.log("REjected",state)
            return {
                ...state,
                todos: [...state.todos, action.payload],
                fetching: false
            };
        case ADD_TODO_REJECTED:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                fetching: true
            };

        case DELETE_TODO_PENDING:            
            return {
                ...state,
                fetching: true

            };
        case DELETE_TODO_FULFILLED:          
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== action.payload),
                fetching: false
            };
        case DELETE_TODO_REJECTED:        
            return {
                ...state,
                // todos: [...state.todos, action.payload],
                fetching: true
            };

        default:
            return state;
    }


};
