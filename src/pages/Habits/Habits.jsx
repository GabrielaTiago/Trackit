import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import {
  Footer,
  Header,
  ListAllHabits,
  NoData,
  PageTitle,
} from "../../shared/components";
import { useAuthContext, useUserHabitsContext } from "../../shared/contexts";
import { getHabits } from "../../shared/services/habits/habitsApi";
import { AddNewHabit } from "./components/AddNewHabit/AddNewHabit";
import { New } from "./components/Buttons";

export function Habits() {
  const [listHabits, setListHabits] = useState([]);
  const { userData } = useAuthContext();
  const { toggleDivNewHabit } = useUserHabitsContext();

  const GetHabits = useCallback(async () => {
    try {
      const response = await getHabits(userData.token);
      setListHabits(response);
    } catch (err) {
      alert(`Erro ao listar seus hábitos - ${err.data.message}`);
    }
  }, [userData.token]);

  useEffect(() => {
    GetHabits();
  }, [GetHabits]);

  return (
    <>
      <Header />
      <Main>
        <div className="habits">
          <PageTitle>Meus hábitos</PageTitle>
          <New />
        </div>
        {toggleDivNewHabit && <AddNewHabit />}

        {listHabits.length !== 0 ? (
          <ListAllHabits listHabits={listHabits} GetHabits={GetHabits} />
        ) : (
          <NoData>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </NoData>
        )}
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #f2f2f2;
  padding: 70px 17px 70px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .habits {
    width: 100%;
    height: 35px;
    margin: 28px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
