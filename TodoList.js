import React from 'react'
import {TodoItem} from './TodoItem'

export const TodoList = (props) => {ß
  return (

      <div className="Todo-List">
        <ul>
          {props.todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
        </ul>
      </div>

  )
}
