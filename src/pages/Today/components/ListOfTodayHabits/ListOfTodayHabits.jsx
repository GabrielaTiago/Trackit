import { useHabitsContext } from "../../../../shared/contexts";
import { Habit } from "../Habit/Habit";
import { Container } from "./Styles";

export function ListOfTodayHabits() {
  const { todayHabits } = useHabitsContext();
  return (
    <Container>
      {todayHabits.map((habit, index) => {
        const { id, name, done, currentSequence, highestSequence } = habit;
        return (
          <Habit
            key={id}
            id={id}
            name={name}
            done={done}
            currentSequence={currentSequence}
            highestSequence={highestSequence}
            index={index}
          />
        );
      })}
    </Container>
  );
}
