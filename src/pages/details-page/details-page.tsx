import defaultAvatar from "@images/default-avatar.png";
import leftArrowIcon from "@images/details/left-arrow.svg";
import phoneIcon from "@images/details/phone.svg";
import starIcon from "@images/details/star.svg";
import { getSelectedUser } from "@selectors/staff";
import { useSelector } from "@store";
import { FC, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import s from "./details-page.module.css";
import { NotFoundPage } from "@pages";

export const DetailsPage: FC = () => {
  const { id = "none" } = useParams<{ id: string }>();

  const selectUser = useMemo(getSelectedUser, []);
  const user = useSelector((state) => selectUser(state, id));

  const navigate = useNavigate();
  const navigateToBack = () => navigate(-1);

  if (!user) {
    return <NotFoundPage />;
  }

  const { firstName, lastName, userTag, position, birthday, phone } =
    user;

  return (
    <section className={s.page}>
      <header className={s.header}>
        <div className={s.controls}>
          <button className={s.backButton} onClick={navigateToBack}>
            <img className={s.backButtonIconw} src={leftArrowIcon} alt="Back" />
          </button>
        </div>

        <div className={s.profileUser}>
          <div className={s.avatarWrapper}>
            <img className={s.avatarImage} src={defaultAvatar} alt="Avatar" />
          </div>
          <div className={s.mainInfo}>
            <span className={s.userName}>{`${firstName} ${lastName}`}</span>
            <span className={s.userTag}>{userTag}</span>
          </div>
          <p className={s.userPosition}>{position}</p>
        </div>
      </header>

      <div className={s.profileDetails}>
        <div className={s.detailsGroup}>
          <div className={s.detailItem}>
            <img src={starIcon} alt="Star" />
            <span>{birthday}</span>
          </div>
          <span className={s.userAge}>24 года</span>
        </div>
        <div className={s.detailItem}>
          <img src={phoneIcon} alt="Phone" />
          <span>{phone}</span>
        </div>
      </div>
    </section>
  );
};
