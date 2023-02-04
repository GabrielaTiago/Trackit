import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import {
  useAuthContext,
  useUserHabitsContext,
} from "../../../../shared/contexts";
import { createHabit } from "../../../../shared/services/habits/habitsApi";
import { SaveBtn } from "./Styles";

export function Save() {
  const [loading, setLoading] = useState(false);
  const { userData } = useAuthContext();
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