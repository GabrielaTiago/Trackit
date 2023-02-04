import {
  Container,
  InfoContainer,
} from "./Styles";
import { useUserHabitsContext } from "../../../../shared/contexts";
import { Input } from "../../../../shared/components";

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
      </InfoContainer>
    </Container>
  );
}
