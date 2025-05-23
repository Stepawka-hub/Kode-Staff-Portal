import phoneIcon from "@images/details/phone.svg";
import starIcon from "@images/details/star.svg";
import {
  formatDate,
  getYearsWithText
} from "@utils/helpers/date";
import { FC, useMemo } from "react";
import s from "./profile-details.module.css";
import { ProfileDetailsProps } from "./types";
import { formatPhoneNumber } from '@utils/helpers/phone-number';

export const ProfileDetails: FC<ProfileDetailsProps> = ({
  birthday,
  phone,
}) => {
  const formattedDate = formatDate(birthday);
  const years = useMemo(() => getYearsWithText(birthday), [birthday]);
  const formattedPhone = formatPhoneNumber(phone);

  return (
    <div className={s.profileDetails}>
      <div className={s.detailsGroup}>
        <div className={s.detailItem}>
          <img src={starIcon} alt="Star" />
          <span>{formattedDate}</span>
        </div>
        <span className={s.userAge}>{years}</span>
      </div>
      <div className={s.detailItem}>
        <img src={phoneIcon} alt="Phone" />
        <span>{formattedPhone}</span>
      </div>
    </div>
  );
};
