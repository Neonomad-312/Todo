import React, { Component } from 'react'

export default class TodoAdd extends Component {
    state = {
        inputText: "",
    }
    setInputText = (event) => {
        this.setState ({ inputText: event.target.value })
    }
    todoAdd = () => {
        if(this.state.inputText.trim() !== "") {
            this.props.onAdd(this.state.inputText);
            this.setState({ inputText: "" });
        }
        
    }
  render() {
    return (
      <div className='d-flex'>
        <input 
            type="text" 
            className='form-control' 
            value={this.state.inputText}
            onChange={this.setInputText}
            />
        <button className='btn btn-info' onClick={this.todoAdd}>Add</button>
      </div>
    )
  }
}
