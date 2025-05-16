import { router } from "@routes";
import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import "./app.css";

export const App: FC = () => {
  return <RouterProvider router={router} />;
};
