// // import { useState } from "react";
// // import styles from "./todotask.module.css";

// // export default function ToDoTask({ task, todos, setTodos }) {
// //   const [editable, setEditable] = useState(false);
// //   const [inputValue, setInputValue] = useState(task.name);
// //   function handleDelete(task) {
// //     setTodos(todos.filter((todo) => todo !== task));
// //   }

// //   function handleComplete(task) {
// //     const newList = todos.map((todo) =>
// //       todo.name === task.name ? { ...todo, status: !todo.status } : todo
// //     );
// //     setTodos(newList);
// //   }
// //   const setClassName = task.status ? styles.completed : "";
// //   const handleEdit = (task) => {
// //     setTodos(
// //       todos.map((todo) => {
// //         if (todo === task) {
// //           return { ...todo, name: inputValue };
// //         } else {
// //           return todo;
// //         }
// //       })
// //     );
// //     setEditable(false);
// //   };
// //   return (
// //     <div className={styles.task}>
// //       <div className={styles.taskname}>
// //         <div className="content">{editable ? (
// //           <input
// //             type="text"
// //             value={inputValue}
// //             onChange={(e) => setInputValue(e.target.value)}
// //           />
// //         ) : (
// //           <p className={setClassName}> {task.name}</p>
// //         )}
// //         </div>
// //         <div className="btn">
// //           <div className="btn-upper">
// //             <button
// //               onClick={() => handleDelete(task)}
// //               className={styles.deletebutton}
// //             >
// //               Delete Task
// //             </button>
// //             {editable ? (
// //               <button
// //                 onClick={() => handleEdit(task)}
// //                 className={styles.editbutton}
// //               >
// //                 Done
// //               </button>
// //             ) : (
// //               <button
// //                 onClick={() => setEditable(true)}
// //                 className={styles.editbutton}
// //               >
// //                 Edit Task
// //               </button>
// //             )}
// //           </div>
// //           <div className={styles.btnLower}>
// //             <button onClick={() => handleComplete(task)}>Mark Complete</button>
// //           </div>
// //         </div>
// //       </div>
// //       <hr className={styles.line} />
// //     </div>
// //   );
// // }

// // edit button disabled when edit field is empty/same/task completed and returns back to normal when clicking somewhere else.
// import { useState, useRef, useEffect } from "react";
// import styles from "./todotask.module.css";

// export default function ToDoTask({ task, todos, setTodos }) {
//   const [editable, setEditable] = useState(false);
//   const [inputValue, setInputValue] = useState(task.name);
//   const [completed, setCompleted] = useState(task.status);
//   const taskRef = useRef(null);

//   useEffect(() => {
//     setCompleted(task.status);
//   }, [task.status]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (taskRef.current && !taskRef.current.contains(event.target)) {
//         setEditable(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   function handleDelete(task) {
//     setTodos(todos.filter((todo) => todo !== task));
//   }

//   function handleComplete(task) {
//     const newList = todos.map((todo) =>
//       todo.name === task.name ? { ...todo, status: !todo.status } : todo
//     );
//     setTodos(newList);
//   }

//   const setClassName = completed ? styles.completed : "";

//   const handleEdit = (task) => {
//     setTodos(
//       todos.map((todo) => {
//         if (todo === task) {
//           return { ...todo, name: inputValue };
//         } else {
//           return todo;
//         }
//       })
//     );
//     setEditable(false);
//   };

//   return (
//     <div className={styles.task} ref={taskRef}>
//       <div className={styles.taskname}>
//         <div className="content">
//           {editable ? (
//             <input
//               type="text"
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//             />
//           ) : (
//             <p className={setClassName}> {task.name}</p>
//           )}
//         </div>
//         <div className="btn">
//           <div className="btn-upper">
//             <button
//               onClick={() => handleDelete(task)}
//               className={styles.deletebutton}
//             >
//               Delete Task
//             </button>
//             {editable ? (
//               <button
//                 onClick={() => handleEdit(task)}
//                 className={styles.editbutton}
//                 disabled={!inputValue.trim() || inputValue === task.name}
//               >
//                 Save Changes
//               </button>
//             ) : (
//               <button
//                 onClick={() => setEditable(true)}
//                 className={styles.editbutton}
//                 disabled={completed}
//               >
//                 Edit Task
//               </button>
//             )}
//           </div>
//           <div className={styles.btnLower}>
//             <button onClick={() => handleComplete(task)}>
//               {completed ? "Mark Incomplete" : "Mark Complete"}
//             </button>
//           </div>
//         </div>
//       </div>
//       <hr className={styles.line} />
//     </div>
//   );
// }

import { useState, useRef, useEffect } from "react";
import styles from "./todotask.module.css";

export default function ToDoTask({ task, todos, setTodos }) {
  const [editable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState(task.name);
  const [completed, setCompleted] = useState(task.status);
  // const [editedd, setEditedd] = useState(false); // State to track if the task has been edited
  const taskRef = useRef(null);

  useEffect(() => {
    setCompleted(task.status);
  }, [task.status]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (taskRef.current && !taskRef.current.contains(event.target)) {
        setEditable(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleDelete(task) {
    setTodos(todos.filter((todo) => todo !== task));
  }

  function handleComplete(task) {
    const newList = todos.map((todo) =>
      todo.name === task.name ? { ...todo, status: !todo.status } : todo
    );
    setTodos(newList);
  }

  const setClassName = completed ? styles.completed : "";

  const handleEdit = (task) => {

    setTodos(
      todos.map((todo) => {
        if (todo.name === task.name) {
          // Mark the task as edited when changes are made
          return { ...todo, name: inputValue , isEdited : true };
        } else {
          return todo;
        }
      })
    );
    setEditable(false);
  };

  return (
    <div className={styles.task} ref={taskRef}>
      <div className={styles.taskname}>
        <div className="content">
          {editable ? (
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          ) : (
            <>
              <p className={setClassName}> {task.name}</p>
              {task.isEdited && <p className={styles.editedTag}>(Edited)</p>}
            </>
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
                disabled={!inputValue.trim() || inputValue === task.name}
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => setEditable(true)}
                className={styles.editbutton}
                disabled={completed}
              >
                Edit Task
              </button>
            )}
          </div>
          <div className={styles.btnLower}>
            <button onClick={() => handleComplete(task)}>
              {completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
          </div>
        </div>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
