import { GoPlus } from "react-icons/go";
import { NewBtn } from "./Styles";
import { useUserHabitsContext } from "../../../../shared/contexts";

export function New() {
  const { toggleDivNewHabit, setToggleDivNewHabit } = useUserHabitsContext();

  const handleClick = () => setToggleDivNewHabit(!toggleDivNewHabit);

  return (
    <NewBtn onClick={handleClick}>
      <GoPlus />
    </NewBtn>
  );
}
