import { FormEvent } from 'react';
import { ButtonDetails } from '../useGenerateButton';
import styles from './ButtonDetailsForm.module.css';

type Props = {
  onSubmit: (data: ButtonDetails) => void;
};

export const ButtonDetailsForm = ({ onSubmit }: Props) => {
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const color = data.get('color')?.toString() || '';
    const size = data.get('size')?.toString() || '';
    const text = data.get('text')?.toString() || '';
    onSubmit({ color, size, text });
  }

  return (
    <form className={styles.form} onSubmit={handleOnSubmit}>
      <label> Color <input id="color" name="color" type="color" /></label>
      <label> Size <input id="size" name="size" type="text" /></label>
      <label> Text <input id="text" name="text" type="text" /> </label>
      <button>Generate</button>
    </form>
  );
}