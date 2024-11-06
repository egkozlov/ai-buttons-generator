import styles from "./ButtonPreview.module.css";

type Props = {
  buttonHtml?: string;
  isGenerating?: boolean;
};

export const ButtonPreview = ({ buttonHtml, isGenerating }: Props) => {
  const content = isGenerating ? 'Generating your button...' : 'Your button preview will appear here.';

  return <div className={styles.container}>
    <h3>Your Custom Button 💅</h3>
    <div className={styles.previewArea} dangerouslySetInnerHTML={{ __html: buttonHtml || content }} />
  </div>
};