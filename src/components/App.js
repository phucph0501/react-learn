import React, { useState, useEffect } from 'react';
import '../style.css';
import Header from './layout/Header';
import Todos from './Todos.js';
import AddTodo from './AddTodo';
import * as uuid from 'uuid';
import axios from 'axios';

function App() {
  const [state, setState] = useState({ todos: [] });
  useEffect(() => {
    const config = {
      params: {
        _limit: 5,
      },
    };
    // tạo GET request để lấy danh sách todos
    axios
      .get('https://jsonplaceholder.typicode.com/todos', config)
      .then((response) => setState({ todos: response.data }));
  }, []);
  const handleCheckboxChange = (id) => {
    setState({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  const addTodo = (title) => {
    const newTodo = {
      title: title,
      completed: false,
    };
    axios
      .post('https://jsonplaceholder.typicode.com/todos', newTodo)
      .then((response) => {
        setState({ todos: [...state.todos, response.data] });
      });
  };
  const deleteTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) =>
        setState({
          todos: [
            ...state.todos.filter((todo) => {
              return todo.id !== id;
            }),
          ],
        })
      );
  };
  return (
    <div className="container">
      <Header />
      <AddTodo addTodo={addTodo} />
      <Todos
        todos={state.todos}
        handleChange={handleCheckboxChange}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
