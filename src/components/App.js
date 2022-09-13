import React from 'react';
import '../style.css';
import Header from './layout/Header';
import Todos from './Todos.js';

class App extends React.Component {
  handleCheckboxChange = () => {
    alert('test');
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
        <Todos
          todos={this.state.todos}
          handleChange={this.handleCheckboxChange}
        />
      </div>
    );
  }
}

export default App;
