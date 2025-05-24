import { FC } from "react";

export const SortForm: FC = () => {
  return (
    <form>
      <div>
        <input type="radio"></input>
        <label>По алфавиту</label>
      </div>
      <div>
        <input type="radio"></input>
        <label>По дню рождения</label>
      </div>
    </form>
  );
};
