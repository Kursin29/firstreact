import React, { Component } from 'react';
import TasksFilter from '../tasks-filter/tasks-filter';

import '../footer/footer.css'

export default class Footer extends Component {

  render() {
    const { itemCount } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">{itemCount} items left</span>
        <TasksFilter />
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}