import { useCallback, useEffect } from "react";
import { PageTitleWrapper, TodayProgress } from "./components";
import {
  AllTodayHabits,
  Footer,
  Header,
  Main,
  PageTitle,
} from "../../shared/components";
import { useAuthContext, useHabitsContext } from "../../shared/contexts";
import { getTodayHabits } from "../../shared/services/habits/habitsApi";
import { formatWeekday } from "../../shared/utils";

export function Today() {
  const { userData } = useAuthContext();
  const { setTodayHabits } = useHabitsContext();
  const weekDay = formatWeekday();

  const GetTodayHabits = useCallback(async () => {
    try {
      const response = await getTodayHabits(userData.token);
      setTodayHabits(response);
    } catch (err) {
      alert(`Erro ao listar seus hábitos de hoje - ${err.data.message}`);
    }
  }, [userData.token, setTodayHabits]);

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

        <AllTodayHabits />
      </Main>
      <Footer />
    </>
  );
}
