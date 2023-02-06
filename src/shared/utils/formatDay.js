import dayjs from "dayjs";

export function formatDay(date) {
  const formatted = dayjs(date).format("DD/MM/YYYY");

  return formatted;
}
