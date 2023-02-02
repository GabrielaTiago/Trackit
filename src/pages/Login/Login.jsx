import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { useAuthContext } from "../../shared/contexts";
import { signIn } from "../../shared/services/auth/authApi";
import { Button, Input, Logo } from "../../shared/components";

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
      <form onSubmit={handleLogin}>
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
      </form>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
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

  form {
    width: 303px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 25px;
  }

  p {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 13.976px;
    text-decoration: underline;
    color: #52b6ff;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #52b6ff;
    border-radius: 5px;
  }
`;
