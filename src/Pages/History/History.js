import styled from 'styled-components';
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

export default function History() {
    return (
        <>
            <Header />
            <Main>
                <div>
                    <h2>Histórico</h2>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </div>
            </Main>
            <Footer />
        </>
    );
}

const Main = styled.main`
    background-color: #F2F2F2;

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