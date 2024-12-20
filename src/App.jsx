import { useState } from "react";
import Form from "./components/Form";
import CV from "./components/CV";
import "./App.css";


// if(document.getElementById("cv").classList.contains("hidden")){

//     document.getElementById("cv").classList.remove("hidden");
// }


export default function App(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [school, setSchool] = useState("");
    const [programme, setProgramme] = useState("");
    const [programmeStartDate, setProgrammeStartDate] = useState("");
    const [programmeEndDate, setProgrammeEndDate] = useState("");
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [description, setDescription] = useState("");
    const [jobStartDate, setJobStartDate] = useState("");
    const [jobEndDate, setJobEndDate] = useState("");
    const [showcv, setShowcv] = useState(false);
    const [showForm, setShowForm] = useState(true);




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

    function onCompanyChange(e){

        setCompany(e.target.value);
    }

    function onPositionChange(e){

        setPosition(e.target.value);
    }

    function onDescriptionChange(e){

        setDescription(e.target.value);
    }

    function onJobStartDateChange(e){

        setJobStartDate(e.target.value);
    }

    function onJobEndDateChange(e){

        setJobEndDate(e.target.value);
    }

    function onSubmit(e){

        e.preventDefault();
        
        if(!(name && email && phone && school && programme && company && position)){

            alert("Please fill in all details.");
            return;
        }
        
        window.scrollTo(0, 0);
        setShowcv(true);
        setShowForm(false);
    }

    function onEdit(){

        window.scrollTo(0, 0);
        setShowcv(false);
        setShowForm(true);
    }

    return(
        <>
            {showcv && <CV 
            name={name}
            email={email}
            phone={phone}
            school={school}
            programme={programme}
            programmeStartDate={programmeStartDate}
            programmeEndDate={programmeEndDate}
            company={company}
            position={position}
            description={description}
            jobStartDate={jobStartDate}
            jobEndDate={jobEndDate}
            onEdit={onEdit}
            />}
            {showForm && <Form
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
            company={company}
            onCompanyChange={onCompanyChange}
            position={position}
            onPositionChange={onPositionChange}
            description={description}
            onDescriptionChange={onDescriptionChange}
            jobStartDate={jobStartDate}
            onJobStartDateChange={onJobStartDateChange}
            jobEndDate={jobEndDate}
            onJobEndDateChange={onJobEndDateChange}
            onSubmit={onSubmit}
            />}
        </>
    )
}