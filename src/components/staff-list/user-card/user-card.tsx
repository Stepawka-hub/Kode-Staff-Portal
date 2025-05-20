import { FC } from "react";
import s from "./user-card.module.css";
import { UserCardProps } from "./types";

export const UserCard: FC<UserCardProps> = ({ user }) => {
  const { firstName, lastName, userTag, position, avatarUrl } = user;

  return (
    <article className={s.card}>
      <div className={s.avatar}>
        <img src={avatarUrl} alt="Avatar" />
      </div>
      <div className={s.info}>
        <div className={s.firstLine}>
          <p>{`${firstName} ${lastName}`}</p>
          <span>{userTag}</span>
        </div>
        <div className={s.secondLine}>{position}</div>
      </div>
    </article>
  );
};
