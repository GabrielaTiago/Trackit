import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import AuthContext from "./shared/contexts/Auth/AuthContext";
import ProgressContext from "./shared/contexts/Auth/ProgressContext";

export function App() {
  const [tasks, setTasks] = useState([]);
  const [progress, setProgress] = useState(0);

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      <AuthContext.Provider value={{ tasks, setTasks }}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthContext.Provider>
    </ProgressContext.Provider>
  );
}
