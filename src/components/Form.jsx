export default function Form(){

    return (
        <form className="">
            <fieldset>
                <legend>Personal Information</legend>
                <label >
                    Name:{" "}
                    <input type="text" />
                </label>
                <label >
                    Email:{" "}
                    <input type="email" />
                </label>
                <label >
                    Phone:{" "}
                    <input type="tel" />
                </label>
            </fieldset>
            <fieldset>
                <legend>Education</legend>
                <label >
                    School Name:{" "}
                    <input type="text" />
                </label>
                <label >
                    Programme:{" "}
                    <input type="email" />
                </label>
                <label >
                    Date of Study:{" "}
                    <input type="tel" />
                </label>
            </fieldset>
            <fieldset>
                <legend>Profession</legend>
                <label >
                    Company Name:{" "}
                    <input type="tel" />
                </label>
                <label >
                    Position:{" "}
                    <input type="tel" />
                </label>
                <label >
                    Job Description:{" "}
                    <input type="tel" />
                </label>
                <label >
                    Job Duration:{" "}
                    <input type="tel" />
                </label>
            </fieldset>
            <input type="submit" value="Generate CV" />
        </form>
    )
}