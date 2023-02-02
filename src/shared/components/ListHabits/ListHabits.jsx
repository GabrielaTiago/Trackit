import { useContext } from "react";
import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import AuthContext from "../../contexts/Auth/AuthContext";
import { deleteHabit } from "../../services/habits/habitsApi";

export function ListAllHabits({ listHabits, GetHabits }) {
  const weekdays = [
    { id: 0, weekday: "D" },
    { id: 1, weekday: "S" },
    { id: 2, weekday: "T" },
    { id: 3, weekday: "Q" },
    { id: 4, weekday: "Q" },
    { id: 5, weekday: "S" },
    { id: 6, weekday: "S" },
  ];
  const { tasks } = useContext(AuthContext);

  async function Delete(id) {
    const confirmDelete = window.confirm("Deseja mesmo deletar este hábito?");

    if (confirmDelete) {
      try {
        await deleteHabit(id, tasks.token);
        GetHabits();
      } catch (err) {
        alert(`Erro ao deletar seu hábito - ${err.data.message}`);
      }
    }
  }
  return (
    <>
      {listHabits.map((list, index) => {
        return (
          <Container key={index}>
            <ListHabits>
              <h3>{list.name}</h3>
              <span>
                {weekdays.map((day, index) => {
                  return list.days.includes(index) ? (
                    <Day key={index} color={"#FFFFFF"} background={"#CFCFCF"}>
                      <h5>{day.weekday}</h5>
                    </Day>
                  ) : (
                    <Day key={index} color={"#CFCFCF"} background={"#FFFFFF"}>
                      <h5>{day.weekday}</h5>
                    </Day>
                  );
                })}
              </span>
            </ListHabits>
            <div>
              <BsTrash onClick={() => Delete(list.id)} />
            </div>
          </Container>
        );
      })}
    </>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 91px;
  padding: 13px 10px 15px 14px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;

  div {
    color: #666666;
  }
`;
const ListHabits = styled.div`
  h3 {
    font-size: 20px;
    line-height: 24.97px;
    color: #666666;
    word-wrap: break-word;
  }

  span {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 5px;
  }
`;
const Day = styled.div`
  height: 30px;
  width: 30px;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid #cfcfcf;
  background: ${(props) => props.background};
  display: flex;
  align-items: center;
  justify-content: center;

  h5 {
    color: ${(props) => props.color};
  }
`;
