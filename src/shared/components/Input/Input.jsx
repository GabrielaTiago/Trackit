import { InputBox } from "./Styles";

export function Input({ type, placeholder, value, onChange, disabled }) {
  return (
    <InputBox
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required
    />
  );
}
