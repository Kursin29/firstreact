import React, { Component } from 'react';
import '../task/task.css';
import { formatDistanceToNow } from 'date-fns';

export default class Task extends Component {
  state = {
    isCompleted: this.props.isCompleted,
    isEditing: false,
    editedDescription: this.props.description,
  };

  onLabelClick = () => {
    const { onToggleTaskCompletion, id } = this.props;
    onToggleTaskCompletion(id);
    this.setState({ isCompleted: !this.state.isCompleted });
  };

  onEditButtonClick = () => {
    this.setState({ isEditing: true });
  };

  onInputChange = (event) => {
    this.setState({ editedDescription: event.target.value });
  };

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.onEditTask(this.props.id, e.target.value);
      this.setState({ isEditing: false });
    }
  };

  handleBlur = () => {
    const { id, onEditTask } = this.props;
    onEditTask(id, this.state.editedDescription);
    this.setState({ isEditing: false });
  };

  render() {
    const { description, created, id, onDeleteTask } = this.props;
    const { isCompleted, isEditing, editedDescription } = this.state;

    const timeAgo = formatDistanceToNow(created, { addSuffix: true });

    return (
      <li className={isCompleted ? 'completed' : isEditing ? 'editing' : ''}>
        <div className="view">
          <input
            className="toggle done"
            type="checkbox"
            checked={isCompleted}
            onChange={this.onLabelClick}
          />
          <label>
            <span className="description">{description}</span>
            <span className="created">{timeAgo}</span>
          </label>
          <button className="icon icon-edit" onClick={this.onEditButtonClick}></button>
          <button className="icon icon-destroy" onClick={() => onDeleteTask(id)}></button>
        </div>
        {isEditing && (
          <input
            type="text"
            className="edit"
            value={editedDescription}
            onChange={this.onInputChange}
            onKeyPress={this.onKeyPress}
            onBlur={this.handleBlur}
          />
        )}
      </li>
    );
  }
}