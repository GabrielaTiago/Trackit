import {
  Container,
  InfoContainer,
  WeekdaysContainer,
} from "./Styles";
import { Day } from "../Buttons";
import { useUserHabitsContext } from "../../../../shared/contexts";
import { Input } from "../../../../shared/components";
import { weekdaysData } from "../../../../shared/mock";

export function AddNewHabit() {
  const { habitName, setHabitName, disabled } = useUserHabitsContext();

  return (
    <Container disabled={disabled}>
      <InfoContainer>
        <Input
          placeholder={"Nome do hábito"}
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          disabled={disabled}
        />
        <WeekdaysContainer>
          {weekdaysData.map((value) => {
            const { id, weekday } = value;
            return <Day key={id} id={id} weekday={weekday} />;
          })}
        </WeekdaysContainer>
      </InfoContainer>
    </Container>
  );
}
