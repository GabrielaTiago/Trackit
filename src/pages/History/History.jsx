import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Footer, Header } from "../../shared/components";
import AuthContext from "../../shared/contexts/Auth/AuthContext";

export default function History() {
  const { tasks } = useContext(AuthContext);
  const [historyHabits, setHistoryHabits] = useState([]);

  useEffect(() => {
    GetHistory();
  }, []);

  function GetHistory() {
    const config = { headers: { Authorization: `Bearer ${tasks.token}` } };
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
          <h2>Histórico</h2>
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </div>
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  background-color: #f2f2f2;
  min-height: 100vh;
  padding: 70px 17px 70px 18px;

  h2 {
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
  }

  p {
    width: 100%;
    height: auto;
    font-size: 17.98px;
    line-height: 22px;
    color: #666666;
    margin-top: 17px;
  }

  div {
    margin: 28px 0;
  }
`;
