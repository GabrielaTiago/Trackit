import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {
    const navigate = useNavigate();

    return (
        <Container>
            <h3 onClick={() => navigate("/habitos")}>Hábitos</h3>
            <Progress onClick={() => navigate("/hoje")}>
                <CircularProgressbar
                    text={`Hoje`}
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