import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

let cardCount5 = 0;
let cardToLoad5;
let removedElements5 = [];

const ResumeForm05 = () => {
  document.body.style = 'background: white;';

  const [cardcnt, setcardcnt] = useState(0);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate(); // Initialize useNavigate

  const additem = () => {
    if ((cardCount5 - removedElements5.length) < 1) {
      cardCount5 += 1;
      setcardcnt(cardCount5);

      cardToLoad5 = `
        <div id="p${cardCount5}" class="mb-3">
          <span id="b${cardCount5}" style="display:none">${cardCount5}</span>
          <hr>
          <span class="material-symbols-outlined" style="float:right; cursor: pointer;" id="deleteElement${cardCount5}">delete</span>
          <div class="row">
            <div class="col-12">
              <input id="projectTitle${cardCount5}" type="text" class="form-control" placeholder="Project Title" />
            </div>
            <div class="col-12 mt-3">
              <textarea id="projectDesc${cardCount5}" rows="4" class="form-control" placeholder="Description..."></textarea>
            </div>
          </div>
        </div>
      `;

      const ele = document.createElement('div');
      ele.innerHTML = cardToLoad5;
      document.getElementById("addnew5").appendChild(ele);

      document.getElementById(`deleteElement${cardCount5}`).addEventListener("click", () => {
        const cardNumber = document.getElementById(`b${cardcnt + 1}`);
        const cardElement = document.getElementById(`p${cardcnt + 1}`);
        removedElements5.push(Number.parseInt(cardNumber.textContent));
        cardElement.style.display = "none";
      });
    } else {
      alert("More than 2 projects are not allowed in the current version");
    }
  };

  const loadToLocalStorage = () => {
    const ObjOfElements5 = [];
    for (let i = 0; i <= cardCount5; i++) {
      if (!(removedElements5.includes(Number.parseInt(document.getElementById(`b${i}`).textContent)))) {
        ObjOfElements5.push({
          projectTitle: document.getElementById(`projectTitle${i}`).value,
          projectDesc: document.getElementById(`projectDesc${i}`).value
        });
      }
    }
    localStorage.setItem("projectInfo", JSON.stringify(ObjOfElements5));
    console.log(ObjOfElements5);
  };

  const validateForm = () => {
    let isValid = true;
    setErrorMessage(""); // Clear previous error message

    for (let i = 0; i <= cardCount5; i++) {
      if (!(removedElements5.includes(Number.parseInt(document.getElementById(`b${i}`).textContent)))) {
        const titleInput = document.getElementById(`projectTitle${i}`).value.trim();
        const descInput = document.getElementById(`projectDesc${i}`).value.trim();
        
        if (titleInput === "" || descInput === "") {
          isValid = false;
          setErrorMessage("Please fill in all project fields."); // Set error message if any field is empty
          break;
        }
      }
    }
    return isValid;
  };

  const handleNext = (e) => {
    e.preventDefault(); // Prevent default behavior
    if (validateForm()) {
      loadToLocalStorage();
      navigate("/resumeform06"); // Navigate programmatically if validation passes
    }
  };

  return (
    <>
      <div style={{ fontFamily: "Questrial", marginTop: "50px", textAlign: "center" }}>
        <h2>Project Information</h2>
      </div>
      {errorMessage && <div style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</div>} {/* Display error message */}
      <div id='container' className="container text-center" style={{ marginTop: "30px" }}>
        <div id="addnew5">
          <div id="p0" className="mb-3">
            <span id="b0" style={{ display: "none" }}>0</span>
            <div className="row">
              <div className="col-12">
                <input id="projectTitle0" type="text" className="form-control" placeholder="Project Title" defaultValue="Resume-Builder-With-Avatar"/>
              </div>
              <div className="col-12 mt-3">
                <textarea rows="4" id="projectDesc0" className="form-control" placeholder='Description...' defaultValue="The Resume Builder with Avatar allows users to create personalized resumes by selecting designs and generating unique avatars,
                 enhancing their professional presentation with a creative touch."></textarea>
              </div>
            </div>
          </div>
        </div>
        <button type="button" onClick={additem} className="addbtn btn btn-outline-success" style={{ width: "100px", float: "right", marginTop: "20px" }}>Add +</button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "80px", fontFamily: "kanit", marginBottom: "15vh" }}>
        <Link to="/resumeform4" className="btn btn-outline-danger" style={{ marginRight: "50px", width: "180px", fontSize: "18px" }}>Back</Link>
        <button onClick={handleNext} className="btn btn-outline-success" style={{ width: "180px", fontSize: "18px" }}>Next</button>
      </div>
    </>
  );
};

export default ResumeForm05;
