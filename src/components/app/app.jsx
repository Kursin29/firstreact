import React, { Component } from 'react';
import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';
import TasksFilter from '../tasks-filter/tasks-filter';

export default class App extends Component {
  state = {
    todoData: [
      {
        id: 1,
        description: 'Completed task',
        created: 'created 17 seconds ago',
        isCompleted: true,
        isEditing: false,
      },
      {
        id: 2,
        description: 'Editing task',
        created: 'created 5 minutes ago',
        isCompleted: false,
        isEditing: true,
      },
      {
        id: 3,
        description: 'Active task',
        created: 'created 5 minutes ago',
        isCompleted: false,
        isEditing: false,
      },
    ],
  };

  onToggleTaskCompletion = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      ),
    }));
  };

  onTaskAdded = (description) => {
    const { todoData } = this.state;

    const maxId = todoData.length > 0 ? Math.max(...todoData.map((task) => task.id)) : 0;
    const newId = maxId + 1;

    const newTask = {
      id: newId,
      description,
      created: 'just now',
      isCompleted: false,
      isEditing: false,
    };

    this.setState(({ todoData }) => ({
      todoData: [...todoData, newTask],
    }));
  };

  render() {
    const { todoData } = this.state;

    return (
      <div className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm
            onTaskAdded={this.onTaskAdded} />
        </header>
        <section className="main">
          <TaskList
            tasks={todoData}
            onToggleTaskCompletion={this.onToggleTaskCompletion} />
        </section>
        <Footer>
          <TasksFilter />
        </Footer>
      </div>
    );
  }
}
