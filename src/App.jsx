import { useState } from "react";
import Form from "./components/Form";
import CV from "./components/CV";
import "./App.css";





export default function App(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    function onNameChange(e){

        setName(e.target.value);
    }

    function onEmailChange(e){

        setEmail(e.target.value);
    }

    function onPhoneChange(e){

        setPhone(e.target.value);
    }

    return(
        <>
            <CV />
            <Form
            name={name}
            onNameChange={onNameChange}
            email={email}
            onEmailChange={onEmailChange}
            phone={phone}
            onPhoneChange={onPhoneChange}
            />
        </>
    )
}