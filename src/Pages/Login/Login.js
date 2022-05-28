import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import trackit from '../../Assets/Images/trackit.png'
import { ThreeDots } from 'react-loader-spinner';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();
        setLoading(true);
        
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", { email, password });

        promise.then(() => navigate("/hoje"));
        promise.catch((res) => alert(`${res.response.data.message}`))
    }

    return (
        <Container>
            <img src={trackit} alt="img logo trackit" />
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                
                <input
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                
                {loading ?
                    <div><ThreeDots color="#ffffff" height={40} width={40} /></div> :
                    <button type="submit" >Entrar</button>
                }
            </form>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    img{
        width: 180px;
        height: 178.38px;
        margin-bottom: 32.62px;
    }

    form{
        width: 303px;
        height: auto;
        display: flex;
        flex-direction: column;
        gap:6px;
        margin-bottom: 25px;
    }

    input{
        width: 100%;
        height: 45px;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 15px;
    }

    button{
        width: 100%;
        height: 45px;
        background: #52B6FF;
        font-size: 20.976px;
        line-height: 26px;
        color: #FFFFFF;
        border: none;
        border-radius: 5px;
    }

    p{
        font-size: 13.976px;
        text-decoration: underline;
        color: #52B6FF;
    }

    button, div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`