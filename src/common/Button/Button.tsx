import styles from "./Button.module.css";

type Props = {
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: Props) => {
  const { label, ...restProps } = props;
  return <button className={styles.button} {...restProps}>{props.label}</button>;
};