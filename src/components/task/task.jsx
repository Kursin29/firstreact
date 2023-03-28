import React, { Component } from 'react';

import '../task/task.css';

export default class Task extends Component {
  render() {
    const { description, created, isCompleted, isEditing } = this.props;

    return (
      <li className={isCompleted ? 'completed' : isEditing ? 'editing' : ''}>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label onClick={() => { console.log('нажал') }}>
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