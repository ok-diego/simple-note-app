import React from "react";
import { createRoot } from "react-dom/client";
import { SimpleProvider } from "./components/SimpleContext";
import { ThemeProvider } from "./components/ThemeContext";
import App from "./components/App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <SimpleProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </SimpleProvider>
);
