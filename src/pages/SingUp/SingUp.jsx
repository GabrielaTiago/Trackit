import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  AuthWrapper,
  Button,
  Form,
  GoTo,
  Input,
  LoadingButton,
  Logo,
} from "../../shared/components";
import { signUp } from "../../shared/services/auth/authApi";

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
      await signUp({ email, password, name, image });
      navigate("/");
    } catch (err) {
      let error;
      if(err.status === 409) {
        error = err.data.message;
      } else {
        error = err.data.details[0];
      }
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error}`,
        confirmButtonColor: "#52B6FF"
      });
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
          <LoadingButton />
        ) : (
          <Button type={"submit"} disabled={disable} text={"Cadastrar"} />
        )}
      </Form>
      <GoTo to={"/"} text={"Já tem uma conta? Faça login!"} />
    </AuthWrapper>
  );
}
