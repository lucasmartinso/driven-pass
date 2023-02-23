import styled from "styled-components";
import padlock from "../styles/images/Padlocks.svg";

export default function Title() { 
    return( 
        <Container>
            <SubTitle>
                <img src={padlock} alt={padlock} />
                <span>DrivenPass</span>
            </SubTitle>
            <ion-icon name="exit"></ion-icon>
        </Container>
        
    )
}

const Container = styled.div`
    width: 100%; 
    height: 120px; 
    position: fixed; 
    left: 0; 
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 0px 20px;

    ion-icon { 
        width: 50px;
        height: 50px;
        color: rgba(0, 89, 133, 1);
        transition: all 0.3s linear;

        &:hover,
        &:focus { 
            cursor: pointer;
            color: rgba(255,0,0,1);
        }
    }
`
const SubTitle = styled.div`
    display: flex; 
    align-items: center;

    img { 
        width: 45px; 
        height: 60px;
    }

    span { 
        font-size: 36px; 
        color: rgba(0, 89, 133, 1);
        font-weight: bold;
        margin: 15px 0px 0px 20px;
    }
`