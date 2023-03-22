import React, { useState } from 'react';


import '../new-task-form/new-task-form.css'

const NewTaskForm = () => {

  return (
    <header className="header">
      <h1>todos</h1>
      <form >
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </header>
  );
};

export default NewTaskForm;