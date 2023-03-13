/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../components/Title";
import { getCredentials } from "../services/credentialsService";
import { getNotes } from "../services/safenotesService";
import { getCards } from "../services/cardsService";
import { getWifi } from "../services/wifiService";
import TokenContext from "../contexts/tokenContext";
import styled from "styled-components";
import Footer from "../components/Footer";
import SecretsType from "../renderpages/SecretsType";
import { Types } from "./Main";

export default function Secrets() { 
    const { token } = useContext(TokenContext);
    const { name } = useParams();
    const [ icon, setIcon ] = useState();
    const [ secrets, setSecrets ] = useState([]);

    useEffect(async () => { 

        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };   

        if(name === "Credentials") {
            setIcon("enter");
            const {credentials} = await getCredentials(config);
            setSecrets(credentials);
        } else if(name === "Safe Notes") { 
            setIcon("pencil-sharp");
            const {notes} = await getNotes(config);
            setSecrets(notes);
        } else if(name === "Cards") { 
            setIcon("card");
            const {cards} = await getCards(config);
            setSecrets(cards);
        } else if(name === "Wifi Passwords") { 
            setIcon("wifi");
            const {wifis} = await getWifi(config);
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
            (
                <Types>
                    <ul>
                        {secrets.map(secret => ( 
                            <SecretsType 
                                id= {secret.id}
                                icon={icon}
                                name={secret.title}
                            />
                        ))}
                    </ul>
                </Types>  ) : (

                <Message>
                    <p><ion-icon name="alert-circle-sharp"></ion-icon> NO {name.toUpperCase()} REGISTRED YET</p>
                    <span>Click on the right bottom button to create a new {name}</span>
                </Message>
            )}

        <Footer 
            message={true}
            color="rgba(0, 89, 133, 1)"
            transitionColor="#00FFFF"
            iconType="add"
            goTo="/new"
            goBack="/"
        />  
        </>
    )
}

const Message = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    justify-content: center; 
    align-items: center;
    flex-direction: column;
    margin-top: 320px;
    
    p { 
        font-size: 30px;
        color: rgba(0, 89, 133, 1);
        font-weight: bold;
        display: flex; 
        align-items: center;

        ion-icon { 
            width: 50px; 
            height: 50px;
            color: red;
            margin-right: 10px;
        }
    }

    span { 
        margin-top: 10px;
    }
`