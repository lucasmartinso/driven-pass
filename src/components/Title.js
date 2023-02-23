import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import padlock from "../styles/images/Padlocks.svg";

export default function Title() { 
    const navigate = useNavigate();
    const message = "boa tarde"

    return( 
        <>
        <ContainerTitle>
            <SubTitle>
                <img src={padlock} alt={padlock} />
                <span>DrivenPass</span>
            </SubTitle>
            <ion-icon name="exit" onClick={() => navigate("/login")}></ion-icon>
        </ContainerTitle>

        <BlueRange>
            <span>{message}</span>
        </BlueRange>
        </>
    )
}

const ContainerTitle = styled.div`
    width: 100%; 
    height: 120px; 
    position: fixed; 
    left: 0; 
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 0px 20px;

    ion-icon { 
        width: 50px;
        height: 50px;
        color: rgba(0, 89, 133, 1);
        transition: all 0.3s linear;

        &:hover,
        &:focus { 
            cursor: pointer;
            color: rgba(255,0,0,1);
        }
    }
`
const SubTitle = styled.div`
    display: flex; 
    align-items: center;

    img { 
        width: 45px; 
        height: 60px;
    }

    span { 
        font-size: 36px; 
        color: rgba(0, 89, 133, 1);
        font-weight: bold;
        margin: 15px 0px 0px 20px;
    }
`
const BlueRange = styled.div`
    width: 100%; 
    height: 40px;
    margin-top: 110px;
    background-color: rgba(0, 89, 133, 1);
    display: flex; 
    align-items: center; 
    padding-left: 20px;

    span{ 
        color: white;
        font-size: 18px; 
        font-weight: bold;
    }
`