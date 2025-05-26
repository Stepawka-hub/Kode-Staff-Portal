import { FC } from "react";
import { ProfileUserProps } from "./types";
import s from "./profile-user.module.css";

export const ProfileUser: FC<ProfileUserProps> = ({
  firstName,
  lastName,
  userTag,
  position,
  avatarUrl,
}) => (
  <div className={s.profileUser}>
    <div className={s.avatarWrapper}>
      <img className={s.avatarImage} src={avatarUrl} alt="Avatar" />
    </div>
    <div className={s.mainInfo}>
      <span className={s.userName}>{`${firstName} ${lastName}`}</span>
      <span className={s.userTag}>{userTag}</span>
    </div>
    <p className={s.userPosition}>{position}</p>
  </div>
);
