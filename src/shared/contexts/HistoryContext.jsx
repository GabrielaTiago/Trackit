import { createContext, useContext, useMemo, useState } from "react";

const HistoryContext = createContext();

export const useHistoryContext = () => {
  return useContext(HistoryContext);
};

export function HistoryContextProvider({ children }) {
  const [habitsHistory, setHabitsHistory] = useState([]);

  const contextValues = useMemo(() => {
    return { habitsHistory, setHabitsHistory };
  }, [habitsHistory, setHabitsHistory]);

  return (
    <HistoryContext.Provider value={contextValues}>
      {children}
    </HistoryContext.Provider>
  );
}
