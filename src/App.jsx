import { useState } from "react";
import Form from "./components/Form";
import CV from "./components/CV";
import "./App.css";





export default function App(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [school, setSchool] = useState("");
    const [programme, setProgramme] = useState("");
    const [programmeStartDate, setProgrammeStartDate] = useState("");
    const [programmeEndDate, setProgrammeEndDate] = useState("");


    function onNameChange(e){

        setName(e.target.value);
    }

    function onEmailChange(e){

        setEmail(e.target.value);
    }

    function onPhoneChange(e){

        setPhone(e.target.value);
    }

    function onSchoolChange(e){

        setSchool(e.target.value);
    }

    function onProgrammeChange(e){
        
        setProgramme(e.target.value);
    }

    function onProgrammeStartDateChange(e){
        
        setProgrammeStartDate(e.target.value);
    }

    function onProgrammeEndDateChange(e){
        
        setProgrammeEndDate(e.target.value);
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
            school={school}
            onSchoolChange={onSchoolChange}
            programme={programme}
            onProgrammeChange={onProgrammeChange}
            programmeStartDate={programmeStartDate}
            onProgrammeStartDateChange={onProgrammeStartDateChange}
            programmeEndDate={programmeEndDate}
            onProgrammeEndDateChange={onProgrammeEndDateChange}
            />
        </>
    )
}