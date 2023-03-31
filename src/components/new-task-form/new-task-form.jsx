import React, { Component } from 'react';
import '../new-task-form/new-task-form.css';

export default class NewTaskForm extends Component {
  state = {
    inputValue: '',
  };

  onInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { inputValue } = this.state;
    const { onTaskAdded } = this.props;

    if (inputValue.trim()) {
      onTaskAdded(inputValue);
      this.setState({ inputValue: '' });
    }
  };

  render() {
    const { inputValue } = this.state;

    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={inputValue}
            onChange={this.onInputChange}
          />
        </form>
      </header>
    );
  }
}
