import React from 'react'

const Appheader = (props) => {
  return (
    <div className='d-flex align-items-center justify-content-between'>
        <h2>Todo List</h2>
        <h2>{props.active} more to do {props.done} done</h2>
    </div>
  )
}

export default Appheader