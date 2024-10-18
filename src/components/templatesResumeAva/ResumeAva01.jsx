import React, { useRef, useState, useEffect } from 'react'
import { useReactToPrint } from 'react-to-print'
import html2canvas from 'html2canvas';
import { Link } from 'react-router-dom';
import "../styleResume/Resume01.css"
import Navbar from '../Navbar';
import Footer from '../Footer';

const ResumeAva01 = () => {
  document.body.style.background = "white";

  const [Image, setImage] = useState()
  const [fname, setfname] = useState()
  const [lname, setlname] = useState()
  const [jobTitle, setjobTitle] = useState()
  const [phone, setphone] = useState()
  const [email, setemail] = useState()

  // Address info
  const [street, setstreet] = useState()
  const [city, setcity] = useState()
  const [state, setstate] = useState()
  const [country, setcountry] = useState()
  const [postcode, setpostcode] = useState()

  // Educational details 
  const [educationHTML, seteducationHTML] = useState()

  // Summary
  const [ResumeDescription, setResumeDescription] = useState()

  // Skills 
  const [ResumeSkills, setResumeSkills] = useState()

  // Experience
  const [experienceHTML, setexperienceHTML] = useState()

  // Project info
  const [projectInfoHTML, setprojectInfoHTML] = useState()

  // Check for mobile view
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
    // Image photo 
    setImage(localStorage.getItem("profilePhoto"));

    // Fetch objs from storage 
    const personalInfo = JSON.parse(localStorage.getItem("personalDetails"))
    // Personal info
    if (personalInfo !== null) {
      setfname(personalInfo.firstname)
      setlname(personalInfo.lastname)
      setjobTitle(personalInfo.jobtitle)

      // Contact info
      setphone(personalInfo.phone)
      setemail(personalInfo.email)

      // Address info
      setstreet(personalInfo.address)
      setcity(personalInfo.city)
      setstate(personalInfo.state)
      setcountry(personalInfo.country)
      setpostcode(personalInfo.postcode)
    }

    // Educational info
    const education = JSON.parse(localStorage.getItem("Education"));
    populateEducation(education)

    // Summary
    setResumeDescription(localStorage.getItem("ResumeDescription"));

    // Experience
    const experience = JSON.parse(localStorage.getItem("ProfessionalExperience"))
    populateExperience(experience);

    // Skills
    const skills = JSON.parse(localStorage.getItem('skills'));
    populateSkills(skills)

    // Project Info
    const projectInfo = JSON.parse(localStorage.getItem('projectInfo'));
    populateProject(projectInfo);
  }, [])

  const populateSkills = (skills) => {
    if (skills[0].skill !== "") {
      setResumeSkills(
        <>
          <div className="boxt01" id="Skillst01">
            <div className="skillst02">
              <h3 className="titlet01">Skills</h3>
              <ul className='skilllistt01'>
                {skills.map((sk, index) => (
                  <li className="listitemt01" key={index}>{sk.skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )
    }
  }

  const populateExperience = (experience) => {
    if (experience[0].WorkSummary !== "" || experience[0].StartDate !== "" || experience[0].PositionTitle !== "" || experience[0].EndDate !== "" || experience[0].CompanyName !== "") {
      setexperienceHTML(
        <>
          <div className="boxt01" id="experiencet01" >
            <h3 className="title1t01">Experience</h3>
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="jobtitlet01">
                  <label>{exp.PositionTitle}</label>
                </div>
                <div className='companynamet01'>
                  <span>{exp.CompanyName}</span>
                </div>
                <div className="durationt01">
                  <span className="startdatet01">{exp.StartDate}</span><span>-</span><span className="lastdate">{exp.EndDate}</span>
                </div>
                <div className="descriptiont01">{exp.WorkSummary}</div>
              </div>
            ))}
          </div>
        </>
      )
    }
  }

  const populateEducation = (education) => {
    if (education[0].schname !== "" || education[0].schloc !== "" || education[0].field !== "" || education[0].edustrdate !== "" || education[0].eduendate !== "" || education[0].deg !== "") {
      seteducationHTML(
        <>
          <div className='boxt01' id="Educationt01">
            <h3 className="title1t01" id="educatetitlet01" >Education</h3>
            <ul className="rightsidelistt01">
              {education.map((edu, index) => (
                <li key={index}>
                  <div>
                    <h4><span>{edu.deg}</span> in <span>{edu.field}</span></h4>
                  </div>
                  <div><span>{edu.edustrdate}</span>-<span>{edu.eduendate}</span></div>
                  <div>{edu.schname}</div>
                  <div>{edu.schloc}</div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )
    }
  }

  const populateProject = (projectInfo) => {
    if (projectInfo[0].projectTitle !== "" || projectInfo[0].projectDesc !== "") {
      setprojectInfoHTML(
        <>
          <div className="boxt01" id="projectt01">
            <h3 className="titlet01" id="protitt01" >Project</h3>
            <ol>
              {projectInfo.map((prj, index) => (
                <div className="Pro1t01" key={index}>
                  <div className="protitlet01 line-spacing">{prj.projectTitle}</div>
                  <div className="prodescript01 line-spacing">{prj.projectDesc} </div>
                </div>
              ))}
            </ol>
          </div>
        </>
      )
    }
  }

  const table = document.getElementById('resumet01');

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const downloadImage = () => {
    html2canvas(table).then(function (canvas) {
      const link = document.createElement('a');
      link.download = 'business.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  }


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

  const avatarImage = localStorage.getItem('avatarImage');
  return (
    <>
      <div className="containert01">
        <div className='resumet01' ref={componentRef} id="resumet01">
        <div className='leftt01'>
        <div className='imgcontainert01'>
              <img className='userPhotot01' src={avatarImage} alt="User Avatar" />
            </div>
      <div className='fullnameAndPostt01'>
        <div className='namet01'>
          <span className='fullNamet01'>
            <span>{fname}</span>&nbsp;<span>{lname}</span>
          </span>
        </div>
        <div className='positiont01'>
          <span className='post01'>{jobTitle}</span>
        </div>
      </div>
      <div className='boxt01' id="contactinfot01">
        <h3 className="titlet01">Contact</h3>
        <ul className="leftsidelistt01">
          <li>
            <span className="icont01" id="icon1t01">
              <i className="fa fa-phone" aria-hidden="true"></i>
            </span>
            <span className="textt01">{phone}</span>
          </li>
          <div className='list2t01'>
            <li>
              <span className="icont01" id="icon2t01">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </span>
              <span className="text2t01">{email}</span>
            </li>
          </div>
          <div className='list4t01'>
            <li>
              <span className="icont01" id="icon4t01">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </span>
              <span className="text4t01">{street}, {city}, {state}, {country}, {postcode}</span>
            </li>
          </div>
        </ul>
      </div>
      <div className='boxt01'>
  <h3 className="titlet01">Important Links</h3>
  <ul className="leftsidelistt01">
    <li>
      <span className="icont01"><i className="fab fa-linkedin" aria-hidden="true"></i></span>
      <span className="textt01">
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer" title={links.linkedin || ''}>
          {links.linkedin ? links.linkedin : 'LinkedIn Profile'}
        </a>
      </span>
    </li>
    <li>
      <span className="icont01"><i className="fab fa-github" aria-hidden="true"></i></span>
      <span className="textt01">
        <a href={links.github} target="_blank" rel="noopener noreferrer" title={links.github || ''}>
          {links.github ? links.github : 'GitHub Profile'}
        </a>
      </span>
    </li>
    {links.additionalLinks.map((link, index) => (
      <li key={index}>
        <span className="icont01"><i className="fas fa-external-link-alt" aria-hidden="true"></i></span>
        <span className="textt01">
          <a href={link} target="_blank" rel="noopener noreferrer" title={link}>
            {link}
          </a>
        </span>
      </li>
    ))}
  </ul>
</div>


      {ResumeSkills}
    </div>

    <div className='rightt01'>
  <div className='boxt01' id="summart01">
    <h3 className="titlet01">Summary</h3>
    <div className='descriptiont01'>{ResumeDescription}</div>
  </div>
  <div className="section-spacing">
    {experienceHTML}
  </div>
  <div className="section-spacing">
    {educationHTML}
  </div>
  <div className="section-spacing">
    {projectInfoHTML}
  </div>
</div>

        </div>
      </div>

      {/* Buttons to print the document */}
      <div className="container" style={{ "width": "100%", "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", marginTop: "40px", "gap": "30px" }}>
        <Link to="/resumeform1"><button id='editForm' type="button" className="btn btn-success business01-btn">EDIT FORM</button></Link>
  
        <button onClick={downloadImage} type="button" className="btn btn-success business01-btn">Download Image</button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", fontFamily: "kanit", marginBottom: "30px", marginTop: "30px" }}>
        <Link to="/resumeform06" className="btn btn-outline-danger" style={{ marginRight: "50px", width: "180px", fontSize: "18px" }}>Back</Link>
        <Link to="/resumeAva02" className="btn btn-outline-success" style={{ width: "180px", fontSize: "18px" }}>Next</Link>
      </div>
    </>
  )
}

export default ResumeAva01;
