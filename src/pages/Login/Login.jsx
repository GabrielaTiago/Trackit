import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import trackit from "../../assets/images/trackit.png";
import { useAuthContext } from "../../shared/contexts";
import { signIn } from "../../shared/services/auth/authApi";

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
      <img src={trackit} alt="img logo trackit" />
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disable}
          required
        />

        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={disable}
          required
        />

        {loading ? (
          <div>
            <ThreeDots color="#ffffff" height={40} width={40} />
          </div>
        ) : (
          <button type="submit" disabled={disable}>
            Entrar
          </button>
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

  img {
    width: 180px;
    height: 178.38px;
    margin-bottom: 32.62px;
  }

  form {
    width: 303px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 25px;
  }

  input {
    width: 100%;
    height: 45px;
    font-size: 19.976px;
    line-height: 25px;
    color: #dbdbdb;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding-left: 15px;
  }

  button {
    width: 100%;
    height: 45px;
    background: #52b6ff;
    font-size: 20.976px;
    line-height: 26px;
    color: #ffffff;
    border: none;
    border-radius: 5px;
  }

  p {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 13.976px;
    text-decoration: underline;
    color: #52b6ff;
  }

  button,
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #52b6ff;
    border-radius: 5px;
  }
`;
