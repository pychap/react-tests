"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
// import ScrollPosition from "./components/ScrollPosition";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <ScrollPosition /> */}
        <div className={styles.main__todo}>
          <form className="form__todo" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "16px" }}>
            <label htmlFor="todo-input">What needs to be done?</label>
            <input id="todo-input" />
          </form>
          <ol className={styles.ol}>
            <li className={styles.todo__lis}>
              <input className={styles.li__input} type="checkbox" id="todo-1" />
              <label htmlFor="todo-1">Invite classmates</label>
            </li>
            <li className={styles.todo__lis}>
              <input className={styles.li__input} type="checkbox" id="todo-2" />
              <label htmlFor="todo-2">Hire clown</label>
            </li>
            <li className={styles.todo__lis}>
              <input className={styles.li__input} type="checkbox" id="todo-3" />
              <label htmlFor="todo-3">Order bouncy castle</label>
            </li>
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
