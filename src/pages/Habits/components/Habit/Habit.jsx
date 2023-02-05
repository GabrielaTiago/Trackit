import { weekdaysData } from "../../../../shared/mock";
import { Delete } from "../Buttons";
import {
  Container,
  Name,
  NameContainer,
  Weekday,
  WeekdaysContainer,
} from "./Styles";

export function Habit({ id, name, days, GetHabits }) {
  return (
    <Container>
      <NameContainer>
        <Name>{name}</Name>
        <Delete id={id} GetHabits={GetHabits} />
      </NameContainer>
      <WeekdaysContainer>
        {weekdaysData.map((value) => {
          const { id, weekday } = value;
          const dayOfExecution = days.includes(id);

          return dayOfExecution ? (
            <Weekday key={id} day={true}>
              {weekday}
            </Weekday>
          ) : (
            <Weekday key={id} day={false}>
              {weekday}
            </Weekday>
          );
        })}
      </WeekdaysContainer>
    </Container>
  );
}
