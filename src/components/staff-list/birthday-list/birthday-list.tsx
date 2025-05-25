import { TextDivider } from "@components/common";
import { TUser } from "@types";
import {
  compareDatesWithoutYear,
  splitByBirthdayYear,
} from "@utils/helpers/date";
import { FC, memo, useMemo } from "react";
import { UserCard } from "../user-card";
import { BirthdayListProps } from "./types";

export const BirthdayList: FC<BirthdayListProps> = memo(({ users }) => {
  const currentYear = new Date().getFullYear();
  const [sortedCurrentYearUsers, sortedNextYearUsers] = useMemo(() => {
    const [current, next] = splitByBirthdayYear<TUser>(users);
    return [
      [...current].sort((a, b) =>
        compareDatesWithoutYear(a.birthday, b.birthday)
      ),
      [...next].sort((a, b) => compareDatesWithoutYear(a.birthday, b.birthday)),
    ];
  }, [users]);

  return (
    <>
      {sortedCurrentYearUsers.map((u) => (
        <UserCard key={u.id} user={u} showBirthday />
      ))}

      {sortedNextYearUsers.length > 0 && <TextDivider text={currentYear + 1} />}

      {sortedNextYearUsers.map((u) => (
        <UserCard key={u.id} user={u} showBirthday />
      ))}
    </>
  );
});
