import React, { useRef, useState, useEffect } from 'react'
import html2canvas from 'html2canvas'
import '../styleResume/Resume02.css'
import { useReactToPrint } from 'react-to-print'
import { Link } from 'react-router-dom';

const Resume02 = () => {

    document.body.style.background = "white";

    const [Image, setImage] = useState()
    const [fname, setfname] = useState()
    const [lname, setlname] = useState()
    const [jobTitle, setjobTitle] = useState()
    const [phone, setphone] = useState()
    const [email, setemail] = useState()

    //address info
    const [street, setstreet] = useState()
    const [city, setcity] = useState()
    const [state, setstate] = useState()
    const [country, setcountry] = useState()
    const [postcode, setpostcode] = useState()

    //educational details 
    const [educationHTML, seteducationHTML] = useState()

    //summary
    const [ResumeDescription, setResumeDescription] = useState()

    //skills 
    const [ResumeSkills, setResumeSkills] = useState()

    //Experience
    const [experienceHTML, setexperienceHTML] = useState()

    //Project info
    const [projectInfoHTML, setprojectInfoHTML] = useState()
    const [alertShown, setAlertShown] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && !alertShown) {
        alert('For a better experience, please switch to desktop mode.');
        setAlertShown(true);
      }
    };

    // Initial check
    handleResize();
    
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [alertShown]);
    useEffect(() => {
        // Alert for mobile users
        

        //image photo 
        setImage(localStorage.getItem("profilePhoto"));

        //fetch objs from storage 
        const personalInfo = JSON.parse(localStorage.getItem("personalDetails"))
        //personal info
        if (personalInfo !== null) {
            setfname(personalInfo.firstname)
            setlname(personalInfo.lastname)
            setjobTitle(personalInfo.jobtitle)

            //contact info
            setphone(personalInfo.phone)
            setemail(personalInfo.email)

            //address info
            setstreet(personalInfo.address)
            setcity(personalInfo.city)
            setstate(personalInfo.state)
            setcountry(personalInfo.country)
            setpostcode(personalInfo.postcode)
        }

        //educational info
        const education = JSON.parse(localStorage.getItem("Education"));
        populateEducation(education)

        //summary
        setResumeDescription(localStorage.getItem("ResumeDescription"));

        //Experience
        const experience = JSON.parse(localStorage.getItem("ProfessionalExperience"))
        populateExperience(experience);

        //skills
        const skills = JSON.parse(localStorage.getItem('skills'));
        populateSkills(skills)

        //project Info
        const projectInfo = JSON.parse(localStorage.getItem('projectInfo'));
        populateProject(projectInfo);
    }, [])

    const populateSkills = (skills) => {
        if (skills[0].skill !== "") {
            setResumeSkills(
                <>
                    <div className="skillst02">
                        <div className="skillsTitlet02">Technical Skills</div>
                        {skills.map((sk, index) => (
                            <ul key={index}>
                                <li>{sk.skill}</li>
                            </ul>
                        ))}
                    </div>
                </>
            )
        }
    }

    const populateExperience = (experience) => {
        if (experience[0].WorkSummary !== "" || experience[0].StartDate !== "" || experience[0].PositionTitle !== "" || experience[0].EndDate !== "" || experience[0].ComponyName !== "") {
            setexperienceHTML(
                <>
                    <div className="expTitlet02">Professional Experience</div>
                    {experience.map((exp, index) => (
                        <div key={index}>
                            <div className="expCard">
                                <div className="Postt02">{exp.PositionTitle}</div>
                                <div><span>{exp.StartDate}</span> to <span>{exp.EndDate}</span></div>
                                <div>Experienced <span>{exp.PositionTitle}</span>at <span>{exp.CompanyName}</span></div>
                                <div>{exp.WorkSummary}</div>
                            </div>
                        </div>
                    ))}
                </>
            )
        }
    }

    const populateEducation = (education) => {
        if (education[0].schname !== "" || education[0].schloc !== "" || education[0].field !== "" || education[0].edustrdate !== "" || education[0].eduendate !== "" || education[0].deg !== "") {
            seteducationHTML(
                <>
                    <div className="eduTitlet02">Education</div>
                    <ul className="leftsidelistt01">
                        {education.map((edu, index) => (
                            <div key={index} className="eduCard">
                                <div><span>{edu.deg}</span> in <span>{edu.field}</span></div>
                                <div><span>{edu.edustrdate}</span> - <span>{edu.eduendate}</span></div>
                                <div>{edu.schloc}</div>
                                <span>{edu.schname}</span><div className='mb-3'></div>
                            </div>
                        ))}
                    </ul>
                </>
            )
        }
    }

    const populateProject = (projectInfo) => {
        if (projectInfo[0].projectTitle !== "" || projectInfo[0].projectDesc !== "") {
            setprojectInfoHTML(
                <>
                    <div className="projectTitlet02">Projects Work</div>
                    <ol>
                        {projectInfo.map((prj, index) => (
                            <li key={index}>
                                <div className="projectCard">
                                    <div className="prjName">{prj.projectTitle}</div>
                                    <div className="prjDesc">{prj.projectDesc}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </>
            )
        }
    }

    const downloadImage = () => {
        const layoutToPrint = document.getElementById('resumeLayoutT02');

        html2canvas(layoutToPrint).then(function (canvas) {
            const link = document.createElement('a');
            link.download = 'business.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    }

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

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
        <>
            <div className="containert02">
                <div className="resumet02" id="resumeLayoutT02" ref={componentRef} >
                    <div className="leftt02">
                        <div className="imgcontainert02">
                            <img className="userPhotot02" src={Image} alt="" />
                        </div>
                        <div className="fullnameAndPost">
                            <div className="fullnamet02">
                                <div className="firstNamet02 Namet02">{fname}</div>
                                <div className="lastNamet02 Namet02">{lname}</div>
                            </div>
                            <div className="jobtitlet02">{jobTitle}</div>
                        </div>
                        {/* contact container */}
                        <div className="contactDetailst02">
                            <div className="contactTitlet02">CONTACT INFO</div>
                            <div className="iconImg phoneNumbert02 item-align-row-t02">
                                <span className="material-symbols-outlined">call</span>
                                <div style={{ marginLeft: "5px" }}>{phone}</div>
                            </div>
                            <div className="iconImg emailAddresst02 item-align-row-t02">
                                <span className="material-symbols-outlined">mail</span>
                                <span style={{ width: "200px", marginLeft: "5px" }}>{email}</span>
                            </div>
                            <div className="addresst02 item-align-row-t02">
                                <span className="iconImg material-symbols-outlined">home</span>
                                <div style={{ width: "230px", marginLeft: "5px" }}>
                                    <span>{street}</span>, <span>{city}</span><span>, </span><span>{state}</span>, <span>{country}</span><span>{postcode}</span>
                                </div>
                            </div>
                        </div>




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

                        {/* skills */}
                        {ResumeSkills}

                        {/* project Info */}
                       
                    </div>
                    <div className="rightt02">
                        <div className="rightUpt02">
                            <div className="summaryCardt02">
                                <div className='SummaryTitlet02'>SUMMARY</div>
                                <p className="summaryT02">{ResumeDescription}</p>
                            </div>
                        </div>
                        <div className="rightDownt02">
                            {/* experience */}
                            <div className="expirenceDetailst02">
                                {experienceHTML}
                            </div>

                            {/* education */}
                            <div className="educationalDetailst02">
                                {educationHTML}
                            </div>
                            <div className="projectDetailst02">
                            {projectInfoHTML}
                        </div>
                        </div>
                    </div>
                </div>

                 {/* buttons to print the document */}
                <div className="container" style={{ "width": "100%", "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", marginTop: "50px", "gap": "30px" }}>


                    <Link to="/resumeform1" k><button id='eidtForm' type="button" className="btn btn-success business01-btn">EDIT FORM</button></Link>
             
                    <button onClick={downloadImage} type="button" className="btn btn-success business01-btn">Download Image</button>

                </div>

            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    fontFamily: "kanit",
                    marginBottom: "20px"
                }}
            >
                <Link
                    to="/resume01"
                    class="btn btn-outline-danger"
                    style={{ marginRight: "50px", width: "180px", fontSize: "18px" }}
                >
                    Back
                </Link>

                <Link
                    to="/resume03"
                    class="btn btn-outline-success"
                    style={{ width: "180px", fontSize: "18px" }}
                >
                    Next
                </Link>
            </div>
        </>
    )
}

export default Resume02