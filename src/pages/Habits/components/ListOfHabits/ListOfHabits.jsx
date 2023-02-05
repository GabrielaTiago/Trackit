import { Container } from "./Styles";
import { useUserHabitsContext } from "../../../../shared/contexts";
import { Habit } from "..";

export function ListOfHabits({ GetHabits }) {
  const { lisOfUserHabits } = useUserHabitsContext();

  return (
    <Container>
      {lisOfUserHabits.map((habit) => {
        const { id, name, days } = habit;

        return (
          <Habit
            key={id}
            id={id}
            name={name}
            days={days}
            GetHabits={GetHabits}
          />
        );
      })}
    </Container>
  );
}
