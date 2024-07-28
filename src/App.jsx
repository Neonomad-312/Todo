import React, { Component } from 'react'
import Appheader from './components/appHeader/Appheader'
import TodoSearch from './components/todoSearch/TodoSearch'
import TodoList from './components/todoList/TodoList'
import TodoAdd from './components/todoAdd/TodoAdd'
import './App.css'

export default class App extends Component {
  state = {
    data: [
      { title: 'Learn React', done: false, important: false, id: 1 },
      { title: 'Learn JS', done: false, important: false, id: 2 },
      { title: 'Learn HTML', done: false, important: false, id: 3 },
    ],
    status: 'all',
    searchText: ''
  };

  setSearch=(e)=>{
    this.setState({searchText: e.target.value})
  }

  searchTodos=(array, text)=>{
    if(text.length === 0) {
      return array
    }
    return array.filter((el)=>el.title.toLowerCase().includes(text.toLowerCase()))
  }

  filter=(array, status) => {
    switch(status) {
      case 'all':
        return array
      case 'done': 
        return array.filter(el=>el.done)
      case 'active':
        return array.filter(el=>!el.done)
      default:
        return
    }
  };
  setStatus=(statusName)=>{
    this.setState({status: statusName})
  }

  delTodo = (id) => {
    const newData = this.state.data.filter((el) => el.id!==id)
    this.setState({data: newData})
    
  };

  impTodo = (id) => {
    const index = this.state.data.findIndex((el) => el.id===id)
    const before = this.state.data.slice(0, index);
    const after = this.state.data.slice(index + 1)
    const todo = this.state.data[index];
    const updTodo = {...todo, important: !todo.important}
    this.setState({data:[...before, updTodo, ...after]})
  }

  doneTodo=(id) => {
    const index = this.state.data.findIndex((el) => el.id===id)
    const before = this.state.data.slice(0, index);
    const after = this.state.data.slice(index + 1)
    const todo = this.state.data[index];
    const updTodo = {...todo, done: !todo.done}
    this.setState({data:[...before, updTodo, ...after]})
  }

  addTodo = (text) => {
    
    const ids = this.state.data.map((el) => el.id)
    
    const newTodo={
      title: text, 
      done: false, 
      important: false, 
      id: ids.at(-1)+1 || 1,
    }
    
    this.setState({data:[...this.state.data, newTodo]})

  }
  render() {
    const done = this.state.data.filter((el) => el.done).length;
    const active = this.state.data.length - done;
    const todoData = this.searchTodos(
      this.filter(this.state.data, this.state.status),
      this.state.searchText
    );
    return (
      <div className='container'>
        <Appheader done={done} active={active} />
        <TodoSearch 
          onSetStatus = {this.setStatus}
          searchText = {this.state.searchText} 
          onSetSearch = {this.setSearch} />
       
        <TodoList 
          todos={todoData} 
          onDel={this.delTodo} 
          impTodo={this.impTodo}
          doneTodo={this.doneTodo}
        />
        <TodoAdd onAdd={this.addTodo}/>
      </div>
    )
  }
}
