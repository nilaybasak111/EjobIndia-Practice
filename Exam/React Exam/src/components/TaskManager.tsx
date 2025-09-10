import { Component } from "react";
import type { ChangeEvent } from "react";

interface Task {
  id: number;
  name: string;
  desc: string;
  date: string;
}

interface State {
  taskName: string;
  taskDesc: string;
  taskDate: string;
  tasks: Task[];
}

export default class TaskManager extends Component<{}, State> {
  state: State = {
    taskName: "",
    taskDesc: "",
    taskDate: "",
    tasks: [],
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleAddTask = () => {
    const { taskName, taskDesc, taskDate, tasks } = this.state;

    if (!taskName || !taskDesc || !taskDate) return;

    const newTask: Task = {
      id: tasks.length + 1,
      name: taskName,
      desc: taskDesc,
      date: taskDate,
    };

    this.setState({
      tasks: [...tasks, newTask],
      taskName: "",
      taskDesc: "",
      taskDate: "",
    });
  };

  handleDeleteTask = (id: number) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });
  };

  render() {
    const { taskName, taskDesc, taskDate, tasks } = this.state;

    return (
      <>
        <h3>TASK MANAGEMENT COMPONENT :</h3>

        <div>
          <label>NEW TASK: </label>
          <input
            type="text"
            name="taskName"
            value={taskName}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>TASK DESC: </label>
          <input
            type="text"
            name="taskDesc"
            value={taskDesc}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>TASK DATE: </label>
          <input
            type="date"
            name="taskDate"
            value={taskDate}
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.handleAddTask}>ADD</button>

        <table
          border={1}
          cellPadding={3}
          style={{ borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>Sl.no</th>
              <th>Task name</th>
              <th>Task desc</th>
              <th>Task date</th>
              <th>Delete button</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task.id}>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td>{task.desc}</td>
                <td>{task.date}</td>
                <td>
                  <button onClick={() => this.handleDeleteTask(task.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
