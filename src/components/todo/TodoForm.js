import React from 'react'

export const TodoForm = (props) => (
  <form>
    <input type="text"
    onChange={props.handleInputChange} //use props instead of this if referencing outside of current file
    value={props.currentTodo}/>
  </form>
)
