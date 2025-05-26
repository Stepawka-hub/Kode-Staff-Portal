import { FC } from "react";
import { NotFoundPageProps } from "./types";
import { useNavigate } from "react-router-dom";
import s from "./not-found-page.module.css";
import glassIcon from "@images/glass.png";
import { useTranslation } from "react-i18next";

export const NotFoundPage: FC<NotFoundPageProps> = ({ text }) => {
  const navigate = useNavigate();
  const navigateToMain = () => navigate("/");
  const { t } = useTranslation();

  return (
    <section className={s.page}>
      <img src={glassIcon} alt="glass" />
      <p className={s.text}>{text || t("not-found.text")}</p>
      <button className={s.button} onClick={navigateToMain}>
        {t("not-found.btn-text")}
      </button>
    </section>
  );
};
