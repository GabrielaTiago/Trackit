import { useCallback, useEffect } from "react";
import Swal from "sweetalert2";
import { Calendaring, Habit, HistoryWrapper } from "./components";
import {
  Footer,
  Header,
  Main,
  PageTitle,
  PageTitleWrapper,
} from "../../shared/components";
import { useHistoryContext } from "../../shared/contexts";
import { useLocalStorage } from "../../shared/hooks";
import { getHistory } from "../../shared/services/history/historyApi";

export function History() {
  const { getItemFromLocalStorage } = useLocalStorage();
  const { token } = getItemFromLocalStorage("userData");
  const { setHabitsHistory, selectDay } = useHistoryContext();

  const GetHistory = useCallback(async () => {
    try {
      const response = await getHistory(token);
      setHabitsHistory(response);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Erro ao listar seus histórico de hábitos",
        text: `${err.data.message}`,
        confirmButtonColor: "#52B6FF",
      });
    }
  }, [token, setHabitsHistory]);

  useEffect(() => {
    GetHistory();
  }, [GetHistory]);

  return (
    <>
      <Header />
      <Main>
        <PageTitleWrapper>
          <PageTitle>Histórico</PageTitle>
        </PageTitleWrapper>

        <HistoryWrapper>
          <Calendaring />
          {selectDay && <Habit />}
        </HistoryWrapper>
      </Main>
      <Footer />
    </>
  );
}
