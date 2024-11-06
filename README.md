# Buttons Generator

**Buttons Generator** is a simple React app that allows users to create custom HTML buttons with flexible styling options. Choose between two modes: set specific parameters like color, size, and text, or switch to Simplified Mode to quickly apply popular styles such as “modern” or “cute.” The app uses the OpenAI API to generate styled button HTML based on your input, allowing you to design a button that meets your visual needs with just a few clicks.


## Installation

To run the **Buttons Generator** app locally:

1. Clone the repository
    ```bash
    git clone https://github.com/egkozlov/ai-buttons-generator.git
    ```
2. Install dependencies
    ```bash
    npm install
    ```
3. [Sign up](https://platform.openai.com/signup) at OpenAI and [create an API key](https://platform.openai.com/docs/quickstart) if you don't have it yet
4. Create `.env.local` file at the root of the project and set there your OpenAI API key as follows
    ```plaintext 
    REACT_APP_OPENAI_API_KEY=your_api_key_here
    ```
4. Run the app:
    ```bash
    npm start
    ```
5. The app should be running on http://localhost:3000


## Usage

1.	Make sure that you followed all steps from [Instalation](#installation) section
2.	Open the app in your browser at http://localhost:3000
3.	Enter your button text (e.g., Submit), then choose between two modes: 
    * Advanced Mode: Specify Color and Size to customize the button.
	    *	Color: Enter a color name (e.g., `mint green`) or a hex code (e.g., `#FF5733`).
	    *	Size: Specify a size term (e.g., `small`, `extra large`) or a specific unit (e.g., `20px`).
	*	Simplified Mode: By clicking `Simplified Mode` checkbox you can select a style descriptor such as `modern` or `cute` to apply a popular button style without choosing specific color and size.
4.	Click `Generate` to generate a styled HTML button based on your input
5.	The generated button will appear in the preview section
### Demo desktop


https://github.com/user-attachments/assets/49d67115-aa03-46bd-bd88-91528878fc2b


### Demo mobile



https://github.com/user-attachments/assets/cb7274f1-2adb-4ffe-b3c7-c5267233b2e8





## Examples

Try the following inputs to see how the app interprets different descriptions in **Advanced Mode**:

- **Color**: `"mint green"`  
  **Size**: `"extremely large"`  
  **Text**: `"Click Here"`

- **Color**: `"#2A9D8F"`  
  **Size**: `"medium"`  
  **Text**: `"Veeeeeeeeeeeery loooooooooong teext"`

- **Color**: `"very dark"`  
  **Size**: `"width 100px, height 40px, font-size 20px"`  
  **Text**: `"OK"`

Each example should produce a unique button style that matches the specified inputs, adapting colors, sizes, and shapes based on your descriptions.

Or, try **Simplified Mode** to apply an overall style without specifying exact color or size values. Check the `Simplified Mode` checkbox and enter values like:

- **Style**: `"modern"`  
  **Text**: `"Submit"`

- **Style**: `"cute"`  
  **Text**: `"Join Now"`

In **Simplified Mode**, each style descriptor will apply a cohesive, popular design style, giving you a quick and visually appealing button without needing to specify color or size details.



## Bonuses

### Input Variations

I added a **Simplified Mode** option that allows users to enter style descriptors like "modern," "minimal," or "cute" to affect the generated button’s appearance. This serves as an alternative to manually specifying **color** and **size**. I picked this item because it challenged me to think about a more flexible and extendable way of generating prompts on code level.

### Improved Experience

I enhanced the UI to make it visually appealing, modern, and interactive. I like when my UI looks enjoyable for the eye, and it’s a matter of honor for me to ensure a polished, refined design—even if it takes a bit more time to perfect.
