import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import padlock from "../styles/images/Padlocks.svg";

export default function Padlock() { 
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState(); 
    const [ clicked, setClicked ] = useState(false); 
    const [ error, setError ] = useState(true);
    const [ errorMessage, setErrorMessage ] = useState("Bom dia");

    async function userData() { 
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <Container>
            <PadlockImage>
                <img src={padlock} alt="padlock" />
                <p>DrivenPass</p>
            </PadlockImage>

            <form onSubmit={userData}>
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

                    <Enter> 
                        <button onClick={() => setClicked(!clicked)}>
                            { clicked ? (
                              <ThreeDots color="white" height={80} width={100} />
                            ) : ("Criar")}
                        </button>
                    </Enter>

                    {error ? (
                    <Error>
                        <button>
                            <span>{errorMessage}</span>
                            <span id="x" onClick={() => setError(false)}>X</span>
                        </button>
                    </Error>
                    ) : ""}
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
    height: 45px;
    border-radius: 5px;
    margin-bottom: 30px;

    input { 
        width: 100%; 
        height: 100%; 
        padding: 0px 10px;
        font-size: 18px;
        border: 2px solid rgba(0, 89, 133, 1);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        transition: all 0.2s linear;

        &:focus { 
            border: 6px solid rgba(0, 89, 133, 1);
        }
    }

    button { 
        width: 100%; 
        height: 100%; 
        background-color: rgba(155, 251, 176, 1);
        font-size: 18px;
        font-weight: bold;
        border: none;
        box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
        transition: 1s all;
        border-radius: 5px;
        display: flex; 
        justify-content: center; 
        align-items: center;

        &:hover,
        &:focus { 
            cursor: pointer;
            background-color: #70CE36;
        }

        &:active {  
            transform: scale(0.98);
            box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
        }
    }
`
const Enter = styled.div`
    width: 300px; 
    height: 45px;
    border-radius: 5px;
    margin-bottom: 30px;

    button { 
        width: 100%; 
        height: 100%; 
        background-color: rgba(155, 251, 176, 1);
        font-size: 18px;
        font-weight: bold;
        border: none;
        box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
        transition: 1s all;
        border-radius: 5px;
        display: flex; 
        justify-content: center; 
        align-items: center;

        &:hover,
        &:focus { 
            cursor: pointer;
            background-color: #ADFF2F;
        }

        &:active {  
            transform: scale(0.98);
            box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
        }
    }
`
const Error = styled.div` 
  width: 100%; 
  height: 50px; 
  display: flex; 
  justify-content: center; 

  button { 
    width: 300px; 
    height: 100%; 
    display: flex;
    align-items: center; 
    justify-content: space-between;
    padding: 0px 20px 0px 20px;
    background-color: #FF7474;
    color: rgba(255,255,255,1);
    font-size: 20px;
    font-weight: bold;
    border: 2px solid rgba(120, 177, 89, 0.25);
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    transition: 0.2s all;

   span#x { 
    &:hover { 
      cursor: pointer;
    }

    &:active {  
      transform: scale(0.98);
      box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }
   }
  }
`