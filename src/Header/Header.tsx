import styles from "./Header.module.css";

export const Header = () => {
  return <div className={styles.container}>
    <h1>Buttons Generator 🤖</h1>
    <p>Enter your preferred color, size, and text to generate a styled button in seconds! You can try phrases like "mint green" or "super large" for more fun results 😉</p>
  </div>
};