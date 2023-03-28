import React, { Component } from 'react';
import Task from '../task/task';

import '../task-list/task-list.css'

export default class TaskList extends Component {

  render() {
    const { tasks } = this.props;

    const element = tasks.map((item) => {
      const { id, ...itemProps } = this.props

      return (
        <li key={item.id}>
          <Task  {...itemProps} />
        </li>)
    })


    return (
      <ul className="todo-list">
        {element}
      </ul>
    );
  }
}