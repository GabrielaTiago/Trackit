import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import SingUp from "./pages/SingUp/SingUp";
import Habits from "./pages/Habits/Habits";
import Today from "./pages/Today/Today";
import History from "./pages/History/History";
import AuthContext from "./shared/contexts/Auth/AuthContext";
import ProgressContext from "./shared/contexts/Auth/ProgressContext";
import { useState } from "react";

export function App() {
  const [tasks, setTasks] = useState([]);
  const [progress, setProgress] = useState(0);

  return (
    <ProgressContext.Provider value={{progress, setProgress}}>
      <AuthContext.Provider value={{ tasks, setTasks }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/cadastro" element={<SingUp />}></Route>
            <Route path="/habitos" element={<Habits />}></Route>
            <Route path="/hoje" element={<Today />}></Route>
            <Route path="/historico" element={<History />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </ProgressContext.Provider>
  )
}