import React from "react";
import App from "./App";
import { SimpleProvider } from "./components/SimpleContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <SimpleProvider>
    <App />
  </SimpleProvider>
);
