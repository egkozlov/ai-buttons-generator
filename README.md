# Buttons Generator

**Buttons Generator** is a simple React app that allows users to create custom HTML buttons with specified parameters like color, size, and text. The app leverages the OpenAI API to generate styled button HTML based on user input. With a few clicks, you can design a button that meets your visual needs.


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
3.	Enter the following inputs:
    * Color: Enter a color name (e.g., `mint green`) or a hex code (e.g., `#FF5733`)
    * Size: Specify a size term (e.g., `small`, `extra large`) or a specific unit (e.g., `20px`)
    * Text: Type the text you’d like displayed on the button (e.g., `Submit`)
4.	Click `Generate` to generate a styled HTML button based on your input
5.	The generated button will appear in the preview section


## Examples

Try the following inputs to see how the app interprets various descriptions:

- **Color**: `"sunset orange"`  
  **Size**: `"extremely large"`  
  **Text**: `"Click Here"`

- **Color**: `"#2A9D8F"`  
  **Size**: `"medium"`  
  **Text**: `"Veeeeeeeeeeeery loooooooooong teext"`

- **Color**: `"very dark"`  
  **Size**: `"width 100px, height 40px, font-size 20px"`   
  **Text**: `"OK"`

Each example should produce a unique button style that matches your specified inputs