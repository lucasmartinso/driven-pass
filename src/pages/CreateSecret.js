import { useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import Footer from "../components/Footer";
import { Input } from "../components/Sign";
import Title from "../components/Title";

export default function CreateSecret() { 
    const { name } = useParams();
    const [ disabled, setDisabled ] = useState(false);
    const [ title, setTitle ] = useState();
    const [ password, setPassword ] = useState(); 
    const [ username, setUsername ] = useState(); 
    const [ url, setUrl ] = useState();
    const [ description, setDescription ] = useState(); 
    const [ number, setNumber ] = useState();
    const [ cvc, setCvc ] = useState();
    const [ type, setType ] = useState();
    const [ wifiName, setWifiName ] = useState();

    return( 
        <>
        <Title 
            word={name}
        />

        <SubTitle>
            <span>Register</span>
        </SubTitle>

        <form>
            <Inputs>
                <Input> 
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        disabled={disabled}
                        maxLength={30}
                        required
                    />
                </Input>
                {name=== "Safe Notes" ? (
                <Input> 
                    <textarea
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        disabled={disabled}
                        required
                    />
                </Input>
                ): ("")}
                {name=== "Wifi Passwords" ? (
                <Input> 
                    <input
                        type="text"
                        placeholder="Name"
                        value={wifiName}
                        onChange={(event) => setWifiName(event.target.value)}
                        disabled={disabled}
                        required
                    />
                </Input>
                ): ("")}
                {name=== "Credentials" || name=== "Wifi Passwords" ? (
                <Input> 
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        disabled={disabled}
                        maxLength={30}
                        required
                    />
                </Input>
                ): ("")}
                {name=== "Credentials" || name=== "Safe Notes" ? (
                <Input> 
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        disabled={disabled}
                        maxLength={30}
                        required
                    />
                </Input>
                ) : ("")}
                {name=== "Credentials" || name=== "Safe Notes" ? (
                <Input> 
                    <input
                        type="url"
                        placeholder="Url"
                        value={url}
                        onChange={(event) => setUrl(event.target.value)}
                        disabled={disabled}
                        required
                    />
                </Input>
                ) : ("")}
                {name=== "Cards" ? (
                <Input> 
                    <input
                        type="number"
                        placeholder="Number"
                        value={number}
                        onChange={(event) => setNumber(event.target.value)}
                        disabled={disabled}
                        maxLength={16}
                        required
                    />
                </Input>
                ) : ("")}
                {name=== "Cards" ? (
                <Input> 
                    <input
                        type="number"
                        placeholder="CVC"
                        value={cvc}
                        onChange={(event) => setCvc(event.target.value)}
                        disabled={disabled}
                        maxLength={3}
                        required
                    />
                </Input>
                ) : ("")}
                {name=== "Cards" ? (
                <Input> 
                    <input
                        type="text"
                        placeholder="Type"
                        value={type}
                        onChange={(event) => setType(event.target.value)}
                        disabled={disabled}
                        maxLength={16}
                        required
                    />
                </Input>
                ) : ("")}
            </Inputs>

            <Footer 
                message={true}
                color="rgba(155, 251, 176, 1)"
                transitionColor="green"
                iconType="checkmark"
                goTo="/new"
                goBack="/new"
            />
        </form>
        </>
    )
}

const SubTitle = styled.div`
    width: 100%; 
    display: flex; 
    justify-content: center;
    margin-top: 20px;

    span { 
        width: 97%; 
        font-size: 18px;
        font-weight: bold; 
    }

`
const Inputs = styled.div`
    width: 100%; 
    display: flex; 
    align-items: center; 
    flex-direction: column;
    margin-top: 40px;
`