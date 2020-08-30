import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux';
import TodoInput from "./todolist/TodoInput"
import TodoList from "./todolist/TodoList"
import { addTodo, fetchTodos, deleteTodo } from "./store/actions/TodoActions"

class App extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }
  render() {
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="card row">
          <TodoInput addTodo={this.props.addTodo}/>
          <TodoList  deleteTodo={this.props.deleteTodo} todos={this.props.todos}  />
        </div>
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
  addTodo, fetchTodos, deleteTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
