import React, { Component } from 'react'

export default class TodoInput extends Component {
    state = {
        Todo: "",
        block: "d-none"
    };

    todoEkle = (e) => {
        e.preventDefault()
        let newData = {
            id: new Date().getMilliseconds(),
            todo: this.state.Todo
        }
        if (this.state.Todo !== "") {
            this.props.addTodo(newData)
            this.showAlert()
            this.setState({ Todo: "" })
        }
    }
    showAlert = (type, message) => {

        this.setState({ block: "d-block" })
        let newthis = this;

        setTimeout(function () {
            newthis.setState({ block: "d-none" })
        }, 1000);

    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        const { block } = this.state
        return (
            <>
                <div className="card-header">Todo List2</div>
                <div className="card-body">
                    <form id="todo-form" name="form">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input onChange={this.onChange} value={this.state.Todo}
                                    name="Todo" className="form-control"
                                    type="text" id="todo" placeholder="Bir Todo Girin" />
                            </div>
                        </div>
                        <button onClick={this.todoEkle} className="btn btn-danger mb-2">Todo Ekleyin</button>
                        <div className={`alert alert-success ${block}`}>"NewTodo Başarılı eklendi"</div>
                    </form>
                    <hr />
                </div>

            </>
        )
    }
}
