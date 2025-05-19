import { router } from "@routes";
import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import s from "./app.module.css";

export const App: FC = () => {
  return (
    <main className={s.content}>
      <RouterProvider router={router} />
    </main>
  );
};
