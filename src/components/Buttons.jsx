import styles from "./Buttons.module.css";

export const Buttons = ({ todos, setTodos }) => {
  const handleDeleteAll = () => {
    setTodos([]);
  };
  const handleMarkComplete = () => {
    setTodos((prev) => prev.map((item) => ({ ...item, status: true })));
  };
  const handleMarkInComplete = () => {
    setTodos((prev) => prev.map((item) => ({ ...item, status: false })));
  };
  return (
    <div className={styles.button}>
      {todos.every((todoItem) => todoItem.status) ? (
        <button
          className={styles.completeButton}
          onClick={handleMarkInComplete}
        >
          Mark All Tasks As Not Completed
        </button>
      ) : (
        <button className={styles.completeButton} onClick={handleMarkComplete}>
          Mark All Tasks As Completed
        </button>
      )}
      <button
        className={styles.deleteButton}
        onClick={handleDeleteAll}
      >
        Delete All Tasks
      </button>
    </div>
  );
};

export default Buttons;
