import { FormEvent } from "react";
import { ButtonDetails } from "../useGenerateButton";
import styles from "./ButtonDetailsForm.module.css";
import { TextInput, Button } from "../common";

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
  };

  return (
    <form className={styles.form} onSubmit={handleOnSubmit} autoComplete="off">
      <TextInput id="color" name="color" label="Color" />
      <TextInput id="size" name="size" label="Size" />
      <TextInput id="text" name="text" label="Text" />
      <Button label="Generate button" />
    </form>
  );
}