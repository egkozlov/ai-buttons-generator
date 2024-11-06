import { FormEvent } from "react";
import { ButtonDetails, GenerationStatus } from "../useGenerateButton";
import styles from "./ButtonDetailsForm.module.css";
import { TextInput, Button } from "../common";

type Props = {
  onSubmit: (data: ButtonDetails) => void;
  generationStatus: GenerationStatus;
};

export const ButtonDetailsForm = ({ onSubmit, generationStatus }: Props) => {
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const color = data.get('color')?.toString() || '';
    const size = data.get('size')?.toString() || '';
    const text = data.get('text')?.toString() || '';
    onSubmit({ color, size, text });
  };
  const isDisabled = generationStatus === GenerationStatus.InProgress;

  return (
    <form className={styles.form} onSubmit={handleOnSubmit} autoComplete="off">
      <TextInput
        id="color"
        name="color"
        label="Color"
        disabled={isDisabled}
        placeholder='e.g. "sky blue" or "#E51BFC"'
      />
      <TextInput
        id="size"
        name="size"
        label="Size"
        disabled={isDisabled}
        placeholder='e.g. "medium" or "16px"' />
      <TextInput
        id="text"
        name="text"
        label="Text"
        disabled={isDisabled}
        placeholder='e.g. "Click Me"'
      />
      <Button label="Generate" disabled={isDisabled} />
    </form>
  );
}