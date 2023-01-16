import React from "react";
import { createRoot } from "react-dom/client";

import { SimpleProvider } from "./components/SimpleContext";
import App from "./components/App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <SimpleProvider>
    <App />
  </SimpleProvider>
);
