import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

let cardCount = 0;
let cardToLoad;
let removedElements = [];

const ResumeForm3 = () => {
  document.body.style = 'background: white;';

  const [cardcnt, setcardcnt] = useState(0);
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    // Populate form with saved data if available
    if (localStorage.getItem("Education")) {
      populateFormAgain();
    }
  }, []);
  const validateForm = () => {
    let errors = {};
    
    for (let i = 0; i <= cardCount; i++) {
      const bElement = document.getElementById(`b${i}`);
      const schNameElement = document.getElementById(`schnamep${i}`);
      const schLocElement = document.getElementById(`schlocp${i}`);
      const eduStartDateElement = document.getElementById(`edustrdatep${i}`);
      const eduEndDateElement = document.getElementById(`eduendatep${i}`);
      const degreeElement = document.getElementById(`degp${i}`);
      const fieldElement = document.getElementById(`fieldp${i}`);
    
      // Check if the element with ID b${i} exists and is not removed
      if (bElement && !removedElements.includes(Number.parseInt(bElement.textContent))) {
        if (schNameElement && !schNameElement.value) {
          errors[`schnamep${i}`] = 'School/College Name is required';
        }
        if (schLocElement && !schLocElement.value) {
          errors[`schlocp${i}`] = 'School/College Location is required';
        }
        if (eduStartDateElement && !eduStartDateElement.value) {
          errors[`edustrdatep${i}`] = 'Start Date is required';
        } else if (eduStartDateElement) {
          const startDate = new Date(eduStartDateElement.value);
          if (isNaN(startDate.getTime())) {
            errors[`edustrdatep${i}`] = 'Invalid Start Date';
          }
        }
        if (eduEndDateElement && !eduEndDateElement.value) {
          errors[`eduendatep${i}`] = 'End Date is required';
        } else if (eduEndDateElement) {
          const endDate = new Date(eduEndDateElement.value);
          if (isNaN(endDate.getTime())) {
            errors[`eduendatep${i}`] = 'Invalid End Date';
          }
        }
        if (degreeElement && !degreeElement.value) {
          errors[`degp${i}`] = 'Degree is required';
        }
        if (fieldElement && !fieldElement.value) {
          errors[`fieldp${i}`] = 'Field of Study is required';
        }
      }
    }
    
    // Set form errors to state
    setFormErrors(errors);
    
    // Return true if no errors
    return Object.keys(errors).length === 0;
  };
  

  const additem = () => {
    if ((cardCount - removedElements.length) < 3) { // Allow up to 3 items
      cardCount += 1;
      setcardcnt(cardCount);
  
      // Create a new div element
      const newCard = document.createElement('div');
      newCard.id = `p${cardCount}`;
      newCard.className = 'mb-3';
  
      // Create input fields and error message placeholders
      newCard.innerHTML = `
        <hr />
        <span id="b${cardCount}" style="display:none">${cardCount}</span>
        <span class="material-symbols-outlined" style="float:right; cursor:pointer;" id="deleteElement${cardCount}">delete</span>
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <input id="schnamep${cardCount}" type="text" class="form-control" placeholder="School/College Name" />
            <div style="color: red;" id="errorSchnamep${cardCount}"></div>
          </div>
          <div class="col-12 col-md-6">
            <input type="text" id="schlocp${cardCount}" class="form-control" placeholder="School/College Location" />
            <div style="color: red;" id="errorSchlocp${cardCount}"></div>
          </div>
          <div class="col-12 col-md-6">
            <input type="text" id="edustrdatep${cardCount}" class="form-control" placeholder="Start Date" />
            <div style="color: red;" id="errorEdustrdatep${cardCount}"></div>
          </div>
          <div class="col-12 col-md-6">
            <input type="text" id="eduendatep${cardCount}" class="form-control" placeholder="End Date" />
            <div style="color: red;" id="errorEduendatep${cardCount}"></div>
          </div>
          <div class="col-12 col-md-6">
            <input type="text" id="degp${cardCount}" class="form-control" placeholder="Degree" />
            <div style="color: red;" id="errorDegp${cardCount}"></div>
          </div>
          <div class="col-12 col-md-6">
            <input type="text" class="form-control" id="fieldp${cardCount}" placeholder="Field of Study" />
            <div style="color: red;" id="errorFieldp${cardCount}"></div>
          </div>
        </div>
      `;
  
      document.getElementById("addnew").appendChild(newCard);
  
      // Validate newly added item fields
      const validateNewFields = () => {
        let hasError = false;
  
        if (!document.getElementById(`schnamep${cardCount}`).value) {
          document.getElementById(`errorSchnamep${cardCount}`).innerText = 'School/College Name is required';
          hasError = true;
        } else {
          document.getElementById(`errorSchnamep${cardCount}`).innerText = '';
        }
  
        if (!document.getElementById(`schlocp${cardCount}`).value) {
          document.getElementById(`errorSchlocp${cardCount}`).innerText = 'School/College Location is required';
          hasError = true;
        } else {
          document.getElementById(`errorSchlocp${cardCount}`).innerText = '';
        }
  
        if (!document.getElementById(`edustrdatep${cardCount}`).value) {
          document.getElementById(`errorEdustrdatep${cardCount}`).innerText = 'Start Date is required';
          hasError = true;
        } else {
          const startDate = new Date(document.getElementById(`edustrdatep${cardCount}`).value);
          if (isNaN(startDate.getTime())) {
            document.getElementById(`errorEdustrdatep${cardCount}`).innerText = 'Invalid Start Date';
            hasError = true;
          } else {
            document.getElementById(`errorEdustrdatep${cardCount}`).innerText = '';
          }
        }
  
        if (!document.getElementById(`eduendatep${cardCount}`).value) {
          document.getElementById(`errorEduendatep${cardCount}`).innerText = 'End Date is required';
          hasError = true;
        } else {
          const endDate = new Date(document.getElementById(`eduendatep${cardCount}`).value);
          if (isNaN(endDate.getTime())) {
            document.getElementById(`errorEduendatep${cardCount}`).innerText = 'Invalid End Date';
            hasError = true;
          } else {
            document.getElementById(`errorEduendatep${cardCount}`).innerText = '';
          }
        }
  
        if (!document.getElementById(`degp${cardCount}`).value) {
          document.getElementById(`errorDegp${cardCount}`).innerText = 'Degree is required';
          hasError = true;
        } else {
          document.getElementById(`errorDegp${cardCount}`).innerText = '';
        }
  
        if (!document.getElementById(`fieldp${cardCount}`).value) {
          document.getElementById(`errorFieldp${cardCount}`).innerText = 'Field of Study is required';
          hasError = true;
        } else {
          document.getElementById(`errorFieldp${cardCount}`).innerText = '';
        }
  
        return !hasError; // Return true if no errors
      };
  
      // Event listener for delete functionality
      document.getElementById(`deleteElement${cardCount}`).addEventListener("click", () => {
        const cardElement = document.getElementById(`p${cardCount}`);
        removedElements.push(Number.parseInt(document.getElementById(`b${cardCount}`).textContent));
        cardElement.style.display = "none";
      });
  
      // Trigger validation immediately after adding the new card
      validateNewFields();
    } else {
      alert("More than 3 items are not allowed");
    }
  };
  

  
  


  const loadToLocalStorage = () => {
    const ObjOfElements = [];

    for (let i = 0; i <= cardCount; i++) {
      if (!(removedElements.includes(Number.parseInt(document.getElementById(`b${i}`).textContent)))) {
        ObjOfElements.push({
          schname: document.getElementById(`schnamep${i}`).value,
          schloc: document.getElementById(`schlocp${i}`).value,
          edustrdate: document.getElementById(`edustrdatep${i}`).value,
          eduendate: document.getElementById(`eduendatep${i}`).value,
          deg: document.getElementById(`degp${i}`).value,
          field: document.getElementById(`fieldp${i}`).value
        });
      }
    }

    localStorage.setItem("Education", JSON.stringify(ObjOfElements));
    localStorage.setItem("ResumeFrom3HTML", document.getElementById("addnew").innerHTML);
    localStorage.setItem("PageValuesItemsForm2", JSON.stringify({
      deletedItems: removedElements,
      cardCount: cardCount
    }));
  };

  const handleNext = () => {
    if (validateForm()) {
      loadToLocalStorage();
      navigate('/resumeform4');
    }
  };

  const populateFormAgain = () => {
    const TotalElementHTMLCode3 = localStorage.getItem("ResumeFrom3HTML");
    document.getElementById("addnew").innerHTML = TotalElementHTMLCode3;

    const DataOfElem = JSON.parse(localStorage.getItem("Education"));
    let LoadObj = JSON.parse(localStorage.getItem("PageValuesItemsForm2"));

    // Initialization
    cardCount = LoadObj.cardCount;
    removedElements = LoadObj.deletedItems;

    let count = 0;
    for (let j = 0; j <= cardCount; j++) {
      if (!(removedElements.includes(Number.parseInt(document.getElementById(`b${j}`).textContent)))) {
        document.getElementById(`schnamep${j}`).value = DataOfElem[count].schname;
        document.getElementById(`schlocp${j}`).value = DataOfElem[count].schloc;
        document.getElementById(`edustrdatep${j}`).value = DataOfElem[count].edustrdate;
        document.getElementById(`eduendatep${j}`).value = DataOfElem[count].eduendate;
        document.getElementById(`degp${j}`).value = DataOfElem[count].deg;
        document.getElementById(`fieldp${j}`).value = DataOfElem[count].field;
        count++;

        if (j !== 0) {
          document.getElementById(`deleteElement${j}`).addEventListener("click", () => {
            removedElements.push(Number.parseInt(document.getElementById(`b${j}`).textContent));
            document.getElementById(`p${j}`).style.display = "none";
          });
        }
      }
    }
  };

  return (
    <>
      <div style={{ fontFamily: "Questrial", textAlign: "center", marginTop: "50px" }}>
        <h2>Educational Details</h2>
      </div>
      <div id='container' className="container text-center" style={{ maxWidth: "800px", marginTop: "30px" }}>
        <div id="addnew">
          <div>
            <div id="p0" className="mb-3">
              <span id="b0" style={{ display: "none" }}>0</span>
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <input id="schnamep0" type="text" className="form-control" placeholder="School/College Name" />
                  {formErrors.schnamep0 && <div style={{ color: 'red' }}>{formErrors.schnamep0}</div>}
                </div>
                <div className="col-12 col-md-6">
                  <input type="text" id="schlocp0" className="form-control" placeholder="School/College Location" />
                  {formErrors.schlocp0 && <div style={{ color: 'red' }}>{formErrors.schlocp0}</div>}
                </div>
                <div className="col-12 col-md-6">
                  <input type="text" id="edustrdatep0" className="form-control" placeholder="Start Date" />
                  {formErrors.edustrdatep0 && <div style={{ color: 'red' }}>{formErrors.edustrdatep0}</div>}
                </div>
                <div className="col-12 col-md-6">
                  <input type="text" id="eduendatep0" className="form-control" placeholder="End Date" />
                  {formErrors.eduendatep0 && <div style={{ color: 'red' }}>{formErrors.eduendatep0}</div>}
                </div>
                <div className="col-12 col-md-6">
                  <input type="text" id="degp0" className="form-control" placeholder="Degree" />
                  {formErrors.degp0 && <div style={{ color: 'red' }}>{formErrors.degp0}</div>}
                </div>
                <div className="col-12 col-md-6">
                  <input type="text" className="form-control" id="fieldp0" placeholder="Field of Study" />
                  {formErrors.fieldp0 && <div style={{ color: 'red' }}>{formErrors.fieldp0}</div>}
                </div>
              </div>
            </div>
          </div>
          <button type="button" onClick={additem} style={{ width: "100px", float: "right", marginTop: "20px" }} className="addbtn btn btn-outline-success">Add +</button>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "80px", fontFamily: "kanit", marginBottom: "10vh" }}>
          <Link to="/resumeform2" className="btn btn-outline-danger" style={{ marginRight: "50px", width: "180px", fontSize: "18px" }}>Back</Link>
          <button onClick={handleNext} className="btn btn-outline-success" style={{ width: "180px", fontSize: "18px" }}>Next</button>
        </div>
      </div>

    </>
  );
};

export default ResumeForm3;
