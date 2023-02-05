import { useLocalStorage } from "../../hooks";
import { AppTitle, Container, UserImage } from "./Styles";

export function Header() {
  const { getItemFromLocalStorage } = useLocalStorage();
  const userData = getItemFromLocalStorage("userData");
  const { image } = userData;

  return (
    <Container>
      <AppTitle>Trackit</AppTitle>
      <UserImage src={image} alt={"imagem do usuário"} />
    </Container>
  );
}
