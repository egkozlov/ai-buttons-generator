import { Attribute } from "./consts";
import { ButtonDetail } from "./types";

const attributesDescriptionMap = {
  [Attribute.color]: (value: string) => `- Color: ${value} (interpret if vague; if hex or specific, apply directly).`,
  [Attribute.size]: (value: string) => `- Size: ${value} (interpret if vague or approximate to standard CSS sizes).`,
  [Attribute.text]: (value: string) => `- Text: "${value}" (exactly as provided).`,
  [Attribute.style]: (value: string) => `- Style: ${value} (interpret this as a design aesthetic. Use the descriptor to influence color tone, button shape, font choice, and any other visual elements that match the style.)`
};

export const generatePrompt = (buttonDetails: ButtonDetail[]) => {
  const attributesDetails = buttonDetails.reduce((acc, detail: ButtonDetail) => {
    const attributePrompt = attributesDescriptionMap[detail.attribute](detail.value) + '\n';
    acc += attributePrompt;

    return acc;
  }, '');

  return `Generate a styled HTML button based on the following attributes:
        ${attributesDetails}

  Return valid HTML and CSS code in a single <button> element with inline styles. Ensure the style accurately reflects the given attributes.`;
};
