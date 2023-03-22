import React from 'react';
import Task from '../task/task';
import App from '../app/app';

import '../task-list/task-list.css'

const TaskList = ({ tasks }) => {
  return (
    <ul className="todo-list">
      {tasks && tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </ul>
  );
};

export default TaskList;