import React, { Component } from 'react';

import '../tasks-filter/tasks-filter.css'

export default class TasksFilter extends Component {
  render() {
    const { onFilterChange, activeFilter } = this.props;

    return (
      <ul className="filters">
        <li>
          <button
            className={activeFilter === 'all' ? 'selected' : ''}
            onClick={() => onFilterChange('all')}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={activeFilter === 'active' ? 'selected' : ''}
            onClick={() => onFilterChange('active')}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={activeFilter === 'completed' ? 'selected' : ''}
            onClick={() => onFilterChange('completed')}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}