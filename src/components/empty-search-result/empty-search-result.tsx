import { FC } from "react";
import s from "./empty-search-result.module.css";
import glassImg from "@images/glass.png";
import { useTranslation } from "react-i18next";

export const EmptySearchResult: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <img src={glassImg} alt="glass" />
      <h3 className={s.title}>{t("empty-search-result.title")}</h3>
      <p className={s.text}>{t("empty-search-result.text")}</p>
    </div>
  );
};
