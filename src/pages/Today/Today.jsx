import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { AllTodayHabits, Footer, Header } from "../../shared/components";
import AuthContext from "../../shared/contexts/Auth/AuthContext";
import ProgressContext from "../../shared/contexts/Auth/ProgressContext";

export function Today() {
  const { tasks } = useContext(AuthContext);
  const { progress } = useContext(ProgressContext);
  const [todayHabits, setTodayHabits] = useState([]);
  const days = dayjs().locale("pt-br").format("dddd, DD/MM");
  const dayOfWeek = days[0].toUpperCase() + days.substring([1]);

  useEffect(() => {
    GetTodayHabits();
  }, []);

  function GetTodayHabits() {
    const config = { headers: { Authorization: `Bearer ${tasks.token}` } };
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );

    promise.then((res) => setTodayHabits([...res.data]));
    promise.catch((res) => alert(`${res.response.data.message}`));
  }

  return (
    <>
      <Header />
      <Main>
        <Container>
          <TodayMetrics>
            <h2>{dayOfWeek}</h2>
            {progress === 0 ? (
              <p>Nenhum hábito concluído ainda</p>
            ) : (
              <h6>{progress}% dos hábitos concluídos</h6>
            )}
          </TodayMetrics>
          <AllTodayHabits
            todayHabits={todayHabits}
            setTodayHabits={setTodayHabits}
            tasks={tasks}
          />
        </Container>
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
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }

  p {
    font-size: 17.976px;
    line-height: 22px;
    color: #bababa;
  }

  h6 {
    color: #8fc549;
  }
`;
const Container = styled.div``;
const TodayMetrics = styled.div`
  margin: 28px 0;
  display: flex;
  flex-direction: column;
`;
const TodayTask = styled.div`
  width: 100%;
  min-height: 94px;
  padding: 13px 13px 12px 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
`;
const TodayData = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
  }
`;

const Check = styled.div`
  width: 69px;
  height: 69px;
  background-color: ${(props) => (props.selected ? "#8FC549" : "#EBEBEB")};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 40px;
`;

const Goals = styled.div`
  margin-top: 7px;
  h4 {
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
  }
`;
