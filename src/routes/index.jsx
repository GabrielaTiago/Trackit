import { Navigate, Route, Routes } from "react-router-dom";
import { Habits, History, Login, SingUp, Today } from "../pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/cadastro" element={<SingUp />}></Route>
      <Route path="/habitos" element={<Habits />}></Route>
      <Route path="/hoje" element={<Today />}></Route>
      <Route path="/historico" element={<History />}></Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
