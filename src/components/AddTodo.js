import React from 'react';

class AddTodo extends React.Component {
  onInputChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  addTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: '',
    });
  };
  state = {
    title: '',
  };
  render() {
    return (
      <form className="form-container" onSubmit={this.addTodo}>
        <input
          type="text"
          placeholder="Add Todo..."
          className="input-text"
          value={this.state.title}
          onChange={this.onInputChange}
        ></input>
        <input type="submit" value="Submit" className="input-submit"></input>
      </form>
    );
  }
}
export default AddTodo;
