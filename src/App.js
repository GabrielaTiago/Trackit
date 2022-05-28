import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./Contexts/Auth/AuthProvider";
import { RequireAuth } from "./Contexts/Auth/RequireAuth";
import Login from "./Pages/Login/Login";
import Habits from "./Pages/Habits/Habits";
import SingUp from "./Pages/SingUp/SingUp";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/cadastro" element={<SingUp />}></Route>
          <Route path="/habitos" element={<RequireAuth><Habits/></RequireAuth>}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}