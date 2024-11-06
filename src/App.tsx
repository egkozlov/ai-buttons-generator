import styles from './App.module.css';
import { ButtonDetails, useGenerateButton } from './useGenerateButton';
import { ButtonDetailsForm } from './ButtonDetailsForm/ButtonDetailsForm';
import { ButtonPreview } from './ButtonPreview/ButtonPreview';
import { Header } from './Header/Header';

export const App = () => {
  const { buttonHtml, generateButton, generationStatus } = useGenerateButton();

  const handleOnSubmit = async (params: ButtonDetails) => {
    await generateButton(params);
  };

  return (
    <div className={styles.mainContainer}>
      <Header />
      <ButtonDetailsForm
        generationStatus={generationStatus}
        onSubmit={handleOnSubmit} />
      <ButtonPreview
        buttonHtml={buttonHtml}
        generationStatus={generationStatus}
      />
    </div>
  );
}
