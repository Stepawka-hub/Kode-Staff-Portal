import { WrappedApp } from "@components/app";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "@store";
import "./i18next";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <WrappedApp />
    </Provider>
  </StrictMode>
);
