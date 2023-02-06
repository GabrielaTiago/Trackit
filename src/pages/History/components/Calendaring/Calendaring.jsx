import "react-calendar/dist/Calendar.css";
import { Calendar } from "react-calendar";
import { Container } from "./Styles";
import { formatDay } from "../../../../shared/utils";

export function Calendaring({ historyHabits }) {
  
  function formatDays(date) {
    const DAY = formatDay(date);
    const DD = DAY.slice(0, 2);

    for (const key of historyHabits) {
      const { day, habits } = key;

      if (DAY === day) {
        const className = habits.every((habit) => habit.done)
          ? "finished"
          : "unfinished";

        return <div className={className}>{DD}</div>;
      }
    }
    return <div className="no-habits">{DD}</div>;
  }

  return (
    <Container>
      <Calendar
        locale="pt-BR"
        calendarType="US"
        formatDay={(_, date) => formatDays(date)}
      />
    </Container>
  );
}
