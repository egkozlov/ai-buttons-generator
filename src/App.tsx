import { useState } from 'react';
import styles from './App.module.css';
import { ButtonDetails, useGenerateButton } from './useGenerateButton';
import { ButtonDetailsForm } from './ButtonDetailsForm/ButtonDetailsForm';
import { ButtonPreview } from './ButtonPreview/ButtonPreview';
import { Header } from './Header/Header';

export const App = () => {
  const [buttonHtml, setButtonHtml] = useState('');
  const { generateButton, isGenerating, isGenerationFailed } = useGenerateButton();

  const handleOnSubmit = async (params: ButtonDetails) => {
    const button = await generateButton(params);
    setButtonHtml(button);
  };

  return (
    <div className={styles.mainContainer}>
      <Header />
      <ButtonDetailsForm isGenerating={isGenerating} onSubmit={handleOnSubmit} />
      <ButtonPreview
        buttonHtml={buttonHtml}
        isGenerating={isGenerating}
        isGenerationFailed={isGenerationFailed}
      />
    </div>
  );
}
