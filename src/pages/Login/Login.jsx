import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { useAuthContext } from "../../shared/contexts";
import { signIn } from "../../shared/services/auth/authApi";
import { Button, Form, GoTo, Input, Logo } from "../../shared/components";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const { setUserData } = useAuthContext();
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
        setUserData(response);
        navigate("/hoje");
      }
    } catch (err) {
      alert(`${err.data.message}`);
    } finally {
      setLoading(false);
      setDisable(false);
    }
  }

  return (
    <Container>
      <Logo />
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
          <div>
            <ThreeDots color="#ffffff" height={40} width={40} />
          </div>
        ) : (
          <Button type={"submit"} disabled={disable} text={"Entrar"} />
        )}
      </Form>
      <GoTo to={"/cadastro"} text={"Não tem uma conta? Cadastre-se!"} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #52b6ff;
    border-radius: 5px;
  }
`;
