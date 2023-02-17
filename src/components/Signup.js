import { useNavigate } from "react-router-dom";
import { Buttons } from "./Sign";

export default function Signup() { 
    const navigate = useNavigate();

    return(
        <Buttons color="rgba(251, 155, 155, 1)" trasitionColor="rgba(255,0,0,1)" onClick={() => navigate("/login")}> 
            <button><ion-icon name="chevron-back-outline"></ion-icon> Back</button>
        </Buttons>
    )
}