import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";

export default function MessageAlert() {
    const alert = "Muito legal"; 
    const message = "njcdnjdcnjcdnjdcjdnccdjncd";
    const [ clicked, setClicked ] = useState(false);

    return(
        <>
            <Shadow>
                <Box>
                    <p><strong>{alert}</strong></p>
                    <p>{message}</p>
                    <button><ThreeDots color="white" height={70} width={90} /></button>
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

    p { 
        margin-bottom: 40px;
        font-size: 20px;
    }

    button { 
        width: 40%;
        height: 45px;
        background-color: rgba(155, 251, 176, 1);
        font-weight: bold;
        border: none;
        border-radius: 12px;
        transition: all 1s linear;
        box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
        display: flex; 
        align-items: center; 
        justify-content: center;

        &:hover,
        &:focus { 
            cursor: pointer;
            background-color: #70CE36;
        }

        &:active {  
            transform: scale(0.98);
            box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
        }
    }
`