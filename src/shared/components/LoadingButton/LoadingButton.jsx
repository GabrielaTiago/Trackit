import { ThreeDots } from "react-loader-spinner";
import { Container } from "./Styles";

export function LoadingButton() {
  return (
    <Container>
      <ThreeDots color="#ffffff" height={45} width={55} />
    </Container>
  );
}
