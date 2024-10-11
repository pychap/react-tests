"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
// import ScrollPosition from "./components/ScrollPosition";
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...state,
        {
          label: action.label,
          id: crypto.randomUUID(),
          completed: false,
        },
      ];
    }

    case "TOGGLE_TODO": {
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      });
    }
  }
}

export default function Home() {
  const [tentativeTodo, setTentativeTodo] = React.useState("");
  const [state, dispatch] = React.useReducer(reducer, []);

  function handleSubmitForm(event) {
    event.preventDefault();

    dispatch({
      type: "ADD_TODO",
      label: tentativeTodo,
    });

    setTentativeTodo("");
  }
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <ScrollPosition /> */}
        <div className={styles.main__todo}>
          <form 
            onSubmit={handleSubmitForm}
            className="form__todo"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "16px",
            }}
          >
            <label htmlFor="todo-input">What needs to be done?</label>
            <input 
              id="todo-input"
              value={tentativeTodo}
              onChange={(event) => {
                setTentativeTodo(event.target.value)
              }} />
          </form>
          <ol className={styles.ol}>
           {state.map(({ label, id, completed }) => (
            <li key={id} className={styles.todo__lis}>
              <input 
                type="checkbox"
                id={id}
                className={styles.li__input}
                checked={completed}
                onChange={() => 
                  dispatch({
                    type: 'TOGGLE_TODO',
                    id,
                  })
                }
              />
              <label htmlFor={id}>{label}</label>
            </li>
           ))}
          </ol>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
