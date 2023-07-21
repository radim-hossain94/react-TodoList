// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import '../src/App.css';

const TodoList = () => {
    // State to store the tasks
    const [tasks, setTasks] = useState([]);
    // State to store the current input value
    const [taskInput, setTaskInput] = useState("");

    // Function to handle input change
    const handleInputChange = (event) => {
        setTaskInput(event.target.value);
    };

    // Function to handle task addition
    const handleAddTask = (event) => {
        event.preventDefault();
        if (taskInput.trim() !== "") {
            setTasks([
                ...tasks,
                taskInput
            ]);
            setTaskInput("");
        }
    };

    // Function to handle task deletion
    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
      <div className="container">
        <h1>Todo List App</h1>
        <form onSubmit={handleAddTask}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Task Name
            </span>
            <input
              type="text"
              className="form-control"
              value={taskInput}
              onChange={handleInputChange}
              placeholder="Enter task"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </form>
        <br />
        <div className="table-responsive">
          <table className="table table-striped table-hover table-sm">
            <thead className="">
              <th>#</th>
              <th>Task Name</th>
              <th>Action</th>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr>
                  <td key={index}>{index+1}</td>
                  <td key={index}>{task}</td>
                  <td className="table-data">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDeleteTask(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default TodoList;