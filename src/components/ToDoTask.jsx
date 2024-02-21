import { useState } from "react";
import styles from "./todotask.module.css";

export default function ToDoTask({ task, todos, setTodos }) {
  const [editable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState(task.name);
  function handleDelete(task) {
    setTodos(todos.filter((todo) => todo !== task));
  }

  function handleComplete(task) {
    const newList = todos.map((todo) =>
      todo.name === task.name ? { ...todo, status: !todo.status } : todo
    );
    setTodos(newList);
    console.log(todos);
  }
  const setClassName = task.status ? styles.completed : "";
  const handleEdit = (task) => {
    setTodos(
      todos.map((todo) => {
        if (todo === task) {
          return { ...todo, name: inputValue };
        } else {
          return todo;
        }
      })
    );
    setEditable(false);
  };
  return (
    <div className={styles.task}>
      <div className={styles.taskname}>
        <div className="content">{editable ? (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        ) : (
          <p className={setClassName}> {task.name}</p>
        )}
        </div>
        <div className="btn">
          <div className="btn-upper">
            <button
              onClick={() => handleDelete(task)}
              className={styles.deletebutton}
            >
              Delete Task
            </button>
            {editable ? (
              <button
                onClick={() => handleEdit(task)}
                className={styles.editbutton}
              >
                Done
              </button>
            ) : (
              <button
                onClick={() => setEditable(true)}
                className={styles.editbutton}
              >
                Edit Task
              </button>
            )}
          </div>
          <div className={styles.btnLower}>
            <button onClick={() => handleComplete(task)}>Mark Complete</button>
          </div>
        </div>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
