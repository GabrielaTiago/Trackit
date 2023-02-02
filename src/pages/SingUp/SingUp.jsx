import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { signUp } from "../../shared/services/auth/authApi";
import {
  AuthWrapper,
  Button,
  Form,
  GoTo,
  Input,
  Logo,
} from "../../shared/components";

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
    <AuthWrapper>
      <Logo />
      <Form onSubmit={handleSingUp}>
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
      </Form>
      <GoTo to={"/"} text={"Já tem uma conta? Faça login!"} />
    </AuthWrapper>
  );
}
