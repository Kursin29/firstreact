import React, { Component } from 'react';
import Task from '../task/task';

import '../task-list/task-list.css';

export default class TaskList extends Component {
  render() {
    const { tasks, onToggleTaskCompletion } = this.props;

    const element = tasks.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <Task
          key={item.id}
          {...itemProps}
          onToggleTaskCompletion={() => onToggleTaskCompletion(id)}
        />
      );
    });

    return <ul className="todo-list">{element}</ul>;
  }
}