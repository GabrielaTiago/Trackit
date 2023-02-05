import { useCallback, useEffect, useState } from "react";
import {
  Footer,
  Header,
  Main,
  NoData,
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
        <NoData>
          Em breve você poderá ver o histórico dos seus hábitos aqui!
        </NoData>
      </Main>
      <Footer />
    </>
  );
}
