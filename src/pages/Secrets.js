/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../components/Title";
import { getCredentials } from "../services/credentialsService";
import { getNotes } from "../services/safenotesService";
import { getCards } from "../services/cardsService";
import { getWifi } from "../services/wifiService";
import AuthConfig from "../hooks/auth";
import styled from "styled-components";

export default function Secrets() { 
    const { name } = useParams();
    const [ icon, setIcon ] = useState();
    const [ secrets, setSecrets ] = useState([]);

    useEffect(async () => { 
        const config = AuthConfig();

        if(name === "Credentials") {
            setIcon("enter");
            const credentials = await getCredentials(config);
            setSecrets(credentials);
        } else if(name === "Safe Notes") { 
            setIcon("pencil-sharp");
            const notes = await getNotes(config);
            setSecrets(notes);
        } else if(name === "Cards") { 
            setIcon("card");
            const cards = await getCards(config);
            setSecrets(cards);
        } else if(name === "Wifi Passwords") { 
            setIcon("wifi");
            const wifis = await getWifi(config);
            setSecrets(wifis);
        }
    },[]);

    console.log(secrets);
    
    return(
        <>
        <Title 
            word= {name}
        />

        {secrets.length !==0 ? 
            ("OIII") : (
                <Message>No {name} registered yet</Message>
            )}
        </>
    )
}

const Message = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    justify-content: center; 
    align-items: center;
    margin-top: 350px;
    font-size: 30px;
    color: rgba(0, 89, 133, 1);
    font-weight: bold;
`