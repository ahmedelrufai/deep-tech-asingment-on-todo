import { useEffect, useState } from "react";

import axios from "axios";
import Todos from "./components/todos";
function App() {
  const [updated, setUpdated] = useState(false);
  const [todo, setTodo] = useState({
    description: "",
    complete: false,
  });
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    const getAllTodos = async () => {
      const allTodoRes = await axios.get("http://localhost:5000/");
      setAllTodos(allTodoRes.data);
    };
    getAllTodos();
  }, [todo, updated]);
  const handleChange = (e) => {
    const { value } = e.target;
    setTodo((prev) => ({ ...prev, description: value }));
  };

  const handleAdd = async () => {
    if (todo.description === "") return;
    const todoRes = await axios.post("http://localhost:5000/add", { ...todo });
    if (todoRes.data.description)
      setTodo((prev) => ({ ...prev, description: "" }));
  };

  const handleUpdate = async (id) => {
    const updatedTodo = await axios.post(`http://localhost:5000/update/${id}`);
    console.log(updatedTodo);
    console.log(id);
    setUpdated((prev) => !prev);
  };

  const handleDelete = async (id) => {
    const deletedTodo = await axios.post(`http://localhost:5000/delete/${id}`);
    console.log(deletedTodo);
    setUpdated((prev) => !prev);
  };

  return (
    <div className="App">
      <div className="add__todo">
        <input
          type="text"
          value={todo.description}
          onChange={handleChange}
          placeholder="New Todo"
        />
        <button className="btn__add" onClick={handleAdd}>
          Add
        </button>
      </div>
      <div className="todos">
        <div className="card__heder">
          <h3>List Of Todos</h3>
        </div>
        <Todos
          allTodos={allTodos}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
