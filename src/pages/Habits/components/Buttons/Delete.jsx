import { BsTrash } from "react-icons/bs";
import { useLocalStorage } from "../../../../shared/hooks";
import { deleteHabit } from "../../../../shared/services/habits/habitsApi";

export function Delete({ id, GetHabits }) {
  const { getItemFromLocalStorage } = useLocalStorage();
  const userData = getItemFromLocalStorage("userData");

  async function deleteThisHabit(id) {
    const confirmDelete = window.confirm("Deseja mesmo deletar este hábito?");

    if (confirmDelete) {
      try {
        await deleteHabit(id, userData.token);
        GetHabits();
      } catch (err) {
        alert(`Erro ao deletar seu hábito - ${err.data.message}`);
      }
    }
  }

  return <BsTrash onClick={() => deleteThisHabit(id)} />;
}
