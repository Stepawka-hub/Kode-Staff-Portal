const LOCALE_MAP: Record<string, string> = {
  en: "en-US",
  ru: "ru-RU",
};

export const formatDate = (dateStr: string, language: string = "ru") => {
  const locale = LOCALE_MAP[language] || "ru-RU";
  return new Date(dateStr)
    .toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .replace(/\sг\.?$/, "");
};

export const formatBirthdayShort = (
  dateStr: string,
  language: string = "ru"
) => {
  const locale = LOCALE_MAP[language] || "ru-RU";
  return new Date(dateStr).toLocaleDateString(locale, {
    day: "numeric",
    month: "short",
  });
};

export const getYearsDiff = (
  startDate: string,
  endDate: string | Date = new Date()
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

export const splitByBirthdayYear = <T extends { birthday: string }>(
  array: T[]
) => {
  const now = new Date();
  const current: T[] = [];
  const next: T[] = [];

  array.forEach((e) => {
    const bday = new Date(e.birthday);
    const nextBday = new Date(
      now.getFullYear(),
      bday.getMonth(),
      bday.getDate()
    );

    if (nextBday < now) {
      next.push(e);
    } else {
      current.push(e);
    }
  });

  return [current, next];
};

export const compareDatesWithoutYear = (a: string, b: string) => {
  const dateA = new Date(a);
  const dateB = new Date(b);
  const monthDiff = dateA.getMonth() - dateB.getMonth();
  return monthDiff !== 0 ? monthDiff : dateA.getDate() - dateB.getDate();
};
