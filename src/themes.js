import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#ecd444",
    fontColor: "#6e2594",
}
export const darkTheme = {
    body: "#808080",
    fontColor: "#ffffff",
};

export const GlobalStyles = createGlobalStyle`

body {
 background-color: ${(props) => props.theme.body}
}`