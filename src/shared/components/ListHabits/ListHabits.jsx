import styled from "styled-components";
import { BsTrash } from 'react-icons/bs';
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../contexts/Auth/AuthContext";

export function ListAllHabits({ listHabits, GetHabits }) {
    const weekdays = [{ id: 0, weekday: "D" }, { id: 1, weekday: "S" }, { id: 2, weekday: "T" }, { id: 3, weekday: "Q" }, { id: 4, weekday: "Q" }, { id: 5, weekday: "S" }, { id: 6, weekday: "S" }];
    const { tasks } = useContext(AuthContext);

    function Delete(id) {
        const confirmDelete = window.confirm("Deseja mesmo deletar este hábito?");

        if (confirmDelete) {
            const config = { headers: { Authorization: `Bearer ${tasks.token}` } };
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);
            promise.then(() => GetHabits());
            promise.catch((res) => alert(`${res.response.data.message}`))
        }
    }
    return (
        <>
            {listHabits.map((list, index) => {
                return (
                    <Container key={index} >
                        <ListHabits>
                            <h3>{list.name}</h3>
                            <span>
                                {weekdays.map((day, index) => {
                                    return ((list.days).includes(index)
                                        ? <Day key={index} color={"#FFFFFF"} background={"#CFCFCF"}><h5>{day.weekday}</h5></Day>
                                        : <Day key={index} color={"#CFCFCF"} background={"#FFFFFF"}><h5>{day.weekday}</h5></Day>)
                                })}
                            </span>
                        </ListHabits>
                        <div><BsTrash onClick={() => Delete(list.id)} /></div>
                    </Container>
                )
            })
            }
        </>
    );
}

const Container = styled.div`
    width: 100%;
    min-height: 91px;
    padding: 13px 10px 15px 14px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;

    div{
        color: #666666;
    }
`
const ListHabits = styled.div`
    h3{
        font-size: 20px;
        line-height: 24.97px;
        color: #666666;
        word-wrap: break-word;
    }

    span{
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 5px;
    }
`
const Day = styled.div`
    height: 30px;
    width: 30px;
    font-size: 20px;
    border-radius: 5px;
    border: 1px solid #CFCFCF;
    background: ${(props) => props.background};
    display: flex;
    align-items: center;
    justify-content: center;

    h5{
        color: ${(props) => props.color};
    }

`
