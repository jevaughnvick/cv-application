import { useState } from "react"

export default function Form({ 
                            name,
                            onNameChange,
                            email,
                            onEmailChange,
                            phone,
                            onPhoneChange,
                            school,
                            onSchoolChange,
                            programme,
                            onProgrammeChange,
                            programmeStartDate,
                            onProgrammeStartDateChange,
                            programmeEndDate,
                            onProgrammeEndDateChange,
                            company,
                            onCompanyChange,
                            position,
                            onPositionChange,
                            description,
                            onDescriptionChange,
                            jobStartDate,
                            onJobStartDateChange,
                            jobEndDate,
                            onJobEndDateChange
                            }){

    return (
        <form className="">
            <fieldset>
                <legend>Personal Information</legend>
                <label >
                    Name:
                    <input type="text" value={name} onChange={onNameChange}/>
                </label>
                <label >
                    Email:{" "}
                    <input type="email" value={email} onChange={onEmailChange}/>
                </label>
                <label >
                    Phone:{" "}
                    <input type="tel" value={phone} onChange={onPhoneChange}/>
                </label>
            </fieldset>
            <fieldset>
                <legend>Education</legend>
                <label >
                    Institution:{" "}
                    <input type="text" value={school} onChange={onSchoolChange}/>
                </label>
                <label >
                    Programme:{" "}
                    <input type="text" value={programme} onChange={onProgrammeChange}/>
                </label>
                <label >
                    Programme Start Date:{" "}
                    <input type="text"
                    value={programmeStartDate}
                    onChange={onProgrammeStartDateChange}/>
                </label>
                <label >
                    Programme End Date:{" "}
                    <input type="text"
                    value={programmeEndDate}
                    onChange={onProgrammeEndDateChange}/>
                </label>
            </fieldset>
            <fieldset>
                <legend>Profession</legend>
                <label >
                    Company Name:{" "}
                    <input type="text" value={company} onChange={onCompanyChange}/>
                </label>
                <label >
                    Position:{" "}
                    <input type="text" value={position} onChange={onPositionChange}/>
                </label>
                <label >
                    Job Description:{" "}
                    <input type="text" value={description} onChange={onDescriptionChange}/>
                </label>
                <label >
                    Job Start Date:{" "}
                    <input type="text" value={jobStartDate} onChange={onJobStartDateChange}/>
                </label>
                <label >
                    Job End Date:{" "}
                    <input type="text" value={jobEndDate} onChange={onJobEndDateChange}/>
                </label>
            </fieldset>
            <div className="submit-parent">
                <input type="submit" value="Generate CV" />
            </div>
        </form>
    )
}