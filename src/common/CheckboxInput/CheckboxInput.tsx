import styles from './CheckboxInput.module.css';

type Props = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const CheckboxInput = (props: Props) => {
  const { label, ...restProps } = props;
  return <label className={styles.checkbox} htmlFor={props.id}>
    <input className={styles.check} type="checkbox" {...restProps} />
    <span className={styles.box} />
    {label}
  </label>
};