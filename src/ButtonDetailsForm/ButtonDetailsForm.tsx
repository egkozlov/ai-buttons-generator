import { FormEvent, useState } from "react";
import styles from "./ButtonDetailsForm.module.css";
import { TextInput, Button } from "../common";
import { ButtonDetail } from "../types";
import { Attribute, GenerationStatus } from "../consts";

type Props = {
  onSubmit: (data: ButtonDetail[]) => void;
  generationStatus: GenerationStatus;
};

export const ButtonDetailsForm = ({ onSubmit, generationStatus }: Props) => {
  const [isSimplifiedMode, setIsSimplifiedMode] = useState(false);

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const color = data.get('color')?.toString() || '';
    const size = data.get('size')?.toString() || '';
    const text = data.get('text')?.toString() || '';
    const style = data.get('style')?.toString() || '';

    const buttonDetails = isSimplifiedMode
      ? [
        { attribute: Attribute.style, value: style },
        { attribute: Attribute.text, value: text }
      ]
      : [
        { attribute: Attribute.color, value: color },
        { attribute: Attribute.size, value: size },
        { attribute: Attribute.text, value: text }
      ];

    onSubmit(buttonDetails);
  };

  const isDisabled = generationStatus === GenerationStatus.InProgress;
  const handleSimplifiedOnChange = () => {
    setIsSimplifiedMode(!isSimplifiedMode);
  }

  return (
    <form className={styles.form} onSubmit={handleOnSubmit} autoComplete="off">
      <label>
        <input checked={isSimplifiedMode} onChange={handleSimplifiedOnChange} id="simplified-view" name="simplified-view" type="checkbox" />
        Simplified Mode
      </label>
      {isSimplifiedMode ?
        <TextInput
          id="style"
          name="style"
          label="Style"
          disabled={isDisabled}
          placeholder='e.g. "modern" or "minimal"' />
        :
        <>
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
        </>
      }
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