import React from 'react';
import '../style.css';
import Header from './layout/Header';
import Todos from './Todos.js';

class App extends React.Component {
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
      <div>
        <Header />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
