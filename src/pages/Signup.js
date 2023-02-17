import { useState } from "react";
import styled from "styled-components";
import Padlock from "../components/Sign";

export default function Signup() { 
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState(); 


    return(
        <>
        <Padlock 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            state="signup"
        />
        
        </>
    )
}

