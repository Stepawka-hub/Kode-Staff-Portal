import { FC } from "react";
import s from "./user-card.module.css";
import { UserCardProps } from "./types";
import defaultAvatar from "@images/default-avatar.png";

export const UserCard: FC<UserCardProps> = ({ user }) => {
  const { firstName, lastName, userTag, position, avatarUrl } = user;

  return (
    <article className={s.card}>
      <div className={s.avatar}>
        <img src={defaultAvatar} alt="Avatar" />
      </div>
      <div className={s.data}>
        <div className={s.info}>
          <span className={s.name}>{`${firstName} ${lastName}`}</span>
          <span className={s.tag}>{userTag}</span>
        </div>
        <div className={s.position}>{position}</div>
      </div>
    </article>
  );
};
