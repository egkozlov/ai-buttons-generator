import styles from "./Header.module.css";

export const Header = () => {
  return <div className={styles.container}>
    <h1>Buttons Generator 🤖</h1>
    <p>Enter your preferred button text, and choose between a "Simplified Mode" for easy styling with options like "modern" or "cute" or customize with specific color and size settings for unique look 😉</p>
  </div>
};