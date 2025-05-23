import leftArrowIcon from "@images/details/left-arrow.svg";
import { getSelectedUser } from "@selectors/staff";
import { useSelector } from "@store";
import { FC, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import s from "./details-page.module.css";
import { NotFoundPage } from "@pages";
import { ProfileDetails } from "./profile-details";
import { ProfileUser } from "./profile-user";

export const DetailsPage: FC = () => {
  const { id = "none" } = useParams<{ id: string }>();

  const selectUser = useMemo(getSelectedUser, []);
  const user = useSelector((state) => selectUser(state, id));

  const navigate = useNavigate();
  const navigateToMain = () => navigate("/");

  if (!user) {
    return <NotFoundPage />;
  }

  const { birthday, phone, ...profileUser } = user;

  return (
    <section className={s.page}>
      <header className={s.header}>
        <div className={s.controls}>
          <button className={s.backButton} onClick={navigateToMain}>
            <img className={s.backButtonIconw} src={leftArrowIcon} alt="Back" />
          </button>
        </div>

        <ProfileUser {...profileUser} />
      </header>

      <ProfileDetails birthday={birthday} phone={phone} />
    </section>
  );
};
