import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Task from './components/task/task'
import TaskList from './components/task-list/task-list';
import NewTaskForm from './components/new-task-form/new-task-form';
import Footer from './components/footer/footer';
import TasksFilter from './components/tasks-filter/tasks-filter';

const App = () => {
    return (
        <div className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <NewTaskForm />
            </header>
            <section className="main">
                <TaskList>
                    <Task />
                </TaskList>
            </section>
            <Footer>
                <TasksFilter />
            </Footer>
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
