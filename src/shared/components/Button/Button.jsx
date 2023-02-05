import { Btn } from "./Styles";

export function Button({ type, disabled, text }) {
  return (
    <Btn type={type} disabled={disabled}>
      {text}
    </Btn>
  );
}
