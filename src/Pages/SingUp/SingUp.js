import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import trackit from '../../Assets/Images/trackit.png';
import { ThreeDots } from 'react-loader-spinner';

export default function SingUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    function handleSingUp(event) {
        event.preventDefault();
        setLoading(true);
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", { email, password, name, image });
        promise.then(() => navigate("/"));
        promise.catch((res) => alert(`${res.response.data.message}`))
    }

    return (
        <Container>
            <img src={trackit} alt="img logo trackit" />
            <form onSubmit={handleSingUp}>
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

                <input
                    type="text"
                    placeholder="nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="foto"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                    required
                />

                {loading ?
                    <div><ThreeDots color="#ffffff" height={40} width={40} /></div> :
                    <button type="submit" >Cadastrar</button>
                }

            </form>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
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
        text-decoration: underline;
        color: #52B6FF;
    }

    button, div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`