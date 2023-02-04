import { useUserHabitsContext } from "../../../../shared/contexts";
import { CancelBtn } from "./Styles";

export function Cancel() {
  const { toggleDivNewHabit, setToggleDivNewHabit } = useUserHabitsContext();

  const handleClick = () => setToggleDivNewHabit(!toggleDivNewHabit);

  return <CancelBtn onClick={handleClick}>Cancelar</CancelBtn>;
}
