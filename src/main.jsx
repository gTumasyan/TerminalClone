import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: consolas;
  }
`;

const theme = {
  colors: {
    primary: "green",
    secondary: "red",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Global />
    <App />
  </ThemeProvider>
);
