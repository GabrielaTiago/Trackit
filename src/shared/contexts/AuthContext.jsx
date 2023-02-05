import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export function AuthContextProvider({ children }) {
  const [userData, setUserData] = useState([]);

  const contextValue = useMemo(() => {
    return { userData, setUserData };
  }, [userData, setUserData]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
