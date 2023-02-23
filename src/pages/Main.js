import styled from "styled-components";
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
        </>
    )
}

const Types = styled.div`
    width: 100%; 
    height: 100%; 
    margin-top: 30px;
    display: flex;
    justify-content: center;

    ul { 
        width: 90%;
    }
`
