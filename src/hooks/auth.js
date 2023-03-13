import { useContext } from "react";
import TokenContext from "../contexts/tokenContext";

export default function AuthConfig() { 
    const { token } = useContext(TokenContext);

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    return config;
}