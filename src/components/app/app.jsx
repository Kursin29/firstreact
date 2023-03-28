import React, { Component } from 'react';
import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';
import Task from '../task/task';
import TasksFilter from '../tasks-filter/tasks-filter';

export default class App extends Component {

  todoData = [
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

  render() {
    const { todoData } = this.props;

    return (
      <div className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList tasks={todoData} />


        </section>
        <Footer>
          <TasksFilter />
        </Footer>
      </div>
    );
  }
}
