import { useCallback, useEffect } from "react";
import { Container } from "./Styles";
import { GoTo } from "../GoTo/GoTo";
import { useHabitsContext, useProgressContext } from "../../contexts";
import { ProgressBar } from "./ProgressBar";

export function Footer() {
  const { setProgress } = useProgressContext();
  const { todayHabits } = useHabitsContext();

  const fillProgress = useCallback(() => {
    let progressValue = todayHabits.map((value) => (value.done ? 1 : 0));

    if (progressValue.length > 0) {
      progressValue = progressValue.reduce(
        (acumulator, current) => acumulator + current
      );
    }

    setProgress(Math.round((progressValue * 100) / todayHabits.length));
  }, [todayHabits, setProgress]);

  useEffect(() => {
    fillProgress();
  }, [fillProgress]);

  return (
    <Container>
      <GoTo to={"/habitos"} text={"Hábitos"} />
      <ProgressBar />
      <GoTo to={"/historico"} text={"Histórico"} />
    </Container>
  );
}
