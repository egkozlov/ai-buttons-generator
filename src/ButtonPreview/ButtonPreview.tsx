import { GenerationStatus } from "../useGenerateButton";
import styles from "./ButtonPreview.module.css";

type Props = {
  buttonHtml: string;
  generationStatus: GenerationStatus;
};

export const ButtonPreview = ({ buttonHtml, generationStatus }: Props) => {
  function getContent() {
    if (generationStatus === GenerationStatus.InProgress) {
      return 'Generating your button...';
    }

    if (generationStatus === GenerationStatus.Failed) {
      return 'Oops, something went wrong. Please try again!'
    }

    if (buttonHtml) {
      return buttonHtml;
    }

    return 'Your button preview will appear here.';
  };
  const content = getContent();

  return <div className={styles.container}>
    <h3>Your Custom Button 💅</h3>
    <div className={styles.previewArea} dangerouslySetInnerHTML={{ __html: content }} />
  </div>
};