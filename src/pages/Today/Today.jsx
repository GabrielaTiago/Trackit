import { useCallback, useEffect } from "react";
import styled from "styled-components";
import {
  useAuthContext,
  useHabitsContext,
  useProgressContext,
} from "../../shared/contexts";
import {
  AllTodayHabits,
  Footer,
  Header,
  Main,
  PageTitle,
} from "../../shared/components";
import { getTodayHabits } from "../../shared/services/habits/habitsApi";
import { formatWeekday } from "../../shared/utils";

export function Today() {
  const { userData } = useAuthContext();
  const { progress } = useProgressContext();
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
        <Container>
          <TodayMetrics>
            <PageTitle>{weekDay}</PageTitle>
            {progress === 0 ? (
              <p>Nenhum hábito concluído ainda</p>
            ) : (
              <h6>{progress}% dos hábitos concluídos</h6>
            )}
          </TodayMetrics>
          <AllTodayHabits />
        </Container>
      </Main>
      <Footer />
    </>
  );
}

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
