import { createContext, useContext, useMemo, useState } from "react";

const HistoryContext = createContext();

export const useHistoryContext = () => {
  return useContext(HistoryContext);
};

export function HistoryContextProvider({ children }) {
  const [habitsHistory, setHabitsHistory] = useState([]);
  const [dayHabits, setDayHabits] = useState({ day: "", habits: [] });
  const [selectDay, setSelectDay] = useState(false);

  const contextValues = useMemo(() => {
    return {
      habitsHistory,
      setHabitsHistory,
      dayHabits,
      setDayHabits,
      selectDay,
      setSelectDay,
    };
  }, [
    habitsHistory,
    setHabitsHistory,
    dayHabits,
    setDayHabits,
    selectDay,
    setSelectDay,
  ]);

  return (
    <HistoryContext.Provider value={contextValues}>
      {children}
    </HistoryContext.Provider>
  );
}
