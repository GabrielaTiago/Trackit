import {
  Container,
  DataContainer,
  Goal,
  Metrics,
  MetricsContainer,
  Name,
} from "./Styles";
import { Check } from "../Check/Check";

export function Habit({
  id,
  name,
  done,
  currentSequence,
  highestSequence,
  index,
}) {
  const notZero = currentSequence !== 0 && highestSequence !== 0;
  let hit = false;
  let numeralBendingCurrent = "dias";
  let numeralBendingHighest = "dias";
  if (currentSequence <= 1) numeralBendingCurrent = "dia";
  if (highestSequence <= 1) numeralBendingHighest = "dia";
  if (currentSequence === highestSequence && notZero) hit = true;

  return (
    <Container>
      <DataContainer>
        <Name>{name}</Name>
        <MetricsContainer>
          <Metrics>
            Sequência atual:
            <Goal hit={hit || done}>
              {currentSequence} {numeralBendingCurrent}
            </Goal>
          </Metrics>
          <Metrics>
            Seu recorde:
            <Goal hit={hit}>
              {highestSequence} {numeralBendingHighest}
            </Goal>
          </Metrics>
        </MetricsContainer>
      </DataContainer>
      <Check id={id} index={index} done={done} />
    </Container>
  );
}
