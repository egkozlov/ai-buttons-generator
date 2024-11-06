import { FormEvent } from "react";
import { ButtonDetails } from "../useGenerateButton";
import styles from "./ButtonDetailsForm.module.css";
import { TextInput, Button } from "../common";

type Props = {
  onSubmit: (data: ButtonDetails) => void;
  isGenerating?: boolean;
};

export const ButtonDetailsForm = ({ onSubmit, isGenerating }: Props) => {
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
      <TextInput
        id="color"
        name="color"
        label="Color"
        disabled={isGenerating}
        placeholder='e.g. "sky blue" or "#E51BFC"'
      />
      <TextInput
        id="size"
        name="size"
        label="Size"
        disabled={isGenerating}
        placeholder='e.g. "medium" or "16px"' />
      <TextInput
        id="text"
        name="text"
        label="Text"
        disabled={isGenerating}
        placeholder='e.g. "Click Me"'
      />
      <Button label="Generate button" disabled={isGenerating} />
    </form>
  );
}