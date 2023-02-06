import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";
import { useLocalStorage } from "../../../../shared/hooks";
import { deleteHabit } from "../../../../shared/services/habits/habitsApi";

export function Delete({ id, GetHabits }) {
  const { getItemFromLocalStorage } = useLocalStorage();
  const { token } = getItemFromLocalStorage("userData");

  async function deleteThisHabit(id) {
    try {
      Swal.fire({
        icon: "warning",
        title: "Deseja mesmo deletar este hábito?",
        text: "Você não poderá reverter essa ação...",
        showCancelButton: true,
        confirmButtonColor: "#52B6FF",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, delete!",
        cancelButtonText: "Não, cancele!",
      }).then(async ({ isConfirmed, isDismissed }) => {
        if (isConfirmed) {
          await deleteHabit(id, token);
          Swal.fire({
            icon: "success",
            title: "Deletado!",
            text: "Seu habito foi deletado.",
            confirmButtonColor: "#52B6FF",
          });
          GetHabits();
        }
        if (isDismissed) {
          Swal.fire({
            icon: "error",
            title: "Cancelado",
            text: "Seu hábito está seguro :)",
            confirmButtonColor: "#52B6FF",
          });
        }
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Erro ao deletar seu hábito",
        text: `${err.data.message}`,
        confirmButtonColor: "#52B6FF",
      });
    }
  }

  return <BsTrash onClick={() => deleteThisHabit(id)} />;
}
