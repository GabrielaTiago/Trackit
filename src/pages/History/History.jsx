import { useCallback, useEffect, useState } from "react";
import { Calendaring } from "./components";
import {
  Footer,
  Header,
  Main,
  PageTitle,
  PageTitleWrapper,
} from "../../shared/components";
import { useLocalStorage } from "../../shared/hooks";
import { getHistory } from "../../shared/services/history/historyApi";

export function History() {
  const { getItemFromLocalStorage } = useLocalStorage();
  const { token } = getItemFromLocalStorage("userData");
  const [historyHabits, setHistoryHabits] = useState([]);

  const GetHistory = useCallback(async () => {
    try {
      const response = await getHistory(token);
      setHistoryHabits(response);
    } catch (err) {
      alert(`Erro ao listar seu histórico - ${err.data.message}`);
    }
  }, [token]);

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

        <Calendaring historyHabits={historyHabits} />
      </Main>
      <Footer />
    </>
  );
}
