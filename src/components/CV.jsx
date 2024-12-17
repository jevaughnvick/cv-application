export default function CV({
                            name,
                            email,
                            phone,
                            school,
                            programme,
                            programmeStartDate,
                            programmeEndDate,
                            company,
                            position,
                            description,
                            jobStartDate,
                            jobEndDate,
                            onEdit
}){

    return (
        <div id="cv" className="">
            <section>
                <h1>
                    {name}
                </h1>
                <h3>{position}</h3>
                <div className="section-one-info">
                    <p>{phone}</p>
                    <p>{email}</p>
                </div>
            </section>
            <section>
                <h2>Education</h2>
                <h4>Institution</h4>
                <p>{school}</p>
                <h4>Programme</h4>
                <p>{programme}</p>
                <h4>Programme Duration</h4>
                <p>{programmeStartDate + " " + programmeEndDate}</p>
            </section>
            <section>
                <h2>Professional Experience</h2>
                <h4>Company</h4>
                <p>{company}</p>
                <h4>Profession</h4>
                <p>{position}</p>
                <h4>Job Description</h4>
                <p>{description}</p>
                <h4>Employment Duration</h4>
                <p>{jobStartDate + " " + jobEndDate}</p>
            </section>
            <div className="btn-parent">
                <button onClick={onEdit}>Edit</button>
            </div>
        </div>
    )
}