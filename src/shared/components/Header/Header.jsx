import { AppTitle, Container, UserImage } from "./Styles";
import { useAuthContext } from "../../contexts";

export function Header() {
  const { userData } = useAuthContext();
  const { image } = userData;

  return (
    <Container>
      <AppTitle>Trackit</AppTitle>
      <UserImage src={image} alt={"imagem do usuário"} />
    </Container>
  );
}
