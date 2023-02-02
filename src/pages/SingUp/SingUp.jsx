import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { signUp } from "../../shared/services/auth/authApi";
import { Button, GoTo, Input, Logo } from "../../shared/components";

export function SingUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);

  function handleSingUp(event) {
    event.preventDefault();

    signUpUser();
  }

  async function signUpUser() {
    setLoading(true);
    setDisable(true);

    try {
      const response = await signUp({ email, password, name, image });

      if (response) navigate("/");
    } catch (err) {
      alert(`${err.data.details[0]}`);
    } finally {
      setLoading(false);
      setDisable(false);
    }
  }

  return (
    <Container>
      <Logo />
      <form onSubmit={handleSingUp}>
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
        <Input
          type={"text"}
          placeholder={"nome"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={disable}
        />
        <Input
          type={"text"}
          placeholder={"foto"}
          value={image}
          onChange={(e) => setImage(e.target.value)}
          disabled={disable}
        />

        {loading ? (
          <div>
            <ThreeDots color="#ffffff" height={40} width={40} />
          </div>
        ) : (
          <Button type={"submit"} disabled={disable} text={"Cadastrar"} />
        )}
      </form>
      <GoTo to={"/"} text={"Já tem uma conta? Faça login!"} />
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

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #52b6ff;
    border-radius: 5px;
  }
`;
