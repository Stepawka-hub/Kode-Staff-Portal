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
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {!isInitialize ? (
        <AppPreloader />
      ) : (
        <ModalProvider>
          <AppHeader />
          <main className={s.content}>
            <RouterProvider router={router} />
          </main>
        </ModalProvider>
      )}
    </ThemeProvider>
  );
};
