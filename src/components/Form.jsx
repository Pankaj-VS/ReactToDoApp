import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  //const [toDo, setToDo] = useState("");
  const [toDo, setToDo] = useState({name :"", status : false});

  function handleSubmitException(e) {
    e.preventDefault(); //to prevent default nature.
    setTodos([...todos, toDo]); //to add every task in a list of tasks.
    setToDo({name :"", status : false}); //to clear out every task after the task is added.
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmitException}>
      <div className = {styles.inputcontainer}>
        <input
          className={styles.forminput}
          onChange={(event) => setToDo({name : event.target.value, status : false})}
          type="text"
          value={toDo.name}
          placeholder="Enter the task"
        />
        <button className={styles.submitbutton} type="Submit">
          Add Task
        </button>
      </div>
    </form>
  );
}
