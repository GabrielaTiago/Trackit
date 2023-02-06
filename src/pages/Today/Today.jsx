import { useCallback, useEffect } from "react";
import {
  ListOfTodayHabits,
  PageTitleWrapper,
  TodayProgress,
} from "./components";
import { Footer, Header, Main, PageTitle } from "../../shared/components";
import { useHabitsContext } from "../../shared/contexts";
import { useLocalStorage } from "../../shared/hooks";
import { getTodayHabits } from "../../shared/services/habits/habitsApi";
import { formatWeekday } from "../../shared/utils";

export function Today() {
  const { getItemFromLocalStorage } = useLocalStorage();
  const { token } = getItemFromLocalStorage("userData");
  const { setTodayHabits } = useHabitsContext();
  const weekDay = formatWeekday();

  const GetTodayHabits = useCallback(async () => {
    try {
      const response = await getTodayHabits(token);
      setTodayHabits(response);
    } catch (err) {
      alert(`Erro ao listar seus hábitos de hoje - ${err.data.message}`);
    }
  }, [token, setTodayHabits]);

  useEffect(() => {
    GetTodayHabits();
  }, [GetTodayHabits]);

  return (
    <>
      <Header />
      <Main>
        <PageTitleWrapper>
          <PageTitle>{weekDay}</PageTitle>
          <TodayProgress />
        </PageTitleWrapper>

        <ListOfTodayHabits />
      </Main>
      <Footer />
    </>
  );
}
