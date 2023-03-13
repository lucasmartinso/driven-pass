import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../components/Title";
import { searchCredential } from "../services/credentialsService";
import TokenContext from "../contexts/tokenContext";

export default function SelectSecret() { 
    const { name, id } = useParams(); 
    const [ secret, setSecret ] = useState({});
    const { token } = useContext(TokenContext);

    useEffect(() => { 

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        async function searchSecret() { 
            let secret; 
            try {
                if(name === "Credentials") secret = await searchCredential(id,config);
                // else if(name === "Safe Notes") secret = await 
                // else if(name === "Cards") secret = await 
                // else if if(name === "Wifi Passwords") secret = await 
            } catch (error) {
                console.log(error);
            }
            
            setSecret(secret);
        } 

        searchSecret();
    }, []);

    console.log(secret);

    return(
        <>
        <Title 
            word= {name}
        />

        </>
    )
}