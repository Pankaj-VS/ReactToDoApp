import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [toDo, setToDo] = useState({name :"", status : false});

  function handleSubmitException(e) {
    e.preventDefault(); 
    if (toDo.name.trim() === "") {
      alert("Cannot enter an empty task!");
      return; 
    }
    setTodos([...todos, toDo]); 
    setToDo({name :"", status : false}); 
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmitException}>
      <div className = {styles.inputcontainer}>
        <input
          className={styles.forminput}
          onChange={(event) => setToDo({name : event.target.value, status : false ,isEdited : false})}
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
