import Footer from "../components/Footer";
import Title from "../components/Title";
import SecretsType from "../renderpages/SecretsType";
import { Types } from "./Main";

export default function Categories() { 
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
        }
    ];

    return( 
        <>
        <Title 
            word= "Categories"
        />

        <Types> 
            <ul>
                {typeSecrets.map(secret => (
                    <SecretsType
                        id= {secret.id}
                        name= {secret.name}
                        icon= {secret.icon}
                        length = {[]}
                        screen="create"
                    />
                ))}
            </ul>
        </Types>

        <Footer 
            message={true}
            color="rgba(0, 89, 133, 1)"
            transitionColor="#00FFFF"
            iconType="add"
            goTo="/new"
        />  
        </>
    )
}