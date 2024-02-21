import ToDoTask from "./ToDoTask";
import styles from "./todolist.module.css"

export default function ToDoList({ todos, setTodos }) {
  return (
    <div className={styles.list}>
      {todos.map((task) => (
        <ToDoTask key={task.name} task={task} todos = {todos} setTodos={setTodos}/>
      ))}
    </div>
  );
}
