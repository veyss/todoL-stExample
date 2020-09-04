import React, { Component } from 'react'
import TodoList from "./TodoList"

export default class TodoForm extends Component {
    state = {
        Todo: "",
        block: "d-none",
        searchTodo: "",
        message: "",
        type: ""
    };

    onAddTodo = (e) => {
        e.preventDefault()
        let newData = {
            id: new Date().getMilliseconds(),
            todo: this.state.Todo
        }
        if (this.state.Todo !== "") {
            this.props.addTodo(newData)
            this.showAlert("success", "Todo başarılı olarak eklendi")
            this.setState({ Todo: "" })
        }
        else this.showAlert("warning", "Boş Todo  kaydedilemez")
    }
    showAlert = (type, message) => {
        this.setState({ message })
        this.setState({ type })
        this.setState({ block: "d-block" })

        let newthis = this;
        setTimeout(function () {
            newthis.setState({ block: "d-none" })
        }, 1500);

    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });       
    }
    render() {
        const { block, Todo, searchTodo, message, type } = this.state
        const { deleteTodo, todos, editTodo } = this.props
        return (
            <div className="card row">
                <div className="card-header">Todo List</div>
                {/* İnput ekleme  */}
                <div className="card-body">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input onChange={this.onChange} value={Todo}
                                name="Todo" className="form-control"
                                type="text" id="todo" placeholder="Bir Todo Girin" />
                        </div>
                    </div>
                    <button onClick={this.onAddTodo} className="btn btn-danger mb-2">Todo Ekleyin</button>
                    <div className={`alert alert-${type} ${block}`}>{message}</div>
                    <hr />
                </div>
                {/* İnput Search  */}
                <div className="card-body">
                    <h5 className="card-title">Todolar</h5>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input className="form-control" type="text"
                                onChange={this.onChange} value={searchTodo}
                                name="searchTodo" placeholder="Bir Todo Arayın" />
                        </div>
                    </div>
                    <hr />
                    <TodoList deleteTodo={deleteTodo} todos={todos.todos} searchTodo={searchTodo} editTodo={editTodo} />
                </div>
            </div>

        )
    }
}
