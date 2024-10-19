import React, { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { useReactToPrint } from 'react-to-print';
import { Link } from 'react-router-dom';
import "../styleResume/Resume05.css"; // Make sure to create a new CSS file for Resume05

const Resume05 = () => {
    const [Image, setImage] = useState();
    const [fname, setfname] = useState();
    const [lname, setlname] = useState();
    const [jobTitle, setjobTitle] = useState();
    const [phone, setphone] = useState();
    const [email, setemail] = useState();
    const [street, setstreet] = useState();
    const [city, setcity] = useState();
    const [state, setstate] = useState();
    const [country, setcountry] = useState();
    const [postcode, setpostcode] = useState();
    const [educationHTML, seteducationHTML] = useState();
    const [ResumeDescription, setResumeDescription] = useState();
    const [ResumeSkills, setResumeSkills] = useState();
    const [experienceHTML, setexperienceHTML] = useState();
    const [projectInfoHTML, setprojectInfoHTML] = useState();

    useEffect(() => {
        setImage(localStorage.getItem("profilePhoto"));
        const personalInfo = JSON.parse(localStorage.getItem("personalDetails"));
        if (personalInfo) {
            setfname(personalInfo.firstname);
            setlname(personalInfo.lastname);
            setjobTitle(personalInfo.jobtitle);
            setphone(personalInfo.phone);
            setemail(personalInfo.email);
            setstreet(personalInfo.address);
            setcity(personalInfo.city);
            setstate(personalInfo.state);
            setcountry(personalInfo.country);
            setpostcode(personalInfo.postcode);
        }
        const education = JSON.parse(localStorage.getItem("Education"));
        populateEducation(education);
        setResumeDescription(localStorage.getItem("ResumeDescription"));
        const experience = JSON.parse(localStorage.getItem("ProfessionalExperience"));
        populateExperience(experience);
        const skills = JSON.parse(localStorage.getItem('skills'));
        populateSkills(skills);
        const projectInfo = JSON.parse(localStorage.getItem('projectInfo'));
        populateProject(projectInfo);
    }, []);

    const populateSkills = (skills) => {
        if (skills && skills[0]?.skill !== "") {
            setResumeSkills(
                <div className="skills-container">
                    <h3 className="section-title">Skills</h3>
                    <ul className='skill-list'>
                        {skills.map((sk, index) => (
                            <li className="skill-item" key={index}>{sk.skill}</li>
                        ))}
                    </ul>
                </div>
            );
        }
    }

    const populateExperience = (experience) => {
        if (experience && experience[0]?.WorkSummary) {
            setexperienceHTML(
                <div className="experience-section">
                    <h3 className="section-title">Experience</h3>
                    {experience.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="job-title">
                                <label>{exp.PositionTitle}</label>
                            </div>
                            <div className='company-name'>
                                <span>{exp.CompanyName}</span>
                            </div>
                            <div className="duration">
                                <span className="start-date">{exp.StartDate}</span><span>-</span><span className="end-date">{exp.EndDate}</span>
                            </div>
                            <div className="description">{exp.WorkSummary}</div>
                        </div>
                    ))}
                </div>
            );
        }
    }

    const populateEducation = (education) => {
        if (education && education[0]?.schname) {
            seteducationHTML(
                <div className="education-section">
                    <h3 className="section-title">Education</h3>
                    <ul className="education-list">
                        {education.map((edu, index) => (
                            <li key={index}>
                                <h4>{edu.deg} in {edu.field}</h4>
                                <div>{edu.edustrdate} - {edu.eduendate}</div>
                                <div>{edu.schname}</div>
                                <div>{edu.schloc}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }

    const populateProject = (projectInfo) => {
        if (projectInfo && projectInfo[0]?.projectTitle) {
            setprojectInfoHTML(
                <div className="project-section">
                    <h3 className="section-title">Projects</h3>
                    {projectInfo.map((prj, index) => (
                        <div className="project-item" key={index}>
                            <div className="project-title">{prj.projectTitle}</div>
                            <div className="project-description">{prj.projectDesc}</div>
                        </div>
                    ))}
                </div>
            );
        }
    }

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const downloadImage = () => {
        html2canvas(componentRef.current).then(canvas => {
            const link = document.createElement('a');
            link.download = 'resume.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    }
    const [links, setLinks] = useState({
        linkedin: "",
        github: "",
        additionalLinks: [],
      });
    
      useEffect(() => {
        // Load links from local storage
        const linkedin = localStorage.getItem("LinkedInLink") || "";
        const github = localStorage.getItem("GitHubLink") || "";
        const linkCount = parseInt(localStorage.getItem("linkCount"), 10) || 0;
        const additionalLinks = [];
    
        for (let i = 0; i < linkCount; i++) {
          const link = localStorage.getItem(`AdditionalLink${i}`) || "";
          if (link) additionalLinks.push(link);
        }
    
        setLinks({ linkedin, github, additionalLinks });
      }, []);
    return (
        <div className="resume-container">
            <div className="resume" ref={componentRef}>
                <div className="header">
                    <div className="profile-picture">
                        <img src={Image} alt="" />
                    </div>
                    <div className="name-title">
                        <h1>{fname} {lname}</h1>
                        <h2>{jobTitle}</h2>
                   
                        </div>
                </div>
                <div className="contact-info">
                    <p>{phone}</p>
                    <p>{email}</p>
                    <p>{street}, {city}, {state}, {country} - {postcode}</p>
                </div>
                <div className="resume-description">
                    <p>{ResumeDescription}</p>
                </div>
                {ResumeSkills}
                {experienceHTML}
                {educationHTML}
                {projectInfoHTML}
                <div className="boxt02">
                <h4 className="titlet02 mx-3 mt-3">Important Links</h4>
                <ul className="leftsidelistt02">
                  <li>
                    <span className="icont02">
                      <i className="fab fa-linkedin" aria-hidden="true"></i>
                    </span>
                    <span className="textt02">
                      <a
                        href={links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={links.linkedin || ""}
                      >
                        {links.linkedin ? links.linkedin : "LinkedIn Profile"}
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="icont02">
                      <i className="fab fa-github" aria-hidden="true"></i>
                    </span>
                    <span className="textt02">
                      <a
                        href={links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={links.github || ""}
                      >
                        {links.github ? links.github : "GitHub Profile"}
                      </a>
                    </span>
                  </li>
                  {links.additionalLinks.map((link, index) => (
                    <li key={index}>
                      <span className="icont02">
                        <i
                          className="fas fa-external-link-alt"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span className="textt02">
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={link}
                        >
                          {link}
                        </a>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="button-container">
            <div className="container" style={{ "width": "100%", "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", marginTop: "40px", "gap": "30px" }}>


<Link to="/resumeform1" k><button id='eidtForm' type="button" className="btn btn-success business01-btn">EDIT FORM</button></Link>

<button onClick={downloadImage} type="button" className="btn btn-success business01-btn">Download Image</button>

</div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    fontFamily: "kanit",
                    marginBottom: "20px",
                    marginTop: "30px"

                }}
            >
                <Link
                    to="/resume04"
                    class="btn btn-outline-danger"
                    style={{ marginRight: "50px", width: "180px", fontSize: "18px" }}
                >
                    Back
                </Link>

                <Link
                     to="/resumeava05"
                    class="btn btn-outline-success"
                    style={{ width: "180px", fontSize: "18px" }}
                >
                    Next
                </Link>
            </div>
        </div>
    );
}

export default Resume05;
