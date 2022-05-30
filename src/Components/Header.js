import styled from 'styled-components';
import { useContext } from "react";
import AuthContext from '../Contexts/Auth/AuthContext';


export default function Header(){
    const { tasks } = useContext(AuthContext);
    const imgAPI = tasks.image;
    
    return(
        <Head>
            <h1>Trackit</h1>
            <img src={imgAPI} alt="user profile"/>
        </Head>
    );
}

const Head = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    padding: 0 18px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    h1{
        font-family: 'Playball';
        font-weight: 400;
        font-size: 40px;
        line-height: 48.73px;
        color: #ffffff;
    }

    img{
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }

`