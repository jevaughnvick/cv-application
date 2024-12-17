import { useState } from "react"

export default function Form({ 
                            name,
                            onNameChange,
                            email,
                            onEmailChange,
                            phone,
                            onPhoneChange
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
                    <input type="text" />
                </label>
                <label >
                    Programme:{" "}
                    <input type="text" />
                </label>
                <label >
                    Programme Start Date:{" "}
                    <input type="date" />
                </label>
                <label >
                    Programme End Date:{" "}
                    <input type="date" />
                </label>
            </fieldset>
            <fieldset>
                <legend>Profession</legend>
                <label >
                    Company Name:{" "}
                    <input type="text" />
                </label>
                <label >
                    Position:{" "}
                    <input type="text" />
                </label>
                <label >
                    Job Description:{" "}
                    <input type="text" />
                </label>
                <label >
                    Job Start Date:{" "}
                    <input type="date" />
                </label>
                <label >
                    Job End Date:{" "}
                    <input type="date" />
                </label>
            </fieldset>
            <div className="submit-parent">
                <input type="submit" value="Generate CV" />
            </div>
        </form>
    )
}