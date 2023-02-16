import { useState } from "react";
import styled from "styled-components";
import padlock from "../styles/images/Padlocks.svg";

export default function Padlock() { 
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState(); 
    const [ clicked, setClicked ] = useState(false); 

    return(
        <Container>
            <PadlockImage>
                <img src={padlock} alt="padlock" />
                <p>DrivenPass</p>
            </PadlockImage>

            <form>
                <Inputs>
                    <Input> 
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </Input>

                    <Input> 
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </Input>

                    <Input> 
                        <button onClick={() => setClicked(!clicked)}>
                            { clicked ? (
                                "Oi"
                            ) : ("Criar")}
                        </button>
                    </Input>
                </Inputs>
            </form>
        </Container>
    )
}

const Container = styled.div`
    position: fixed; 
    left: 0; 
    top: 0; 
    width: 100%;
    height: 100%;
    display: flex; 
    flex-direction: column;
    align-items: center;
`
const PadlockImage = styled.div`
    width: 100%; 
    height: 30%; 
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-top: 60px;

    img { 
        width: 113px; 
        height: 154px;
    }

    p { 
        margin-top: 20px;
        color: rgba(0, 89, 133, 1);
        font-size: 36px;
        font-weight: bold;
    }
`
const Inputs = styled.div`
    width: 100%; 
    height: 100%;
    display: flex; 
    flex-direction: column; 
    justify-content: space-between;
`
const Input = styled.div`
    width: 300px; 
    height: 40px;
    border-radius: 5px;
    margin-bottom: 30px;

    input { 
        width: 100%; 
        height: 100%; 
        border: none;
        padding: 0px 10px;
        font-size: 18px;
        border: 3px solid rgba(0, 89, 133, 1);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
    }

    button { 
        width: 100%; 
        height: 100%; 
        background-color: rgba(155, 251, 176, 1);
        font-size: 18px;
        font-weight: bold;
        border: none;
        box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
        transition: 0.2s all;
        border-radius: 5px;

        &:hover { 
            cursor: pointer;
        }

        &:active {  
            transform: scale(0.98);
            box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
        }
    }
`