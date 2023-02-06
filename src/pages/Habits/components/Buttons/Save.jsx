import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Swal from "sweetalert2";
import { SaveBtn } from "./Styles";
import { useUserHabitsContext } from "../../../../shared/contexts";
import { useLocalStorage } from "../../../../shared/hooks";
import { createHabit } from "../../../../shared/services/habits/habitsApi";

export function Save() {
  const { getItemFromLocalStorage } = useLocalStorage();
  const { token } = getItemFromLocalStorage("userData");
  const [loading, setLoading] = useState(false);
  const {
    toggleDivNewHabit,
    setToggleDivNewHabit,
    habitName,
    setHabitName,
    daysSelection,
    setDaysSelection,
    lisOfUserHabits,
    setListOfUserHabits,
    disabled,
    setDisabled,
  } = useUserHabitsContext();

  const handleCLick = () => {
    validations(habitName, daysSelection);
  };

  function validations(habitName, daysSelection) {
    if (habitName === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Preencha o campo 'Nome do hábito'",
      });
      return;
    }
    if (daysSelection.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "É obrigatória a seleceção de no mínimo 1 dia",
      });
      return;
    }
    saveHabit();
  }

  async function saveHabit() {
    setDisabled(true);
    setLoading(true);

    try {
      const response = await createHabit(
        { name: habitName, days: daysSelection },
        token
      );

      if (response) {
        setListOfUserHabits([...lisOfUserHabits, response]);
        setHabitName("");
        setDaysSelection([]);
        setToggleDivNewHabit(!toggleDivNewHabit);
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${err.data.message}`,
      });
    } finally {
      setDisabled(false);
      setLoading(false);
    }
  }

  return (
    <SaveBtn onClick={handleCLick} disabled={disabled}>
      {loading ? (
        <ThreeDots color="#ffffff" height={35} width={40} />
      ) : (
        "Salvar"
      )}
    </SaveBtn>
  );
}
