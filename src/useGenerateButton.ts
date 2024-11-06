import { OpenAI } from "openai";
import { useState } from "react";
import { generatePrompt } from "./prompt-helper";
import { GenerationStatus } from "./consts";
import { ButtonDetail } from "./types";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_AI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const useGenerateButton = () => {
  const [generationStatus, setGenerationStatus] = useState(GenerationStatus.Idle);
  const [buttonHtml, setButtonHtml] = useState('');
  const generateButton = async (buttonDetails: ButtonDetail[]): Promise<void> => {
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