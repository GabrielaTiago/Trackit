import { Container } from "./Styles";

export function Form({ onSubmit, children }) {
  return <Container onSubmit={onSubmit}>{children}</Container>;
}
