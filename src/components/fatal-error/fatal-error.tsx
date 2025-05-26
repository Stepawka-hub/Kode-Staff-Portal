import { FC } from "react";
import s from "./fatal-error.module.css";
import flyingSaucerImg from "@images/flying-saucer.png";
import { FatalErrorProps } from "./types";
import { useTranslation } from "react-i18next";

export const FatalError: FC<FatalErrorProps> = ({ callback }) => {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <img src={flyingSaucerImg} alt="flyingSaucer" />
      <h3 className={s.title}>{t('fatal-error.title')}</h3>
      <p className={s.text}>{t('fatal-error.text')}</p>
      <button className={s.button} onClick={callback}>
        {t('fatal-error.btn-text')}
      </button>
    </div>
  );
};
