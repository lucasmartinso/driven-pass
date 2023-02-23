import { useEffect } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Title from "../components/Title";
import SecretsType from "../renderpages/SecretsType";

export default function Main() { 
    const typeSecrets = [ 
        {
            id: 1, 
            name: "Credentials",
            icon: "enter"
        },
        {
            id: 2, 
            name: "Safe Notes",
            icon: "pencil-sharp"
        },
        {
            id: 3, 
            name: "Cards",
            icon: "card"
        },
        {
            id: 4, 
            name: "Wifi Passwords",
            icon: "wifi"
        },
    ]
    
    useEffect(() => {
        
    },[]);
    
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
                        icon= { secret.icon}
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

const Types = styled.div`
    width: 100%; 
    height: 80%; 
    margin-top: 30px;
    display: flex;
    justify-content: center;

    ul { 
        width: 90%;
    }
`
