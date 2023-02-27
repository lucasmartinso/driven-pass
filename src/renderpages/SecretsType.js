import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SecretsType({ id, name, icon, length, screen }) { 
    const navigate = useNavigate(); 

    function changeScreen() { 
        navigate(`/secret/${name}`);
        window.location.reload();
    }

    return(
        <>
        <Type id={id} onClick={changeScreen}>
            <TypeInfo>
                <ion-icon name={icon}></ion-icon>
                <span>{name}</span>
            </TypeInfo>
            {screen==="acess" ? (
                <CounterBall>{length.length}</CounterBall>
            ) : ("")}
        </Type>
        </>
    )
}

const Type = styled.li`
    width: 100%; 
    height: 80px;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    padding: 0px 10px;

    &:hover,
    &:focus { 
        cursor: pointer;
        background-color: white;
    }
`
const TypeInfo = styled.div`
    width: 50%; 
    height: 100%; 
    display: flex; 
    align-items: center;

    ion-icon { 
        width: 50px; 
        height: 50px;
        color: rgba(0, 89, 133, 1);
    }

    span { 
        font-size: 18px; 
        font-weight: bold;
        margin-left: 25px;
    }
`
const CounterBall = styled.div`
    width: 40px; 
    height: 40px; 
    border-radius: 50%; 
    background-color: rgba(0, 89, 133, 1);
    display: flex; 
    justify-content: center; 
    align-items: center;
    color: white;
    font-weight: bold;
`