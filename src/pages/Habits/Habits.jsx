import { useCallback, useEffect, useState } from "react";
import { useAuthContext, useUserHabitsContext } from "../../shared/contexts";
import {
  Footer,
  Header,
  ListAllHabits,
  Main,
  NoData,
  PageTitle,
} from "../../shared/components";
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

