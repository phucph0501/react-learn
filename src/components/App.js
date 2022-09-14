import React from 'react';
import '../style.css';
import Header from './layout/Header';
import Todos from './Todos.js';
import AddTodo from './AddTodo';
import * as uuid from 'uuid';
import axios from 'axios';

class App extends React.Component {
  state = {
    todos: [],
  };
  componentDidMount() {
    const config = {
      params: {
        _limit: 5,
      },
    };
    //tạo GET request để lấy danh sách todos
    axios
      .get('https://jsonplaceholder.typicode.com/todos', config)
      .then((response) => this.setState({ todos: response.data }));
  }
  addTodo = (title) => {
    const newTodo = {
      title: title,
      completed: false,
    };
    axios
      .post('https://jsonplaceholder.typicode.com/todos', newTodo)
      .then((response) => {
        this.setState({ todos: [...this.state.todos, response.data] });
      });
  };

  deleteTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) =>
        this.setState({
          todos: [
            ...this.state.todos.filter((todo) => {
              return todo.id !== id;
            }),
          ],
        })
      );
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
