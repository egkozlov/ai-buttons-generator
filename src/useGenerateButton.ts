import { OpenAI } from "openai";
import { useState } from "react";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_AI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export type ButtonDetails = {
  color: string,
  size: string,
  text: string
};

const generatePrompt = (buttonDetails: ButtonDetails) => {
  const { color, size, text } = buttonDetails;
  return `Generate a styled HTML button based on the following attributes:
        - Color: ${color} (interpret if vague; if hex or specific, apply directly).
        - Size: ${size} (interpret if vague or approximate to standard CSS sizes).
        - Text: "${text}" (exactly as provided).
        
        Return valid HTML and CSS code in a single <button> element with inline styles. Ensure the style accurately reflects the given color, size, and text.`;
};

export const enum GenerationStatus {
  Idle,
  Failed,
  Success,
  InProgress
};

export const useGenerateButton = () => {
  const [generationStatus, setGenerationStatus] = useState(GenerationStatus.Idle);
  const [buttonHtml, setButtonHtml] = useState('');
  const generateButton = async (buttonDetails: ButtonDetails): Promise<void> => {
    setGenerationStatus(GenerationStatus.InProgress);

    try {
      const prompt = generatePrompt(buttonDetails);
      const response = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt,
        max_tokens: 150,
        temperature: 0.3,
      });

      setGenerationStatus(GenerationStatus.Success);
      setButtonHtml(response.choices[0].text.trim());
    } catch (error) {
      console.error("Error generating button HTML:", error);
      setGenerationStatus(GenerationStatus.Failed);
    }
  };

  return { generateButton, buttonHtml, generationStatus };
}