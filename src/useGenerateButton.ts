import { OpenAI } from "openai";

const API_KEY = '';
const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
});

export type ButtonDetails = {
  color: string,
  size: string,
  text: string
};

export const useGenerateButton = () => {
  const generateButton = async ({ color, size, text }: ButtonDetails): Promise<string> => {
    const prompt = `Generate a styled HTML button based on the following attributes:
        - Color: ${color} (interpret if vague; if hex or specific, apply directly).
        - Size: ${size} (interpret if vague or approximate to standard CSS sizes).
        - Text: "${text}" (exactly as provided).
        
        Return valid HTML and CSS code in a single <button> element with inline styles. Ensure the style accurately reflects the given color, size, and text.`;

    try {
      const response = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt,
        max_tokens: 150,
        temperature: 0.3,
      });

      return response.choices[0].text.trim();
    } catch (error) {
      console.error("Error generating button HTML:", error);
      throw new Error("Error generating button");
    }
  };

  return { generateButton };
}