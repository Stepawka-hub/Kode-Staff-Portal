import { formatDate, getYearsWithText } from "@utils/helpers/date";
import { FC, useMemo } from "react";
import s from "./profile-details.module.css";
import { ProfileDetailsProps } from "./types";
import { formatPhoneNumber } from "@utils/helpers/phone-number";
import { IconStar } from "@components/icons/icon-star";
import { IconPhone } from "@components/icons/icon-phone";
import { useTranslation } from "react-i18next";

export const ProfileDetails: FC<ProfileDetailsProps> = ({
  birthday,
  phone,
}) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const formattedDate = formatDate(birthday, currentLanguage);
  const years = useMemo(() => getYearsWithText(birthday), [birthday]);
  const formattedPhone = formatPhoneNumber(phone);

  return (
    <div className={s.profileDetails}>
      <div className={s.detailsGroup}>
        <div className={s.detailItem}>
          <IconStar className={s.icon} />
          <span>{formattedDate}</span>
        </div>
        <span className={s.userAge}>{years}</span>
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
