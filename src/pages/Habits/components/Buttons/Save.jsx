import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { SaveBtn } from "./Styles";
import { useUserHabitsContext } from "../../../../shared/contexts";
import { useLocalStorage } from "../../../../shared/hooks";
import { createHabit } from "../../../../shared/services/habits/habitsApi";

export function Save() {
  const { getItemFromLocalStorage } = useLocalStorage();
  const userData = getItemFromLocalStorage("userData");
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
    saveHabit();
  };

  async function saveHabit() {
    if (habitName.length !== 0 && daysSelection.length !== 0) {
      setDisabled(true);
      setLoading(true);

      try {
        const response = await createHabit(
          { name: habitName, days: daysSelection },
          userData.token
        );

        if (response) {
          setListOfUserHabits([...lisOfUserHabits, response]);
          setHabitName("");
          setDaysSelection([]);
          setToggleDivNewHabit(!toggleDivNewHabit);
        }
      } catch (err) {
        alert(`${err.data.message}`);
      } finally {
        setDisabled(false);
        setLoading(false);
      }
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
