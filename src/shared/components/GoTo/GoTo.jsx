import { Link } from "react-router-dom";
import { Typography } from "./Styles";

export function GoTo({ to, text }) {
  return (
    <Link to={to}>
      <Typography>{text}</Typography>
    </Link>
  );
}
