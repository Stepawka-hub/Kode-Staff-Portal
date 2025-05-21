import { FC } from "react";
import s from "./details-page.module.css";
import defaultAvatar from "@images/default-avatar.png";
import starIcon from "@images/details/star.svg";
import phoneIcon from "@images/details/phone.svg";
import leftArrowIcon from "@images/details/left-arrow.svg";
import { useNavigate } from "react-router-dom";

export const DetailsPage: FC = () => {
  const navigate = useNavigate();
  const navigateToBack = () => navigate(-1);

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
            <span className={s.userName}>Алиса Иванова</span>
            <span className={s.userTag}>@aI</span>
          </div>
          <p className={s.userPosition}>Designer</p>
        </div>
      </header>

      <div className={s.profileDetails}>
        <div className={s.detailsGroup}>
          <div className={s.detailItem}>
            <img src={starIcon} alt="Star" />
            <span>5 июня 1996</span>
          </div>
          <span className={s.userAge}>24 года</span>
        </div>
        <div className={s.detailItem}>
          <img src={phoneIcon} alt="Phone" />
          <span>+ 7 (999) 900 90 90</span>
        </div>
      </div>
    </section>
  );
};
