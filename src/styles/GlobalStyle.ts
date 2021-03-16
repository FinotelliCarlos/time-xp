import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    :root {
        --white: #fff;
        --if-btn: #c43a47;
        --if-hover: #b3001b;
        --if-success: #acf39d;
        --cardbg: #212529;
        --countbg: #343a40;
        --background: #343a40;
        --gray-line: #dcdde0;
        --text: #5f5f5f;
        --text-highlight: #b3b9ff;
        --title: #468faf;
        --red: #e83f5b;
        --green: #4cd62b;
        --blue: #5965e0;
        --blue-dark: #4953b8;
        --blue-twitter: #2aa9e0;
        }

    @media screen and (max-width: 1080px){
        html{
            font-size: 93.75%;
            }
        }

    @media screen and (max-width: 720px){
        html{
            font-size: 87.05%;
            }
        }

    body {
        background: var(--background);
        color: var(--text);
    }

    body, input, textarea, button {
        font: 400 16px 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`

