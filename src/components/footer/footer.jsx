import React, { Component } from 'react';
import TasksFilter from '../tasks-filter/tasks-filter';

import '../footer/footer.css'

export default class Footer extends Component {

  render() {
    const { itemCount, onFilterChange, activeFilter, deleteCompletedTasks } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">{itemCount} items left</span>
        <TasksFilter
          onFilterChange={onFilterChange}
          activeFilter={activeFilter}
        />
        <button className="clear-completed" onClick={deleteCompletedTasks}>
          Clear completed
        </button>
      </footer>
    );
  }
}