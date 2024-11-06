import styles from "./TextInput.module.css";

type Props = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput = (props: Props) => {
  const { label, ...restProps } = props;
  return <div className={styles.container}>
    {label ? <label htmlFor={props.id}>{label}</label> : null}
    <input {...restProps} className={styles.input} />
  </div>
};