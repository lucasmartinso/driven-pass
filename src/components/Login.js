import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Login() { 
    const navigate = useNavigate();

    return(
        <>
        <Line>.</Line>
        <Message onClick={() => navigate("/")}>Primeiro acesso? Crie sua conta!</Message>
        </>
    )
}

const Line = styled.div`
    width: 360px; 
    height: 1px; 
    border: 1px solid rgba(219, 219, 219, 1);
    margin-top: 40px;
    color: rgba(219, 219, 219, 1);
`
const Message = styled.div`
    width: 100%; 
    display: flex; 
    justify-content: center;
    font-size: 18px;
    text-decoration: underline;
    font-weight: bold;
    margin-top: 38px;

    &:hover, 
    &:focus { 
        cursor: pointer; 
        color: grey;
    }
`