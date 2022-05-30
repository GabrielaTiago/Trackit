import { useState } from 'react';
import styled from 'styled-components';
import AddHabits from '../../Components/AddHabit';
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

export default function Habits() {
    const [add, setAdd] = useState(false);

    return (
        <>
            <Header />
            <Main>
                <div className='habits'>
                    <h2>Meus hábitos</h2>
                    <AddButton onClick={() => setAdd(!add)}>+</AddButton>
                </div>
                {add ? <AddHabits /> : <></>}
                <p>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </p>
            </Main>
            <Footer />
        </>
    );
}

const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    background-color: #F2F2F2;
    padding: 70px 17px 70px 18px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .habits{
        width: 100%;
        height: 35px;
        margin: 28px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h2{
        font-size: 23px;
        color: #126BA5;
    }

    
    p{
        width: 100%;
        height: auto;
        font-size: 17.98px;
        color: #666666;
    }
`
const AddButton = styled.button`
    width: 40px;
    height: 35px;
    font-size: 26.98px;
    line-height: 33.72px;
    color: #FFFFFF;
    background-color: #52B6FF;
    border-radius: 5px;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`