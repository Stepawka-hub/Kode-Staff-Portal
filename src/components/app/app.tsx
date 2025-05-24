import { router } from "@routes";
import { FC, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import s from "./app.module.css";
import { useDispatch, useSelector } from "@store";
import { getIsInitialized } from "@slices/app";
import { initializeApp } from "@thunks/app";
import { AppPreloader } from "@components/app-preloader";
import { AppHeader } from "@components/app-header/app-header";
import { ModalProvider } from "@providers/modal/modal-provider";
import { ThemeProvider } from "@providers/theme/theme-provider";

export const App: FC = () => {
  const dispatch = useDispatch();
  const isInitialize = useSelector(getIsInitialized);

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModalProvider>
        <AppHeader />
        <main className={s.content}>
          {isInitialize ? <RouterProvider router={router} /> : <AppPreloader />}
        </main>
      </ModalProvider>
    </ThemeProvider>
  );
};
