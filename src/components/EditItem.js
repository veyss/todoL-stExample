import React, { Component } from 'react'
let newid = -1

export default class EditItem extends Component {
    state = {
        newTodo: "",
        block: "d-none", 
        message: "",
        type: ""
    }


    iconOnclick = () => {
        const { todo } = this.props   
        newid = todo.id         

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
    onChangeTodo = (e) => {

        this.setState({
            newTodo: e.target.value
        });

        //  this.setState({newTodo:e.target.value},()=>console.log(this.state))

    }
    updateTodo = (e) => {
        e.preventDefault()
        if (this.state.newTodo !== "") {
            this.props.editTodo({ id: newid, todo: this.state.newTodo })
            this.showAlert("success", "Todo başarılı olarak eklendi")
            this.setState({ newTodo: "" })
        }
        else this.showAlert("warning", "Boş Todo  kaydedilemez")


        // this.props.editTodo({ id: newid, todo: this.state.newTodo })
        // this.setState({ block: "d-block" })

        // let newthis = this
        // setTimeout(function () {
        //     newthis.setState({ block: "d-none" })
        // }, 1500);
        // this.setState({ newTodo: "" })
    }
    render() {

        const { newTodo, block,type,message } = this.state
        return (
            <>
                <i type="button" onClick={this.iconOnclick} className="fas fa-edit mr-3" style={{ color: "#b8860b" }} data-toggle="modal" data-target="#exampleModal" ></i>
                <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Todo Güncelleme-</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>

                            </div>
                            <div className="container" >
                                <div className="form-group">
                                    <label className="col-form-label">Yeni Todo:</label>
                                    <input
                                        type="text" value={newTodo} onChange={this.onChangeTodo} 
                                        name="newTodo" className="form-control" />
                                </div>
                                <div className={`alert alert-${type} ${block}`}>{message}</div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" onClick={this.updateTodo} className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
