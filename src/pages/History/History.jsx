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
import { useHistoryContext } from "../../shared/contexts";

export function History() {
  const { getItemFromLocalStorage } = useLocalStorage();
  const { token } = getItemFromLocalStorage("userData");
  const { setHabitsHistory } = useHistoryContext();

  const GetHistory = useCallback(async () => {
    try {
      const response = await getHistory(token);
      setHabitsHistory(response);
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

        <Calendaring />
      </Main>
      <Footer />
    </>
  );
}
