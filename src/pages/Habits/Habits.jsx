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

export function Habits() {
  const [listHabits, setListHabits] = useState([]);
  const { userData } = useAuthContext();
  const { toggleDivNewHabit, setToggleDivNewHabit } = useUserHabitsContext();

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
          <AddButton onClick={() => setToggleDivNewHabit(!toggleDivNewHabit)}>
            +
          </AddButton>
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
const AddButton = styled.button`
  width: 40px;
  height: 35px;
  font-size: 26.98px;
  line-height: 33.72px;
  color: #ffffff;
  background-color: #52b6ff;
  border-radius: 5px;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
