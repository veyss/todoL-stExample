import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux';
import TodoForm from "./todolist/TodoForm"
import Footer from "./components/Footer"

import { addTodo, fetchTodos, deleteTodo , editTodo } from "./store/actions/TodoActions"

class App extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }
  render() {
    const {addTodo,todos,deleteTodo,editTodo}=this.props
    return (
      <div className="container" style={{ marginTop: "20px" }}>     
          
          <TodoForm addTodo={addTodo}   deleteTodo={deleteTodo} todos={todos} editTodo={editTodo}/>          
          <Footer todos={todos.todos}/>
      </div>
    );
  }
}
const mapStateToProps = ({ todos }) => {
  return {
    todos
  };
};

const mapDispatchToProps = {
  addTodo, fetchTodos, deleteTodo,editTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
