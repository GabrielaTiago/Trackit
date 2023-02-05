import { BsCheckLg } from "react-icons/bs";
import { useAuthContext, useHabitsContext } from "../../../../shared/contexts";
import { checkHabit, uncheckHabit } from "../../../../shared/services/habits/habitsApi";
import { Container } from "./Styles";

export function Check({ id, index, done }) {
  const { userData } = useAuthContext();
  const { todayHabits, setTodayHabits } = useHabitsContext();

  function checkAsDone(id, index) {
    const localValue = todayHabits[index];

    if (localValue.done === true) {
      localValue.done = !localValue.done;
      localValue.currentSequence = localValue.currentSequence - 1;
      localValue.highestSequence = localValue.highestSequence - 1;

      markAsUndone(id, userData.token);
    } else {
      localValue.done = !localValue.done;
      localValue.currentSequence = localValue.currentSequence + 1;
      localValue.highestSequence = localValue.highestSequence + 1;

      markAsDone(id, userData.token);
    }
  }

  async function markAsDone(id, token) {
    try {
      await checkHabit(id, token);
      setTodayHabits([...todayHabits]);
    } catch (err) {
      alert(`Erro ao marcar seu hábito como feito - ${err.data.message}`);
    }
  }

  async function markAsUndone(id, token) {
    try {
      await uncheckHabit(id, token);
      setTodayHabits([...todayHabits]);
    } catch (err) {
      alert(`Erro ao marcar seu hábito como feito - ${err.data.message}`);
    }
  }

  return (
    <Container done={done} onClick={() => checkAsDone(id, index)}>
      <BsCheckLg />
    </Container>
  );
}
