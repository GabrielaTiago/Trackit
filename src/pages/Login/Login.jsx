import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  AppTitle,
  AuthWrapper,
  Button,
  Form,
  GoTo,
  Input,
  LoadingButton,
  Logo,
} from "../../shared/components";
import { useLocalStorage } from "../../shared/hooks";
import { signIn } from "../../shared/services/auth/authApi";

export function Login() {
  const { setValueToLocalStorage } = useLocalStorage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    signInUser();
  }

  async function signInUser() {
    setLoading(true);
    setDisable(true);
    try {
      const response = await signIn({ email, password });
      if (response) {
        setValueToLocalStorage("userData", { ...response, password: null });
        navigate("/hoje");
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${err.data.message}`,
        confirmButtonColor: "#52B6FF",
      });
    } finally {
      setLoading(false);
      setDisable(false);
    }
  }

  return (
    <AuthWrapper>
      <div>
        <Logo />
        <AppTitle />
      </div>
      <Form onSubmit={handleLogin}>
        <Input
          type={"email"}
          placeholder={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disable}
        />
        <Input
          type={"password"}
          placeholder={"senha"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={disable}
        />

        {loading ? (
          <LoadingButton />
        ) : (
          <Button type={"submit"} disabled={disable} text={"Entrar"} />
        )}
      </Form>
      <GoTo to={"/cadastro"} text={"Não tem uma conta? Cadastre-se!"} />
    </AuthWrapper>
  );
}
