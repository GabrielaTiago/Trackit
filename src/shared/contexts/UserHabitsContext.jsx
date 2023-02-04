import { createContext, useContext, useMemo, useState } from "react";

const UserHabitsContext = createContext();

export const useUserHabitsContext = () => {
  return useContext(UserHabitsContext);
};

export function UserHabistsContexctProvider({ children }) {
  const [toggleDivNewHabit, setToggleDivNewHabit] = useState(false);
  const [habitName, setHabitName] = useState("");
  const [daysSelection, setDaysSelection] = useState([]);
  const [lisOfUserHabits, setListOfUserHabits] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const contextValues = useMemo(() => {
    return {
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
    };
  }, [
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
  ]);

  return (
    <UserHabitsContext.Provider value={contextValues}>
      {children}
    </UserHabitsContext.Provider>
  );
}
