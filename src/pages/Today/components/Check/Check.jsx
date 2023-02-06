import { BsCheckLg } from "react-icons/bs";
import Swal from "sweetalert2";
import { Container } from "./Styles";
import { useHabitsContext } from "../../../../shared/contexts";
import { useLocalStorage } from "../../../../shared/hooks";
import {
  checkHabit,
  uncheckHabit,
} from "../../../../shared/services/habits/habitsApi";

export function Check({ id, index, done }) {
  const { getItemFromLocalStorage } = useLocalStorage();
  const { token } = getItemFromLocalStorage("userData");
  const { todayHabits, setTodayHabits } = useHabitsContext();

  function checkAsDone(id, index) {
    const localValue = todayHabits[index];

    if (done) {
      localValue.done = !localValue.done;
      localValue.currentSequence = localValue.currentSequence - 1;
      localValue.highestSequence = localValue.highestSequence - 1;

      markAsUndone(id, token);
    } else {
      localValue.done = !localValue.done;
      localValue.currentSequence = localValue.currentSequence + 1;
      localValue.highestSequence = localValue.highestSequence + 1;

      markAsDone(id, token);
    }
  }

  async function markAsDone(id, token) {
    try {
      await checkHabit(id, token);
      setTodayHabits([...todayHabits]);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Erro ao marcar seu hábito como feito",
        text: `${err.data.message}`,
        confirmButtonColor: "#52B6FF",
      });
    }
  }

  async function markAsUndone(id, token) {
    try {
      await uncheckHabit(id, token);
      setTodayHabits([...todayHabits]);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Erro ao marcar seu hábito como não feito",
        text: `${err.data.message}`,
        confirmButtonColor: "#52B6FF",
      });
    }
  }

  return (
    <Container done={done} onClick={() => checkAsDone(id, index)}>
      <BsCheckLg />
    </Container>
  );
}
