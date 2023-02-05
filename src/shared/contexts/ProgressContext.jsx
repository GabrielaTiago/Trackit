import { createContext, useContext, useMemo, useState } from "react";

const ProgressContext = createContext();

export const useProgressContext = () => {
  return useContext(ProgressContext);
};

export function ProgressContextProvider({ children }) {
  const [progress, setProgress] = useState(0);

  const contextValue = useMemo(() => {
    return { progress, setProgress };
  }, [progress, setProgress]);

  return (
    <ProgressContext.Provider value={contextValue}>
      {children}
    </ProgressContext.Provider>
  );
}
