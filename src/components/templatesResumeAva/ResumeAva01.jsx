import React, { useRef, useState, useEffect } from "react";
// now lets import css file
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";
import "../styleResumeAva/ResumeAva01.css";

const ResumeAva01 = () => {
  document.body.style.background = "white";
  const [savedImage, setSavedImage] = React.useState(null);

  useEffect(() => {
    // Retrieve the saved image from local storage
    const imageFromLocalStorage = localStorage.getItem("savedResumeImage");
    if (imageFromLocalStorage) {
      setSavedImage(imageFromLocalStorage);
    }
  }, []);
  const [Image, setImage] = useState();
  const [fname, setfname] = useState();
  const [lname, setlname] = useState();
  const [jobTitle, setjobTitle] = useState();
  const [phone, setphone] = useState();
  const [email, setemail] = useState();

  //address info
  const [street, setstreet] = useState();
  const [city, setcity] = useState();
  const [state, setstate] = useState();
  const [country, setcountry] = useState();
  const [postcode, setpostcode] = useState();

  //educational details
  const [educationHTML, seteducationHTML] = useState();

  //summary
  const [ResumeDescription, setResumeDescription] = useState();

  //skills
  const [ResumeSkills, setResumeSkills] = useState();

  //Experience
  const [experienceHTML, setexperienceHTML] = useState();

  //Project info
  const [projectInfoHTML, setprojectInfoHTML] = useState();

  useEffect(() => {
    // Retrieve the saved image from local storage
    const imageFromLocalStorage = localStorage.getItem("savedResumeImage");
    if (imageFromLocalStorage) {
      setSavedImage(imageFromLocalStorage);
    }

    // Load personal info from local storage
    const personalInfo = JSON.parse(localStorage.getItem("personalDetails")) || {};
    setfname(personalInfo.firstname || "");
    setlname(personalInfo.lastname || "");
    setjobTitle(personalInfo.jobtitle || "");
    setphone(personalInfo.phone || "");
    setemail(personalInfo.email || "");
    setstreet(personalInfo.address || "");
    setcity(personalInfo.city || "");
    setstate(personalInfo.state || "");
    setcountry(personalInfo.country || "");
    setpostcode(personalInfo.postcode || "");

    // Educational info
    const education = JSON.parse(localStorage.getItem("Education")) || [];
    populateEducation(education);

    // Summary
    setResumeDescription(localStorage.getItem("ResumeDescription") || "");

    // Experience
    const experience = JSON.parse(localStorage.getItem("ProfessionalExperience")) || [];
    populateExperience(experience);

    // Skills
    const skills = JSON.parse(localStorage.getItem("skills")) || [];
    populateSkills(skills);

    // Project Info
    const projectInfo = JSON.parse(localStorage.getItem("projectInfo")) || [];
    populateProject(projectInfo);
  }, []);

  useEffect(() => {
    // Save the resume as an image after the component has mounted and rendered
    saveResumeAsImage();
  }, [fname, lname, jobTitle, phone, email, street, city, state, country, postcode, educationHTML, ResumeDescription, experienceHTML, ResumeSkills, projectInfoHTML]);

  const saveResumeAsImage = () => {
    html2canvas(componentRef.current).then((canvas) => {
      const dataUrl = canvas.toDataURL("image/png");
      localStorage.setItem("savedResumeImage", dataUrl); // Save image to localStorage
    });
  };


  const downloadImage22 = () => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = savedImage; // Use the saved image URL
    link.download = "saved_resume.png"; // Set the desired file name for the download
    document.body.appendChild(link); // Append link to the body (necessary for Firefox)
    link.click(); // Trigger the download
    document.body.removeChild(link); // Remove the link from the DOM
  };


  useEffect(() => {
    const handleResize = () => {
      // Reload the image when the window is resized
      const img = document.getElementById('saved-resume-image'); // Assign a unique ID to the image
      if (img) {
        img.src = img.src; // Reload the image
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const populateSkills = (skills) => {
    if (skills[0].skill !== "") {
      setResumeSkills(
        <>
          <div className="boxt01" id="Skillst01">
            <div className="skillst02">
              <h3 className="titlet01">Skills</h3>
              <ul className="skilllistt01">
                {skills.map((sk, index) => (
                  <li className="listitemt01">{sk.skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      );
    }
  };

  const populateExperience = (experience) => {
    if (
      experience[0].WorkSummary !== "" ||
      experience[0].StartDate !== "" ||
      experience[0].PositionTitle !== "" ||
      experience[0].EndDate !== "" ||
      experience[0].ComponyName !== ""
    ) {
      setexperienceHTML(
        <>
          <div className="boxt01" id="experiencet01">
            <h3 className="title1t01">Experience</h3>
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="jobtitlet01">
                  <label>{exp.PositionTitle}</label>
                </div>
                <div className="companynamet01">
                  <span>{exp.CompanyName}</span>
                </div>
                <div className="durationt01">
                  <span className="startdatet01"></span>
                  {exp.StartDate}
                  <span>-</span>
                  <span className="lastdate">{exp.EndDate}</span>
                </div>
                <div className="descriptiont01">{exp.WorkSummary}</div>
              </div>
            ))}
          </div>
        </>
      );
    }
  };

  const populateEducation = (education) => {
    if (
      education[0].schname !== "" ||
      education[0].schloc !== "" ||
      education[0].field !== "" ||
      education[0].edustrdate !== "" ||
      education[0].eduendate !== "" ||
      education[0].deg !== ""
    ) {
      seteducationHTML(
        <>
          <div className="boxt01" id="Educationt01">
            <h3 className="title1t01" id="educatetitlet01">
              Education
            </h3>
            <ul class="rightsidelistt01">
              {education.map((edu, index) => (
                <li>
                  <div>
                    <h4>
                      <span>{edu.deg}</span> in <span>{edu.field}</span>
                    </h4>
                  </div>
                  <div>
                    <span>{edu.edustrdate}</span>-<span>{edu.eduendate}</span>
                  </div>
                  <div>{edu.schname}</div>
                  <div>{edu.schloc}</div>
                </li>
              ))}
            </ul>
          </div>
        </>
      );
    }
  };

  const populateProject = (projectInfo) => {
    if (
      projectInfo[0].projectTitle !== "" ||
      projectInfo[0].projectDesc !== ""
    ) {
      setprojectInfoHTML(
        <>
          <div className="boxt01" id="projectt01">
            <h3 className="titlet01" id="protitt01">
              Project
            </h3>
            <ol>
              {projectInfo.map((prj, index) => (
                <div className="Pro1t01">
                  <div className="protitlet01">{prj.projectTitle}</div>
                  <div className="prodescript01">{prj.projectDesc}</div>
                </div>
              ))}
            </ol>
          </div>
        </>
      );
    }
  };

  const table = document.getElementById("resumet01");

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const downloadImage = () => {
    html2canvas(table).then(function (canvas) {
      const link = document.createElement("a");
      link.download = "business.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  const avatarImage = localStorage.getItem("avatarImage");

  return (
    <>
      <div className="containermain">
        <div className="containert01">
          <div className="resumet01" ref={componentRef} id="resumet01">
            <div className="leftt01">
              <div className="imgcontainert01">
                <img
                  className="userPhotot01"
                  src={avatarImage}
                  alt="User Avatar"
                />
              </div>

              <div className="fullnameAndPostt01">
                <div className="namet01">
                  <span className="fullNamet01">
                    <span>{fname}</span>&nbsp;<span>{lname}</span>
                  </span>
                </div>

                <div className="positiont01">
                  <span className="post01">{jobTitle}</span>
                </div>
              </div>

              <div className="boxt01" id="contactinfot01">
                <h3 className="titlet01">Contact</h3>

                <ul classname="leftsidelistt01">
                  <li>
                    <span className="icont01" id="icon1t01">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                    </span>
                    <span className="textt01">{phone}</span>
                  </li>
                  <div className="list2t01">
                    <li>
                      <span className="icont01" id="icon2t01">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                      </span>
                      <span className="text2t01">{email}</span>
                    </li>
                  </div>
                  {/* <li>
                  <span className="icont01" id="icon3t01"><i class="fa fa-linkedin-square" aria-hidden="true"></i></span>
                  <span className="text">www.linked.com </span>
                </li> */}
                  <div className="list4t01">
                    <li>
                      <span className="icont01" id="icon4t01">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                      </span>
                      <div className="addres">
                        <span className="textt01" id="text4t01">
                          <span>{street}</span>, <span>{city}</span>
                          <span>, </span>
                          <span>{state}</span>, <span>{country}</span>
                          <span>{postcode}</span>
                        </span>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>

              {projectInfoHTML}
              {/* <div className="boxt01" id="projectt01"> */}
              {/* <h3 className="titlet01" id="protitt01" >Project</h3> */}
              {/* <div className="projectsListt01">
              <div className="Pro1t01">
                <div className="protitlet01">data structure library</div>
                <div className="prodescript01">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, vero?</div>
              </div>

              <div className="pro2t01">
                <div className='protitlet01'>chatbot</div>
                <div className="prodescript01">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur repellendus incidunt fuga impedit veniam.</div>
              </div>
            </div> */}

              {ResumeSkills}
              {/* </div> */}
              {/* <div className="boxt01" id="Skillst01">
              <h3 className="titlet01">Skills</h3>
              <ul className='skilllistt01'>
                <li >machine learning</li>
                <li className="listitemt01">analytics</li>
                <li className="listitemt01">Communication and leadership</li>
                <li className="listitemt01">java developer</li>

              </ul>
            </div> */}
            </div>

            <div className="rightt01">
              <div className="boxt01" id="summaryboxt01">
                <h3 className="title1t01">Summary</h3>
                <div id="summaryt01">{ResumeDescription}</div>
              </div>

              {educationHTML}
              {/* <div className='boxt01' id="Educationt01">
              <h3 className="title1t01" id="educatetitlet01" >Education</h3>
              <ul class="rightsidelistt01">
                <li>
                  <div>
                    <h4>Masters degree in computer science</h4>
                  </div>
                  <div>2011-2013</div>
                  <div>d.y.patil university</div>
                  <div>123 Anywhere st, Any city</div>
                </li>
              </ul>
            </div> */}

              {experienceHTML}
              {/* <div className="boxt01" id="experiencet01" >
              <h3 className="title1t01">Experience</h3>
              <div className="jobtitlet01">
                <label>java developer</label>
              </div>
              <div className='companynamet01'>
                <span>infosys | </span><span>123,pune shivaji road</span>
              </div>
              <div className="durationt01">
                <span className="startdatet01">2021</span><span>-</span><span className="lastdate">present</span>
              </div>
              <div className="descriptiont01">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cumque fugit praesentium quisquam neque adipisci quidem placeat similique molestias? Velit.</div>

              <div className="jobtitlet01">
                <label>Java developer</label>
              </div>
              <div className='companynamet01'>
                <span>infosys | </span><span>123,pune shivaji road</span>
              </div>
              <div className="durationt01">
                <span className="startdatet01">2019</span><span>-</span><span className="lastdate">2021</span>
              </div>
              <div className="descriptiont01">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat cupiditate repellendus harum nemo amet, quibusdam qui perferendis dignissimos deleniti.</div>

              <div className="jobtitlet01">
                <label>java developer</label>
              </div>
              <div className='companynamet01'>
                <span>infosys | </span><span>123,pune shivaji road</span>
              </div>
              <div className="durationt01">
                <span className="startdatet01">2016</span><span>-</span><span className="lastdate">2019</span>
              </div>
              <div className="descriptiont01">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias aliquam mollitia illum blanditiis facilis delectus itaque ipsa soluta esse! Porro.</div>
            </div> */}
            </div>
          </div>
        </div>

        {/* buttons to print the document */}
        <div
          className="container"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "40px",
            gap: "30px",
          }}
        >
          <Link to="/resumeform00" k>
            <button
              id="eidtForm"
              type="button"
              className="btn btn-success business01-btn"
            >
              EDIT FORM
            </button>
          </Link>

          <button
            onClick={downloadImage}
            type="button"
            className="btn btn-success business01-btn"
          >
            Download Image
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "kanit",
            marginBottom: "30px",
            marginTop: "30px",
          }}
        >
          <Link
            to="/resumeform05"
            class="btn btn-outline-danger"
            style={{ marginRight: "50px", width: "180px", fontSize: "18px" }}
          >
            Back
          </Link>

          <Link
            to="/resumeava02"
            class="btn btn-outline-success"
            style={{ width: "180px", fontSize: "18px" }}
          >
            Next
          </Link>
        </div>
      </div>













  {/* for  mobile view  png image  */}

 

  <div className="resume-image-mobile-view mt-2">
  <div className="image-container text-center">
    {savedImage && (
     <img
     id="saved-resume-image" // Add an ID to the image for the resize handler
     src={savedImage}
     alt="Saved Resume"
     className="img-fluid" // Bootstrap class for responsive images
     onLoad={() => console.log("Image loaded successfully")} // Log when the image is loaded
     onError={() => console.error("Error loading image")} // Log if there's an error
   />
    )}

    {/* Buttons to print the document */}
    <div className="button-container mt-3">
      <button
        onClick={downloadImage22}
        type="button"
        className="btn btn-success business01-btn"
      >
        Download Image
      </button>
    </div>

    <div className="navigation-container mt-3">
      <Link
        to="/resumeform05"
        className="btn btn-outline-danger mx-2"
      >
        Back
      </Link>

      <Link
        to="/resumeava02"
        className="btn btn-outline-success  mx-2"
      >
        Next
      </Link>
    </div>
  </div>
</div>
    </>
  );
};

export default ResumeAva01;
