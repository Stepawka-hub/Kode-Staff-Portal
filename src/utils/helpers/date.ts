export const formatDate = (dateStr: string) =>
  new Date(dateStr)
    .toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .replace(/\sг\.?$/, "");

export const getYearsDiff = (
  startDate: string,
  endDate: Date = new Date()
): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let years = end.getFullYear() - start.getFullYear();
  const mDiff = end.getMonth() - start.getMonth();
  if (mDiff <= 0 || (mDiff === 0 && end.getDate() < start.getDate())) {
    years--;
  }

  return years;
};

export const getYearsWithText = (date: string): string => {
  const years = getYearsDiff(date);

  const lastDigit = years % 10;
  const lastTwoDigits = years % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `${years} лет`;
  }

  let ending: string;
  switch (lastDigit) {
    case 1:
      ending = "год";
      break;
    case 2:
    case 3:
    case 4:
      ending = "года";
      break;
    default:
      ending = "лет";
  }

  return `${years} ${ending}`;
};
