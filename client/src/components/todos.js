import React, { useEffect, useState } from "react";

function Todos({ allTodos, handleDelete, handleUpdate }) {
  const [todoToDisplay, setTodoToDisplay] = useState([]);
  useEffect(() => {
    setTodoToDisplay(allTodos);
  }, [allTodos]);

  const deleteTodo = (e) => {
    let id = e.target.id;

    handleDelete(id);
  };
  const updateTodo = (e) => {
    let id = e.target.id;
    console.log(id);
    handleUpdate(id);
  };

  return (
    <div className="all__todos">
      {todoToDisplay?.length !== 0
        ? todoToDisplay.map((todo) => {
            return (
              <div className="todo__item" key={todo._id}>
                <span>{todo.description}</span>
                {todo.completed ? (
                  <span className="complete">Complete</span>
                ) : (
                  <span className="incomplete">In progress</span>
                )}
                <div className="buttons">
                  {!todo.completed && (
                    <button
                      className="btn__complete"
                      id={todo._id}
                      onClick={updateTodo}
                    >
                      Complete
                    </button>
                  )}
                  <button
                    className="btn__delete"
                    id={todo._id}
                    onClick={deleteTodo}
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default Todos;
