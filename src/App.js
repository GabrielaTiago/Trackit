import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SingUp from "./Pages/SingUp/SingUp";
import Habits from "./Pages/Habits/Habits";
import Today from "./Pages/Today/Today";
import History from "./Pages/History/History";
import AuthContext from "./Contexts/Auth/AuthContext";
import ProgressContext from "./Contexts/Auth/ProgressContext";
import { useState } from "react";

export default function App() {
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