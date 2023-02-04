import { useState } from "react";
import { DayBtn } from "./Styles";
import { useUserHabitsContext } from "../../../../shared/contexts";

export function Day({ id, weekday }) {
  const { daysSelection, setDaysSelection } = useUserHabitsContext();
  const [selected, setSelected] = useState(false);

  function handleDaysSelection(id) {
    const alreadySelected = daysSelection.some((day) => day === id);
    setSelected(!selected);

    if (!alreadySelected) {
      setDaysSelection([...daysSelection, id]);
    } else {
      daysSelection.splice(daysSelection.indexOf(id), 1);
      setDaysSelection([...daysSelection]);
    }
  }

  return (
    <DayBtn selected={selected} onClick={() => handleDaysSelection(id)}>
      {weekday}
    </DayBtn>
  );
}
