import { FC } from "react";
import s from "./user-card.module.css";
import { UserCardProps } from "./types";
import defaultAvatar from "@images/default-avatar.png";
import { useNavigate } from "react-router-dom";
import { formatBirthdayShort } from "@utils/helpers/date";
import { useTranslation } from "react-i18next";

export const UserCard: FC<UserCardProps> = ({ user, showBirthday = false }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const { id, firstName, lastName, userTag, position, birthday } = user;

  const onClickCard = () => {
    navigate(`/details/${id}`);
  };

  return (
    <article className={s.card} onClick={onClickCard}>
      <div className={s.avatar}>
        <img src={defaultAvatar} alt="Avatar" />
      </div>
      <div className={s.content}>
        <div className={s.data}>
          <div className={s.info}>
            <span className={s.name}>{`${firstName} ${lastName}`}</span>
            <span className={s.tag}>{userTag}</span>
          </div>
          <div className={s.position}>{position}</div>
        </div>
        {showBirthday && (
          <div className={s.birthday}>
            {formatBirthdayShort(birthday, currentLanguage)}
          </div>
        )}
      </div>
    </article>
  );
};
