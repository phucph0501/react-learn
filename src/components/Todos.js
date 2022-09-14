import React from 'react';
import TodoItem from './TodoItem';

function Todos(props) {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChange={props.handleChange}
            deleteTodo={props.deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
