import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MessageAlert({ setModal, alert, message }) {
    const [ clicked, setClicked ] = useState(false);
    const navigate = useNavigate();
    console.log(alert);

    function confirm() { 
        setClicked(true);
        setModal(false);
        if(alert !== "Opssssss!!") { 
            navigate("/");
            window.location.reload();
        }
    }

    return(
        <>
        <Shadow>
            <Box alert={alert}>
                <p><strong>{alert}</strong></p>
                <p>{message}</p>
                <button onClick={confirm}>
                {clicked ? (
                    <ThreeDots color="white" height={70} width={90} />) : ("OK")}
                </button>
            </Box>
        </Shadow>
        </>
    )
}

const Shadow = styled.div`
    width: 100%; 
    height: 100%;     
    position: fixed; 
    left: 0; 
    top: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex; 
    justify-content: center; 
    align-items: center;
`
const Box = styled.div`
    width: 80%; 
    height: 30%; 
    background-color: white;
    border-radius: 12px;
    display: flex; 
    align-items: center; 
    justify-content: center;
    flex-direction: column; 
    font-family: Recursive;
    z-index: 4;

    p { 
        width: 60%;
        margin-bottom: 40px;
        font-size: 20px;
        word-break: break-all;
        text-align: center;
    }

    button { 
        width: 40%;
        height: 45px;
        background-color: ${props => props.alert === "Opssssss!!" ? ("rgba(251, 155, 155, 1)") : ("rgba(155, 251, 176, 1)")};
        font-weight: bold;
        border: none;
        border-radius: 12px;
        transition: all 0.5s linear;
        box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
        display: flex; 
        align-items: center; 
        justify-content: center;
        font-size: 18px;

        &:hover,
        &:focus { 
            cursor: pointer;
            background-color: ${props => props.alert === "Opssssss!!" ? ("rgba(255,0,0,1)") : ("#70CE36")};
            color: white;
        }

        &:active {  
            transform: scale(0.98);
            box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
        }
    }
`