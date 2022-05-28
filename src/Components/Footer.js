import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


export default function Footer() {
    const navigate = useNavigate();

    return (
        <Container>
            <h3 onClick={() => navigate("/habitos")}>Hábitos</h3>
            <button onClick={() => navigate("/hoje")}>Hoje</button>
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


    button{
        width: 91px;
        height: 91px;
        border-radius: 50%;
        background-color: #52B6FF;
        font-size: 18px;
        color: #ffffff;
        border: none;
        margin-bottom: 50px;
        position: relative;
    }
`