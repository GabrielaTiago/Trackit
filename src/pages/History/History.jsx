import axios from "axios";
import { useEffect, useState } from "react";
import {
  Footer,
  Header,
  Main,
  NoData,
  PageTitle,
} from "../../shared/components";
import { useAuthContext } from "../../shared/contexts";

export function History() {
  const { userData } = useAuthContext();
  const [historyHabits, setHistoryHabits] = useState([]);

  useEffect(() => {
    GetHistory();
  }, []);

  function GetHistory() {
    const config = { headers: { Authorization: `Bearer ${userData.token}` } };
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/daily",
      config
    );

    promise.then((res) => setHistoryHabits([...res.data]));
    promise.catch((res) => alert(`${res.response.data.message}`));
  }

  return (
    <>
      <Header />
      <Main>
        <div>
          <PageTitle>Histórico</PageTitle>
          <NoData>
            Em breve você poderá ver o histórico dos seus hábitos aqui!
          </NoData>
        </div>
      </Main>
      <Footer />
    </>
  );
}
