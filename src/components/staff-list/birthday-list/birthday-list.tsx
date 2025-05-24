import { TextDivider } from '@components/common/text-divider/text-divider';
import { TUser } from "@types";
import { splitByBirthdayYear } from "@utils/helpers/date";
import { FC, memo, useMemo } from "react";
import { UserCard } from "../user-card";
import { BirthdayListProps } from "./types";

export const BirthdayList: FC<BirthdayListProps> = memo(({ users }) => {
  const currentYear = new Date().getFullYear();
  const [currentYearUsers, nextYearUsers] = useMemo(
    () => splitByBirthdayYear<TUser>(users),
    [users]
  );

  return (
    <>
      {currentYearUsers.map((u) => (
        <UserCard key={u.id} user={u} showBirthday />
      ))}

      {nextYearUsers.length > 0 && (
        <TextDivider text={currentYear + 1} />
      )}

      {nextYearUsers.map((u) => (
        <UserCard key={u.id} user={u} showBirthday />
      ))}
    </>
  );
});
