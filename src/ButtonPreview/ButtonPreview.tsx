import styles from "./ButtonPreview.module.css";

type Props = {
  buttonHtml?: string;
  isGenerating?: boolean;
  isGenerationFailed?: boolean;
};

export const ButtonPreview = ({ buttonHtml, isGenerating, isGenerationFailed }: Props) => {
  function getContent() {
    if (isGenerating) {
      return 'Generating your button...';
    }

    if (isGenerationFailed) {
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