import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./assets/styles/global-style";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { media } from "./assets/styles/media";

const theme = {
  primary: "#000",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider
      theme={{
        ...theme,
        ...media,
      }}
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
