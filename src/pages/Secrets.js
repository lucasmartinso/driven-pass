import { useParams } from "react-router-dom";
import Title from "../components/Title";

export default function Secrets() { 
    const { name } = useParams();
    console.log(name);
    
    return(
        <Title 
            word= {name}
        />
    )
}