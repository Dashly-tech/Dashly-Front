import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/animations.css";
import ScrollToTopButton from "./components/common/Button/Button";
import AIChatWidget from "./components/AIChatWidget";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <ScrollToTopButton/>
    <AIChatWidget />
  </React.StrictMode>
);