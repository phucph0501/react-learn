import React from 'react';
import '../style.css';
import Header from './layout/Header';
import Todos from './Todos.js';
import AddTodo from './AddTodo';

class App extends React.Component {
  addTodo = (title) => {
    const newTodo = {
      id = this.state.todos.length + 1,
      title: title, 
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
      });
  };
  deleteTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };
  handleCheckboxChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  state = {
    todos: [
      {
        id: 1,
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: 3,
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          handleChange={this.handleCheckboxChange}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
