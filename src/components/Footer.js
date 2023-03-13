import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createCredentials } from "../services/credentialsService";
import { useContext } from "react";
import TokenContext from "../contexts/tokenContext";
import { createNotes } from "../services/safenotesService";
import { createCards } from "../services/cardsService";
import { createWifi } from "../services/wifiService";

export default function Footer({ message, color, transitionColor, iconType, goTo, goBack, setModal, createAction, data, setMessage, setAlert }) { 
    const navigate = useNavigate(); 
    const sucessAlert = "Well done!!";
    const errorAlert = "Opssssss!!"
    const { token } = useContext(TokenContext);
    
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    async function changePage() { 
        if(!goTo) { 
            switch(createAction) { 
                case "Credentials": 
                    const credentialsData = { 
                        title: data.title,
                        password: data.password,
                        username: data.username,
                        url: data.url
                    }
                    try {
                        await createCredentials(credentialsData,config);
                        setMessage(`${createAction} create with sucess!!`);
                        setAlert(sucessAlert);
                    } catch (error) {
                        console.log(error);
                        setMessage(error.response.data);
                        setAlert(errorAlert);
                    }
                    break;
                case "Safe Notes": 
                    const notesData = { 
                        title: data.title,
                        description: data.description
                    }
                    try {
                        await createNotes(notesData,config);
                        setMessage(`${createAction} create with sucess!!`);
                        setAlert(sucessAlert);
                    } catch (error) {
                        console.log(error);
                        setMessage(error.response.data);
                        setAlert(errorAlert);
                    }
                    break;
                case "Cards": 
                    const cardsData = { 
                        title: data.title,
                        number: data.number,
                        name: data.names,
                        password: data.password,
                        cvc: data.cvc, 
                        type: data.type,
                        expirateDate: data.expirateDate
                    }
                    try {
                        await createCards(cardsData,config);
                        setMessage(`${createAction} create with sucess!!`);
                        setAlert(sucessAlert);
                    } catch (error) {
                        console.log(error);
                        setMessage(error.response.data);
                        setAlert(errorAlert);
                    }
                    break;
                case "Wifi Passwords": 
                    const wifiData = { 
                        title: data.title,
                        name: data.name, 
                        password: data.password
                    }
                    try {
                        await createWifi(wifiData,config);
                        setMessage(`${createAction} create with sucess!!`);
                        setAlert(sucessAlert);
                    } catch (error) {
                        console.log(error);
                        setMessage(error.response.data);
                        setAlert(errorAlert);
                    }
                    break;
                default: alert("BUGOU");
                }
            setModal(true);
        }
        else {
            navigate(goTo);
            window.location.reload();
        }
    }

    return(
        <Container>
            <FooterContainer>
                <Message message={message} onClick={() => navigate(goBack)}> 
                    <ion-icon name="chevron-back-outline"></ion-icon>
                    <span>Back</span>
                </Message>
                <CircleAction color={color} transitionColor={transitionColor} onClick={changePage}>
                    <ion-icon name={iconType}></ion-icon>
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
    visibility: ${props => props.message ? ("visible") : ("hidden")};

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
    background-color: ${props => props.color};
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
        background-color: ${props => props.transitionColor};
    }

    &:active {  
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }
`