import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SingUp from "./Pages/SingUp/SingUp";
import Habits from "./Pages/Habits/Habits";
import Today from "./Pages/Today/Today";
import History from "./Pages/History/History";
import AuthContext from "./Contexts/Auth/AuthContext";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ tasks, setTasks }}>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/cadastro" element={<SingUp />}></Route>
          <Route path="/habitos" element={<Habits />}></Route>
          <Route path="/hoje" element={<Today />}></Route>
          <Route path="/historico" element={<History />}></Route>
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}