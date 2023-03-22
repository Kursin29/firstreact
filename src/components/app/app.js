import React from 'react';
import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';

import '../app/app.js'

const App = () => {
    const tasks = [
      {
        id: 1,
        description: 'Completed task',
        created: 'created 17 seconds ago',
        isCompleted: true,
        isEditing: false
      },
      {
        id: 2,
        description: 'Editing task',
        created: 'created 5 minutes ago',
        isCompleted: false,
        isEditing: true
      },
      {
        id: 3,
        description: 'Active task',
        created: 'created 5 minutes ago',
        isCompleted: false,
        isEditing: false
      }
    ];
  
    return (
      <section className="todoapp">
        <NewTaskForm  />
        <section className="main">
          <TaskList tasks={tasks} />
          <Footer  />
        </section>
      </section>
    );
  };
  
  export default App;