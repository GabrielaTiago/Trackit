import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ProgressContextProvider } from "./shared/contexts";
import AuthContext from "./shared/contexts/Auth/AuthContext";

export function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <ProgressContextProvider>
      <AuthContext.Provider value={{ tasks, setTasks }}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthContext.Provider>
    </ProgressContextProvider>
  );
}
