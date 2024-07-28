import React, { Component } from 'react'
import './TodoListItem.css'

export default class TodoListItem extends Component {
  render() {
    const {title, id, onDel, impTodo, important, doneTodo, done}=this.props;
    let clazz = "";
    if(important){
        clazz+='imp'
    }
    if(done) {
        clazz+='done'
    }
    return (
      <span className='d-flex align-items-center'>
        <span onClick={()=>doneTodo(id)} className={`flex-grow-1 ${clazz}`}>{title}</span>
        <button className='btn btn-outline-danger' onClick = {() => onDel(id)}>
            <i className="bi bi-trash"></i>
        </button>
        <button className='btn btn-outline-success'>
            <i className="bi bi-pen"></i>
        </button>
        <button className='btn btn-outline-warning'>
            <i className="bi bi-exclamation-circle" onClick = {() => impTodo(id) }></i>
        </button>
      </span>
    )
  }
}
