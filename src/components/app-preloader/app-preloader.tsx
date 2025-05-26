import { Loader } from "@components/common/loader";
import { FC } from "react";
import s from "./app-preloader.module.css";
import { useTranslation } from 'react-i18next';

export const AppPreloader: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={s.preloader}>
      <p className={s.text}>{t('app.preloader.text')}</p>
      <div className={s.loader}>
        <Loader />
      </div>
    </div>
  );
};
