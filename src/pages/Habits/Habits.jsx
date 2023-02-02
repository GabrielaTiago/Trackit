import { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import {
  AddHabits,
  Footer,
  Header,
  ListAllHabits,
} from "../../shared/components";
import AuthContext from "../../shared/contexts/Auth/AuthContext";
import { getHabits } from "../../shared/services/habits/habitsApi";

export function Habits() {
  const [add, setAdd] = useState(false);
  const [nameHabit, setNameHabit] = useState([]);
  const [selectDay, setSelectDay] = useState([]);
  const [listHabits, setListHabits] = useState([]);
  const { tasks } = useContext(AuthContext);

  const GetHabits = useCallback(async () => {
    try {
      const response = await getHabits(tasks.token);
      setListHabits(response);
    } catch (err) {
      alert(`Erro ao listar seus hábitos - ${err.data.message}`);
    }
  }, [tasks.token]);

  useEffect(() => {
    GetHabits();
  }, [GetHabits]);

  return (
    <>
      <Header />
      <Main>
        <div className="habits">
          <h2>Meus hábitos</h2>
          <AddButton onClick={() => setAdd(!add)}>+</AddButton>
        </div>
        {add ? (
          <AddHabits
            add={add}
            setAdd={setAdd}
            nameHabit={nameHabit}
            setNameHabit={setNameHabit}
            selectDay={selectDay}
            setSelectDay={setSelectDay}
            listHabits={listHabits}
            setListHabits={setListHabits}
          />
        ) : (
          <></>
        )}

        {listHabits.length !== 0 ? (
          <ListAllHabits listHabits={listHabits} GetHabits={GetHabits} />
        ) : (
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
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

  h2 {
    font-size: 23px;
    color: #126ba5;
  }

  p {
    width: 100%;
    height: auto;
    font-size: 17.98px;
    color: #666666;
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
