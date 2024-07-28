import React from 'react'
import TodoListItem from '../todoListItem/TodoListItem'

const TodoList = ({todos, onDel, impTodo, doneTodo}) => {
    if(todos.length === 0) {
        return <h2>No data</h2>
    }
    return (
        <ul className='list-group'>
            {todos.map(el => (
                <li className='list-group-item' key={el.id}>
                    <TodoListItem
                        // title={el.title}
                        // id={el.id} 
                        // done={el.done} 
                        // important={el.important} 
                        {...el}
                        onDel={onDel}
                        impTodo={impTodo}
                        doneTodo={doneTodo} />
                </li>
            ))}
        </ul>
    )
}

export default TodoList