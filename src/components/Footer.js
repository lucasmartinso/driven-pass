import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Footer() { 
    const navigate = useNavigate(); 

    return(
        <Container>
            <FooterContainer>
                <Message> 
                    <ion-icon name="chevron-back-outline"></ion-icon>
                    <span>Back</span>
                </Message>
                <CircleAction color="red" transitionColor="blue" onClick={() => navigate("/login")}>
                    <ion-icon name="add"></ion-icon>
                </CircleAction>
            </FooterContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%; 
    height: 100px;
    position: fixed; 
    bottom: 10px; 
    left: 0;
    display: flex; 
    justify-content: center;
`
const FooterContainer = styled.div`
    width: 95%;
    height: 100%;
    display: flex; 
    align-items: center;
    justify-content: space-between;
`
const Message = styled.div`
    display: flex; 

    span { 
        font-family: Recursive;
        font-size: 18px;
        text-decoration: underline;
        transition: all 0.1s linear;
    }

    &:hover, 
    &:focus { 
        cursor: pointer; 
        color: grey;
    }
`
const CircleAction = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${props => props.color ? (props.color) : ("white")};
    display: flex; 
    align-items: center;
    justify-content: center; 
    box-shadow: 1px 4px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.4s linear;
    
    ion-icon { 
        width: 30px;
        height: 30px;
        color: white;
    }

    &:hover, 
    &:focus { 
        cursor: pointer; 
        background-color: ${props => props.transitionColor ? (props.transitionColor) : ("white")};
    }

    &:active {  
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }
`
//<ion-icon name="close"></ion-icon>