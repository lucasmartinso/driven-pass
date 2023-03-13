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
            const secret = await searchCredential(id,config);
            setSecret(secret);
        } 
    })

    return(
        <>
        <Title 
            word= {name}
        />

        </>
    )
}