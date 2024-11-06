import styles from './App.module.css';
import { useGenerateButton } from './useGenerateButton';
import { ButtonDetailsForm } from './ButtonDetailsForm/ButtonDetailsForm';
import { ButtonPreview } from './ButtonPreview/ButtonPreview';
import { Header } from './Header/Header';
import { ButtonDetail } from './types';

export const App = () => {
  const { buttonHtml, generateButton, generationStatus } = useGenerateButton();

  const handleOnSubmit = async (params: ButtonDetail[]) => {
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
