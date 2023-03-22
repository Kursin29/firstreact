import React from 'react';

import '../task/task.css';

const Task = ({ description, created, isCompleted, isEditing }) => {
  return (
    <li className={isCompleted ? 'completed' : isEditing ? 'editing' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" />
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
};

export default Task;