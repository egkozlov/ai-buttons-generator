import { useState } from 'react';
import styles from './App.module.css';
import { ButtonDetails, useGenerateButton } from './useGenerateButton';
import { ButtonDetailsForm } from './ButtonDetailsForm/ButtonDetailsForm';
import { ButtonPreview } from './ButtonPreview/ButtonPreview';

export const App = () => {
  const [buttonHtml, setButtonHtml] = useState('');
  const { generateButton,isGenerating } = useGenerateButton();
  const handleOnSubmit = async (params: ButtonDetails) => {
    const button = await generateButton(params);
    setButtonHtml(button);
  };

  return (
    <div className={styles.App}>
      <ButtonDetailsForm isGenerating={isGenerating} onSubmit={handleOnSubmit} />
      {buttonHtml ? <ButtonPreview buttonHtml={buttonHtml} /> : null}
    </div>
  );
}
