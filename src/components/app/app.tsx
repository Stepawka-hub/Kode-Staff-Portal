import { router } from "@routes";
import { FC, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import s from "./app.module.css";
import { useDispatch, useSelector } from '@store';
import { getIsInitialized } from '@slices/app';
import { initializeApp } from '@thunks/app';
import { AppPreloader } from '@components/app-preloader';

export const App: FC = () => {
  const dispatch = useDispatch();
  const isInitialize = useSelector(getIsInitialized);

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  return (
    <main className={s.content}>
      {
        isInitialize ?
        <RouterProvider router={router} /> :
        <AppPreloader />
      }
    </main>
  );
};
