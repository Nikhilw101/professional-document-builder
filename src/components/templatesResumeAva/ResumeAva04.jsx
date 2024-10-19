import React, { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { useReactToPrint } from 'react-to-print';
import "../styleResumeAva/ResumeAva04.css";
import { Link } from 'react-router-dom';

const ResumeAva04 = () => {
    document.body.style.background = "white";

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
        // Fetch the image from local storage
        setImage(localStorage.getItem("profilePhoto"));

        // Fetch personal info from local storage
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

        // Educational info
        const education = JSON.parse(localStorage.getItem("Education"));
        populateEducation(education);

        // Summary
        setResumeDescription(localStorage.getItem("ResumeDescription"));

        // Experience
        const experience = JSON.parse(localStorage.getItem("ProfessionalExperience"));
        populateExperience(experience);

        // Skills
        const skills = JSON.parse(localStorage.getItem('skills'));
        populateSkills(skills);

        // Project info
        const projectInfo = JSON.parse(localStorage.getItem('projectInfo'));
        populateProject(projectInfo);
    }, []);

    const populateSkills = (skills) => {
        if (skills && skills[0]?.skill !== "") {
            setResumeSkills(
                <div className="boxt04" id="Skillst04">
                    <h3 className="titlet04" id="Skillstitlet04">Skills</h3>
                    <ul className='skilllistt01'>
                        {skills.map((sk, index) => (
                            <li className="listitemt01" key={index}>{sk.skill}</li>
                        ))}
                    </ul>
                </div>
            );
        }
    }

    const populateExperience = (experience) => {
        if (experience && experience[0]?.WorkSummary) {
            setexperienceHTML(
                <>
                    <h3 className="titlet04" id="expertitlet04">Experience</h3>
                    {experience.map((exp, index) => (
                        <div key={index} className="experienceblock">
                            <div className="jobtitlet04">
                                <label>{exp.PositionTitle}</label>
                            </div>
                            <div className='companynamet04'>
                                <span>{exp.CompanyName}</span>
                            </div>
                            <div className="durationt04">
                                <span className="startdatet04">{exp.StartDate}</span><span>-</span><span className="lastdatet04">{exp.EndDate}</span>
                            </div>
                            <div className="descriptiont04">{exp.WorkSummary}</div>
                        </div>
                    ))}
                </>
            );
        }
    }

    const populateEducation = (education) => {
        if (education && education[0]?.schname) {
            seteducationHTML(
                <>
                    <h3 className="titlet04" id="educationtitlet04">Education</h3>
                    <ul className="leftsidelist1t04">
                        {education.map((edu, index) => (
                            <li key={index}>
                                <div>
                                    <h4><span>{edu.deg}</span> in <span>{edu.field}</span></h4>
                                </div>
                                <div><span>{edu.edustrdate}</span> - <span>{edu.eduendate}</span></div>
                                <div>{edu.schname}</div>
                                <div>{edu.schloc}</div>
                            </li>
                        ))}
                    </ul>
                </>
            );
        }
    }

    const populateProject = (projectInfo) => {
        if (projectInfo && projectInfo[0]?.projectTitle) {
            setprojectInfoHTML(
                <div className="boxt04" id="projectt04">
                    <h3 className="titlet04" id="protitt04">Project</h3>
                    <div className="projectsListt04">
                        {projectInfo.map((prj, index) => (
                            <div className="Pro1t04" key={index}>
                                <div className="protitlet04">{prj.projectTitle}</div>
                                <div className="prodescript04">{prj.projectDesc}</div>
                            </div>
                        ))}
                    </div>
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
    const avatarImage = localStorage.getItem('avatarImage');


    const [links, setLinks] = useState({
        linkedin: '',
        github: '',
        additionalLinks: [],
      });
    
      useEffect(() => {
        // Load links from local storage
        const linkedin = localStorage.getItem('LinkedInLink') || '';
        const github = localStorage.getItem('GitHubLink') || '';
        const linkCount = parseInt(localStorage.getItem('linkCount'), 10) || 0;
        const additionalLinks = [];
    
        for (let i = 0; i < linkCount; i++) {
          const link = localStorage.getItem(`AdditionalLink${i}`) || '';
          if (link) additionalLinks.push(link);
        }
    
        setLinks({ linkedin, github, additionalLinks });
      }, []);


    
    return (
        <div className="containert04">
            <div className="resumet04" ref={componentRef} id="resumet04">
                <div className='upperpartt04'>
                    <div className='imgcontainert04'>
                        <img className='userPhotot04' src={avatarImage} alt="" />
                    </div>
                    <div className='fullnameAndPostt04'>
                        <div className='namet04'>
                            <span className='fullNamet04'>{fname} {lname}</span>
                        </div>
                        <div className='positiont04'>
                            <span className='post04'>{jobTitle}</span>
                        </div>
                    </div>
                    <div className='boxt04' id="contactinfot04">
                        <h3 className="titlet04">Contact</h3>
                        <ul className="leftsidelistt04">
                            <li>
                                <span className="icont04"><i className="fa fa-phone" aria-hidden="true"></i></span>
                                <span className="text1t04">{phone}</span>
                            </li>
                            <li>
                                <span className="icont04"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                                <span className="text2t04">{email}</span>
                            </li>
                            <li>
                                <span className="icont04"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                                <span className="text4t04">{street}, {city}, {state}, {country} ({postcode})</span>
                            </li>
                        </ul>
                        <div className='boxt02'>
  <h4 className="titlet02 mx-3 mt-3">Important Links</h4>
  <ul className="leftsidelistt02">
    <li>
      <span className="icont02"><i className="fab fa-linkedin" aria-hidden="true"></i></span>
      <span className="textt02">
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer" title={links.linkedin || ''}>
          {links.linkedin ? links.linkedin : 'LinkedIn Profile'}
        </a>
      </span>
    </li>
    <li>
      <span className="icont02"><i className="fab fa-github" aria-hidden="true"></i></span>
      <span className="textt02">
        <a href={links.github} target="_blank" rel="noopener noreferrer" title={links.github || ''}>
          {links.github ? links.github : 'GitHub Profile'}
        </a>
      </span>
    </li>
    {links.additionalLinks.map((link, index) => (
      <li key={index}>
        <span className="icont02"><i className="fas fa-external-link-alt" aria-hidden="true"></i></span>
        <span className="textt02">
          <a href={link} target="_blank" rel="noopener noreferrer" title={link}>
            {link}
          </a>
        </span>
      </li>
    ))}
  </ul>
</div>
                    </div>
                </div>
                <div className="lowerpartt04">
                    <div className="leftsidet04">
                        <div className='boxt04' id="Educationt04">
                            {educationHTML}
                        </div>
                        {ResumeSkills}
                    </div>
                    <div className="rightsidet04">
                        <div className="boxt04" id="summaryboxt04">
                            <h3 className="titlet04" id="summarytitlet04">Summary</h3>
                            <div id="summaryt04">{ResumeDescription}</div>
                        </div>
                        <div className="boxt04" id="experiencet04">
                            {experienceHTML}
                        </div>
                        {projectInfoHTML}
                    </div>
                </div>
            </div>
            <div className="container" style={{ "width": "100%", "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", marginTop: "40px", "gap": "30px" }}>


<Link to="/resumeform00" k><button id='eidtForm' type="button" className="btn btn-success business01-btn">EDIT FORM</button></Link>

<button onClick={downloadImage} type="button" className="btn btn-success business01-btn">Download Image</button>

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
                    to="/resumeava03"
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

export default ResumeAva04;
