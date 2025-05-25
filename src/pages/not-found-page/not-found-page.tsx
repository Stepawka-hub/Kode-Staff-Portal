import { FC } from "react";
import { NotFoundPageProps } from "./types";
import { useNavigate } from "react-router-dom";
import s from "./not-found-page.module.css";
import glassIcon from '@images/glass.png';

export const NotFoundPage: FC<NotFoundPageProps> = ({
  text = "Ничего не найдено!",
}) => {
  const navigate = useNavigate();
  const navigateToMain = () => navigate("/");

  return (
    <section className={s.page}>
      <img src={glassIcon} alt='glass' />
      <p className={s.text}>{text}</p>
      <button className={s.button} onClick={navigateToMain}>
        Вернуться на главную
      </button>
    </section>
  );
};
