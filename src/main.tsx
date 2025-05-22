import { App } from "@components/app";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "@store";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  //   <Provider store={store}>
  //     <App />
  //   </Provider>
  // </StrictMode>
      <Provider store={store}>
      <App />
    </Provider>
);
