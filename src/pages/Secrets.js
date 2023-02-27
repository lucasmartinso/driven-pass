/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../components/Title";
import { getCredentials } from "../services/credentialsService";
import { getNotes } from "../services/safenotesService";
import { getCards } from "../services/cardsService";
import { getWifi } from "../services/wifiService";

export default function Secrets() { 
    const { name } = useParams();
    const [ icon, setIcon ] = useState();

    useEffect(async () => { 
        if(name === "Credentials") {
            setIcon("enter");
            await getCredentials()
        } else if(name === "Safe Notes") { 
            setIcon("pencil-sharp");
        } else if(name === "Cards") { 
            setIcon("card");
        } else if(name === "Wifi Passwords") { 
            setIcon("wifi");
        }


    },[])
    
    return(
        <Title 
            word= {name}
        />
    )
}