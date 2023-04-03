import React, { Component } from 'react';
import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';
import { v4 as uuidv4 } from 'uuid';

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
    filter: 'All'
  };


  setFilter = (filter) => {
    this.setState({ filter });
  };

  deleteCompletedTasks = () => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter((task) => !task.isCompleted),
      };
    });
  };

  onEditTask = (id, editedDescription) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((task) => task.id === id);
      const oldTask = todoData[index];
      const newTask = { ...oldTask, description: editedDescription };

      return {
        todoData: [
          ...todoData.slice(0, index),
          newTask,
          ...todoData.slice(index + 1),
        ],
      };
    });
  };

  onDeleteTask = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((task) => task.id !== id),
    }));
  };

  onToggleTaskCompletion = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      ),
    }));
  };

  onTaskAdded = (description) => {

    const newTask = {
      id: uuidv4(), // Используем uuid для генерации уникального идентификатора
      description: description,
      isCompleted: false,
      created: new Date().toLocaleString(),
    };

    this.setState(({ todoData }) => ({
      todoData: [...todoData, newTask],
    }));
  };

  render() {
    const { todoData, filter } = this.state;

    let filteredTasks = todoData;
    if (filter === 'active') {
      filteredTasks = todoData.filter((task) => !task.isCompleted);
    } else if (filter === 'completed') {
      filteredTasks = todoData.filter((task) => task.isCompleted);
    }


    return (
      <div className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm
            onTaskAdded={this.onTaskAdded} />
        </header>
        <section className="main">
          <TaskList
            tasks={filteredTasks}
            onToggleTaskCompletion={this.onToggleTaskCompletion}
            onDeleteTask={this.onDeleteTask}
            onEditTask={this.onEditTask} />
        </section>
        <Footer itemCount={todoData.filter(task => !task.isCompleted).length}
          onFilterChange={this.setFilter}
          activeFilter={filter}
          deleteCompletedTasks={this.deleteCompletedTasks}
        />
      </div>
    );
  }
}
