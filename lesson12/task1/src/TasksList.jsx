import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { createTask, fetchTasks, updateTask, deleteTask } from './tasksGateway';

class TasksList extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasksList();
  }

  fetchTasksList = () => {
    fetchTasks().then(tasksList => {
      this.setState({
        tasks: tasksList,
      });
    });
  };

  onCreate = text => {
    const newTask = {
      text,
      done: false,
    };

    createTask(newTask).then(() => {
      this.fetchTasksList();
    });
  };

  handleTaskStatusChange = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTasks = {
      text,
      done: !done,
    };
    updateTask(updatedTasks, id).then(() => this.fetchTasksList());
  };

  handleTaskDelete = id => {
    deleteTask(id).then(() => this.fetchTasksList());
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <>
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default TasksList;
