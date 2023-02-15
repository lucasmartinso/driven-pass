import styled from "styled-components";
import padlock from "../styles/images/Padlocks.svg";

export default function Padlock() { 
    return(
        <Container>
            <PadlockImage>
                <img src={padlock} alt="padlock" />
                <p>DrivenPass</p>
            </PadlockImage>

            <form>
                <Inputs>

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
    justify-content: center;
`
const PadlockImage = styled.div`
    width: 100%; 
    height: 30%; 
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

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
    height: 50%;
`