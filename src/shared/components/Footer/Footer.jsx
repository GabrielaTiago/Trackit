import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import { useAuthContext, useProgressContext } from '../../contexts';

export function Footer() {
    const navigate = useNavigate();
    const { progress, setProgress } = useProgressContext();
    const { userData } = useAuthContext();
    const [today, setToday] = useState([]);

    useEffect(() => {
        GetHabitsCurrentDay();
        fillProgress();

    }, [today]);

    function GetHabitsCurrentDay() {
        const config = { headers: { Authorization: `Bearer ${userData.token}` } };
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);

        promisse.then((res) => {
            setToday(res.data);

        })
    }

    function fillProgress() {
        let progressValue = today.map((value => value.done ? 1 : 0));

        if(progressValue.length > 0){
            progressValue = progressValue.reduce((acumulator, current) => acumulator + current);
        }

        setProgress(Math.round(progressValue * 100 / today.length));
    }

    return (
        <Container>
            <h3 onClick={() => navigate("/habitos")}>Hábitos</h3>
            <Progress onClick={() => navigate("/hoje")}>
                <CircularProgressbar
                    text={`Hoje`}
                    value={progress}
                    background
                    backgroundPadding={5}
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#ffffff",
                        pathColor: "#ffffff",
                        trailColor: "transparent"
                    })}
                />
            </Progress>
            <h3 onClick={() => navigate("/historico")}>Histórico</h3>
        </Container>
    );
}

const Container = styled.footer`
    width: 100%;
    max-height: 70px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    justify-content: space-around;
    font-family: 'Lexend Deca';
    font-size: 18px;
    color: #52B6FF;
`

const Progress = styled.div`
    width: 91px;
    height: 91px;
    margin-bottom: 40px;
    `