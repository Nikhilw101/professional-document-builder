import React, { useRef, useState, useEffect } from 'react'
import html2canvas from 'html2canvas';
import { useReactToPrint } from 'react-to-print';
import "../styleResumeAva/ResumeAva03.css"
import { Link } from 'react-router-dom';

const ResumeAva03 = () => {

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

    useEffect(() => {
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
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 768) {
            alert('For a better experience, please switch to desktop mode.');
          }
        };
    
        // Initial check
        handleResize();
        
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    const populateSkills = (skills) => {
        if (skills[0].skill !== "") {
            setResumeSkills(
                <>
                    <div className="boxt03" id="Skillst03">
                        <h3 className="titlet03" id="Skillstitlet03">Skills</h3>
                        <ul className='skilllistt01'>

                            {skills.map((sk, index) => (

                                <li className="listitemt01">{sk.skill}</li>

                            ))}
                        </ul>
                    </div>
                </>
            )
        }
    }

    const populateExperience = (experience) => {
        if (experience[0].WorkSummary !== "" || experience[0].StartDate !== "" || experience[0].PositionTitle !== "" || experience[0].EndDate !== "" || experience[0].ComponyName !== "") {
            setexperienceHTML(
                <>
                    <h3 className="titlet03" id="expertitlet03">Experience</h3>
                    {experience.map((exp, index) => (
                        <div key={index} className="experienceblock">
                            <div>
                                <div className="jobtitlet03">
                                    <label>{exp.PositionTitle}</label>
                                </div>
                                <div className='companynamet03'>
                                    <span>{exp.CompanyName}</span>
                                </div>
                                <div className="durationt03">
                                    <span className="startdatet03">{exp.StartDate}</span><span>-</span><span className="lastdatet03">{exp.EndDate}</span>
                                </div>
                                <div className="descriptiont03">{exp.WorkSummary}</div>
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
                    <h3 className="titlet03" id="educationtitlet03" >Education</h3>
                    <ul class="leftsidelist1t03">
                        {education.map((edu, index) => (
                            <li>
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
            )
        }
    }

    const populateProject = (projectInfo) => {
        if (projectInfo[0].projectTitle !== "" || projectInfo[0].projectDesc !== "") {
            setprojectInfoHTML(
                <>
                    <div className="boxt03" id="projectt03">
                        <h3 className="titlet03" id="protitt03" >Project</h3>
                        <div className="projectsListt03">
                            {projectInfo.map((prj, index) => (
                                <div className="Pro1t03">
                                    <div className="protitlet03">{prj.projectTitle}</div>
                                    <div className="prodescript03">{prj.projectDesc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )
        }
    }

    const table = document.getElementById('resumet03');

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
    const avatarImage = localStorage.getItem('avatarImage');

    return (<>
        <div className="containert03">

            <div className="resumet03" ref={componentRef} id="resumet03">

                <div className='upperpartt03'>
                    <div className='imgcontainert03'>
                        <img className='userPhotot03' src={avatarImage} alt="avatarImage" />
                    </div>

                    <div className='fullnameAndPostt03'>

                        <div className='namet03'>
                            <span className='fullNamet03'><span>{fname}</span>&nbsp;<span>{lname}</span></span>
                        </div>

                        <div className='positiont03'>
                            <span className='post03'>{jobTitle}</span>
                        </div>
                    </div>

                    <div className='boxt03' id="contactinfot03" >
                        <h3 className="titlet03">Contact</h3>

                        <ul classname="leftsidelistt03">
                            <li>
                                <span className="icont03" id="icon1t03"><i class="fa fa-phone" aria-hidden="true"></i></span>
                                <span className="text1t03">{phone}</span>
                            </li>
                            <li className='list2t03'>
                                <span className="icont03" id="icon2t03"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                                <span className="text2t03">{email}</span>
                            </li>
                            {/* <li className='list3itemt03'>
                <span className="icont03" id="icon3t03"><i class="fa fa-linkedin-square" aria-hidden="true"></i></span>
                <span className="text3t03">www.linked.com </span>
              </li> */}
                            <li className='list4t03'>
                                <span className="icont03" id="icon4t03"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                                <div className='addrest03'>
                                    <span className="text4t03" ><span>{street}</span>, <span>{city}</span><span>, </span><span>{state}</span>, <span>{country}</span>&nbsp;(<span>{postcode}</span>)</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="lowerpartt03">

                    <div className="leftsidet03">
                        <div className='boxt03' id="Educationt03">
                            {/* <h3 className="titlet03" id="educationtitlet03" >Education</h3> */}
                            {/* <ul class="leftsidelist1t03">
                                <li>
                                    <div>
                                        <h4>Masters degree in computer science</h4>
                                    </div>
                                    <div>2011-2013</div>
                                    <div>d.y.patil university</div>
                                    <div>123 Anywhere st, Any city</div>
                                </li>
                                 
                            </ul> */}
                            {educationHTML}
                        </div>

                        {/* <div className="boxt03" id="Skillst03">
                            <h3 className="titlet03" id="Skillstitlet03">Skills</h3>
                            <ul className='skilllistt01'>
                                <li className="listitemt01">problem solving</li>
                            </ul>
                        </div> */}
                        {ResumeSkills}

                    </div>

                    <div className="rightsidet03">
                        <div className="boxt03" id="summaryboxt03" >
                            <h3 className="titlet03" id="summarytitlet03">Summary</h3>
                            <div id="summaryt03" >{ResumeDescription}</div>
                        </div>

                        <div className="boxt03" id="experiencet03" >
                            {/* <h3 className="titlet03" id="expertitlet03">Experience</h3> */}
                            {/* <div className="experienceblock">
                                <div className="jobtitlet03">
                                    <label>Full stack developer</label>
                                </div>
                                <div className='companynamet03'>
                                    <span>infosys | </span><span>123,pune shivaji road</span>
                                </div>
                                <div className="durationt03">
                                    <span className="startdatet03">2021</span><span>-</span><span className="lastdatet03">present</span>
                                </div>
                                <div className="descriptiont03">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cumque fugit praesentium quisquam neque adipisci quidem placeat similique molestias? Velit.</div>
                            </div> */}
                            {experienceHTML}
                        </div>

                        {/* project info */}
                        {projectInfoHTML}

                        {/* <div className="boxt03" id="projectt03"> */}
                        {/* <h3 className="titlet03" id="protitt03" >Project</h3> */}
                        {/* <div className="projectsListt03">
                                <div className="Pro1t03">
                                    <div className="protitlet03">data structure library</div>
                                    <div className="prodescript03">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, vero?</div>
                                </div>

                                <div className="pro2t03">
                                    <div className='protitlet03'>chatbot</div>
                                    <div className="prodescript03">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur repellendus incidunt fuga impedit veniam.</div>
                                </div>
                            </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
            {/* buttons to print the document */}
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
                    to="/resumeava02"
                    class="btn btn-outline-danger"
                    style={{ marginRight: "50px", width: "180px", fontSize: "18px" }}
                >
                    Back
                </Link>

                <Link

                    class="btn btn-outline-success"
                    style={{ width: "180px", fontSize: "18px" }}
                >
                    Next
                </Link>
            </div>

        </div >

    </>
    )
}

export default ResumeAva03