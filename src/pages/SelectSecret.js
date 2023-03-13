import { useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../components/Title";

export default function SelectSecret() { 
    const { name, id } = useParams(); 
    const [ secret, setSecret ] = useState({});

    return(
        <>
        <Title 
            word= {name}
        />

        </>
    )
}