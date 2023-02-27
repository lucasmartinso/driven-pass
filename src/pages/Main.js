/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Title from "../components/Title";
import SecretsType from "../renderpages/SecretsType";
import { getCredentials } from "../services/credentialsService";
import { getNotes } from "../services/safenotesService";
import { getCards } from "../services/cardsService";
import { getWifi } from "../services/wifiService";
import AuthConfig from "../hooks/auth";

export default function Main() { 
    const [ credentials, setCredentials ] = useState([]); 
    const [ notes, setNotes ] = useState([]);
    const [ cards, setCards ] = useState([]);
    const [ wifi, setWifi ] = useState([]);
    
    useEffect(async () => {
        const config = AuthConfig();
        const { credentials } = await getCredentials(config);
        setCredentials(credentials);
        const { notes } = await getNotes(config);
        setNotes(notes);
        const { cards } = await getCards(config);
        setCards(cards);
        const { wifi } = await getWifi(config);
        setWifi(wifi);
    },[]);

    const typeSecrets = [ 
        {
            id: 1, 
            name: "Credentials",
            icon: "enter",
            length: credentials
        },
        {
            id: 2, 
            name: "Safe Notes",
            icon: "pencil-sharp",
            length: notes
        },
        {
            id: 3, 
            name: "Cards",
            icon: "card",
            length: cards
        },
        {
            id: 4, 
            name: "Wifi Passwords",
            icon: "wifi",
            length: wifi
        },
    ]
    
    return(
        <>
        <Title 
            word= "My passwords"
        />

        <Types> 
            <ul>
                {typeSecrets.map(secret => (
                    <SecretsType
                        id= {secret.id}
                        name= {secret.name}
                        icon= {secret.icon}
                        length = {secret.length}
                        screen="acess"
                    />
                ))}
            </ul>
        </Types>

        <Footer 
            message={false}
            color="rgba(0, 89, 133, 1)"
            transitionColor="#00FFFF"
            iconType="add"
            goTo="/new"
        />
        </>
    )
}

export const Types = styled.div`
    width: 100%; 
    height: 80%; 
    margin-top: 30px;
    display: flex;
    justify-content: center;

    ul { 
        width: 90%;
    }
`
