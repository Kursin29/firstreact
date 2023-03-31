import React, { Component } from 'react';

import '../task/task.css';

export default class Task extends Component {
  render() {
    const { description, created, isCompleted, isEditing, onToggleTaskCompletion } = this.props;

    return (
      <li className={isCompleted ? 'completed' : isEditing ? 'editing' : ''}>
        <div className="view">
          <input
            className="toggle done"
            type="checkbox"
            checked={isCompleted}
            onChange={onToggleTaskCompletion}
          />
          <label>
            <span className="description">{description}</span>
            <span className="created">{created}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
        {isEditing && <input type="text" className="edit" value={description} />}
      </li>
    );
  }
}