import { createContext, useContext, useMemo, useState } from "react";

const HabitsContext = createContext();

export const useHabitsContext = () => {
  return useContext(HabitsContext);
};

export function HabistsContexctProvider({ children }) {
  const [todayHabits, setTodayHabits] = useState([]);

  const contextValues = useMemo(() => {
    return { todayHabits, setTodayHabits };
  }, [todayHabits, setTodayHabits]);

  return (
    <HabitsContext.Provider value={contextValues}>
      {children}
    </HabitsContext.Provider>
  );
}
