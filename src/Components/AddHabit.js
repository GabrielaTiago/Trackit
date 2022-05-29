import { useState } from "react";
import styled from "styled-components";

export default function AddHabits() {
    const weekdays = [{ weekday: "D" }, { weekday: "S" }, { weekday: "T" }, { weekday: "Q" }, { weekday: "Q" }, { weekday: "S" }, { weekday: "S" },];

    return (
        <NewHabit >
            <input type="text" placeholder="Nome do hábito" />
            <span>
                {weekdays.map((value, index) => <button key={index}>{value.weekday}</button>)}
            </span>
            <ActionButtons>
                <h3>Cancelar</h3>
                <div>Salvar</div>
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
        color: #D4D4D4;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        background: none;
    }

    input{
        width: 100%;
        height: 45px;
        padding-left: 11px;
        font-size: 20px;
    }
    
    span{
        display: flex;
        justify-content: flex-start;
        gap: 5px;
        margin: 8px 0 29px;

    }

    span button{
        background: none;
        height: 30px;
        width: 30px;
    }

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