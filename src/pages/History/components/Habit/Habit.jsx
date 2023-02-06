import { RiCheckFill, RiCloseFill } from "react-icons/ri";
import { Container, Day, Typography } from "./Styles";
import { useHistoryContext } from "../../../../shared/contexts";

export function Habit() {
  const { dayHabits } = useHistoryContext();
  const { day, habits } = dayHabits;

  return (
    <Container>
      <Day>{day}</Day>

      {habits.map((habit) => {
        const { id, name, done } = habit;
        const icon = done ? <RiCheckFill /> : <RiCloseFill />;

        return (
          <Typography key={id} type={done}>
            {icon}{name}
          </Typography>
        );
      })}
    </Container>
  );
}
