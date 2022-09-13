import React from 'react';

class Todos extends React.Components {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todos;
