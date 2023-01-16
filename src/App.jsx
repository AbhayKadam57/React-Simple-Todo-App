import { useState } from "react";
import { Check, DeleteForever, Edit } from "@mui/icons-material";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [updating, setUpdating] = useState(-1);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = (task) => {
    if (updating !== -1) {
      task !== "" && (list[updating] = task);
    } else {
      task !== "" && setList([...list, task]);
    }

    setTask("");
  };

  const handleComplete = (index) => {
    setCompleted([...completed, index]);
  };

  const handleDelete = (id) => {
    setList(list.filter((item, index) => index !== id));
  };

  const handleEdit = (EditTask, index) => {
    setTask(EditTask);
    setUpdating(index);
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div className="input">
        <input
          type="text"
          value={task}
          placeholder="Enter Task here..."
          onChange={(e) => handleChange(e)}
        />
        <button onClick={() => handleAdd(task)}>Add task</button>
      </div>
      <div className="list">
        <ul>
          {list.map((task, index) => (
            <li
              key={index}
              className={completed.includes(index) ? "completed" : ""}
            >
              <p>{task}</p>
              <div className="icons">
                <Edit
                  className="icon"
                  onClick={() => handleEdit(task, index)}
                />
                <Check className="icon" onClick={() => handleComplete(index)} />
                <DeleteForever
                  className="icon"
                  onClick={() => handleDelete(index)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
