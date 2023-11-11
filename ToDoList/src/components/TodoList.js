import React from 'react'

const TodoList = (props) => {
  return (
    <div>
      <li className='list-item'>{props.item}</li>
      <span className='icons i'>
      <i className="fa-sharp fa-solid fa-trash icon-delete" 
      onClick={e => {
        props.deleteItem(props.index)
      }}></i>
      </span>
    </div>
  )
}

export default TodoList
