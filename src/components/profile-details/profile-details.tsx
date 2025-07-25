import { FC } from "react";
import { useTranslation } from "react-i18next";
import { IconPhone } from "@components/icons/icon-phone";
import { IconStar } from "@components/icons/icon-star";
import { formatDate, getYearsDiff } from "@utils/helpers/date";
import { formatPhoneNumber } from "@utils/helpers/phone-number";
import { ProfileDetailsProps } from "./types";
import s from "./profile-details.module.css";

export const ProfileDetails: FC<ProfileDetailsProps> = ({
  birthday,
  phone,
}) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const formattedDate = formatDate(birthday, currentLanguage);
  const years = getYearsDiff(birthday);
  const formattedPhone = formatPhoneNumber(phone);

  return (
    <div className={s.profileDetails}>
      <div className={s.detailsGroup}>
        <div className={s.detailItem}>
          <IconStar className={s.icon} />
          <span>{formattedDate}</span>
        </div>
        <span className={s.userAge}>{t("years.plural", { count: years })}</span>
      </div>
      <div className={s.detailItem}>
        <IconPhone className={s.icon} />
        <a href={`tel:${phone}`} className={s.link}>
          {formattedPhone}
        </a>
      </div>
    </div>
  );
};
