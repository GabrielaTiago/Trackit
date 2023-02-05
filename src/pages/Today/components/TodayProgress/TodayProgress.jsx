import { useProgressContext } from "../../../../shared/contexts";
import { Typography } from "./Styles";

export function TodayProgress() {
  const { progress } = useProgressContext();

  return progress !== 0 ? (
    <Typography color={true}>{progress}% dos hábitos concluídos</Typography>
  ) : (
    <Typography color={false}>Nenhum hábito concluído ainda</Typography>
  );
}
