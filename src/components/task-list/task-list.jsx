import React, { Component } from 'react';
import Task from '../task/task';

import '../task-list/task-list.css';

export default class TaskList extends Component {
  render() {
    const { tasks, onToggleTaskCompletion, onDeleteTask, onEditTask } = this.props;

    const element = tasks.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <Task
          key={item.id}
          {...itemProps}
          onToggleTaskCompletion={() => onToggleTaskCompletion(id)}
          onDeleteTask={() => onDeleteTask(id)}
          onEditTask={onEditTask}
        />
      );
    });

    return <ul className="todo-list">{element}</ul>;
  }
}