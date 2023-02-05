import { useCallback, useEffect } from "react";
import { AddNewHabit, ListOfHabits, New } from "./components";
import { useUserHabitsContext } from "../../shared/contexts";
import {
  Footer,
  Header,
  Main,
  NoData,
  PageTitle,
  PageTitleWrapper,
} from "../../shared/components";
import { useLocalStorage } from "../../shared/hooks";
import { getHabits } from "../../shared/services/habits/habitsApi";

export function Habits() {
  const { getItemFromLocalStorage } = useLocalStorage();
  const userData = getItemFromLocalStorage("userData");
  const { toggleDivNewHabit, lisOfUserHabits, setListOfUserHabits } =
    useUserHabitsContext();

  const GetHabits = useCallback(async () => {
    try {
      const response = await getHabits(userData.token);
      setListOfUserHabits(response);
    } catch (err) {
      alert(`Erro ao listar seus hábitos - ${err.data.message}`);
    }
  }, [userData.token, setListOfUserHabits]);

  useEffect(() => {
    GetHabits();
  }, [GetHabits]);

  return (
    <>
      <Header />
      <Main>
        <PageTitleWrapper>
          <PageTitle>Meus hábitos</PageTitle>
          <New />
        </PageTitleWrapper>
        {toggleDivNewHabit && <AddNewHabit />}

        {lisOfUserHabits.length !== 0 ? (
          <ListOfHabits GetHabits={GetHabits} />
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
