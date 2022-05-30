import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import AuthContext from "../Contexts/Auth/AuthContext";
import { ThreeDots } from 'react-loader-spinner';

function Day({ nameDay, selectDay, setSelectDay, id }) {
    const [selected, setSelected] = useState(false);

    function days(id) {
        const alreadySelected = selectDay.some(day => day === id);
        setSelected(!selected);

        if (!alreadySelected) {
            setSelectDay([...selectDay, id]);
        }
        else {
            selectDay.splice(selectDay.indexOf(id), 1)
            setSelectDay([...selectDay]);
        }
    }
    return (
        <DayButton
            selected={selected}
            onClick={() => days(id)}>
            {nameDay}
        </DayButton>
    );
}

export default function AddHabits({ add, setAdd, nameHabit, setNameHabit, selectDay, setSelectDay, listHabits, setListHabits }) {
    const weekdays = [{ id: 0, weekday: "D" }, { id: 1, weekday: "S" }, { id: 2, weekday: "T" }, { id: 3, weekday: "Q" }, { id: 4, weekday: "Q" }, { id: 5, weekday: "S" }, { id: 6, weekday: "S" }];
    const [saving, setSaving] = useState(false);
    const { tasks } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    function send() {
        if (nameHabit.length !== 0 && selectDay.length !== 0) {
            setSaving(true);
            setLoading(true);

            const config = { headers: { Authorization: `Bearer ${tasks.token}` } };
            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
                { name: nameHabit, days: selectDay },
                config
            )

            promise.then((res) => {setListHabits([...listHabits, res.data]); setNameHabit(""); setSelectDay("")});
            promise.catch((res) => alert(res.response.data.message));
        }
    }

    return (
        <NewHabit>
            <input
                type="text"
                placeholder="Nome do hábito"
                value={nameHabit}
                required
                onChange={e => setNameHabit(e.target.value)}
            />

            <span>
                {weekdays.map((value) =>
                    <Day
                        key={value.id}
                        id={value.id}
                        nameDay={value.weekday}
                        selectDay={selectDay}
                        setSelectDay={setSelectDay}
                    />)}
            </span>

            <ActionButtons>
                <h3 onClick={() => setAdd(!add)}>Cancelar</h3>
                {loading ? <div><ThreeDots color="#ffffff" height={40} width={40} /></div> : <div onClick={() => {send(); setAdd(!add)}}>Salvar</div>}
            </ActionButtons>
        </NewHabit>
    );
}

const NewHabit = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 18px 18px 15px 19px;
    margin-bottom: 29px;

    input, span button{
        border: 1px solid #CFCFCF;
        border-radius: 5px;  
    }
    
    input{
        width: 100%;
        height: 45px;
        padding-left: 11px;
        font-size: 20px;
        background: none;
        color: #CFCFCF;
    }
    
    span{
        display: flex;
        justify-content: flex-start;
        gap: 5px;
        margin: 8px 0 29px;
    }
`
const DayButton = styled.button`
    background: none;
    height: 30px;
    width: 30px;
    font-size: 20px;
    background-color: ${(props) => props.selected ? "#CFCFCF" : "none"};
    color: ${(props) => props.selected ? "#FFFFFF" : "#CFCFCF"};
`

const ActionButtons = styled.div`
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    align-content: flex-end;

    h3{
        font-size: 16px;
        color: #52B6FF;
        margin-right: 23px;
    }
    
    div{
        width: 84px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 5px;
        font-size: 16px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`