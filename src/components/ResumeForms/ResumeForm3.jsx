import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

let cardCount = 0;
let cardToLoad;
let removedElements = [];

const ResumeForm3 = () => {
  document.body.style = 'background: white;';

  const [cardcnt, setcardcnt] = useState(0);

  useEffect(() => {
    // Populate form with saved data if available
    if (localStorage.getItem("Education")) {
      populateFormAgain();
    }
  }, []);

  const additem = () => {
    if ((cardCount - removedElements.length) < 3) { // Changed to 3 to allow 3 items
      cardCount += 1;
      setcardcnt(cardCount);

      cardToLoad = `
        <div id="p${cardCount}" class="mb-3">
          <hr />
          <span id="b${cardCount}" style="display:none">${cardCount}</span>
          <span class="material-symbols-outlined" style="float:right; cursor:pointer;" id="deleteElement${cardCount}">delete</span>

          <div class="row g-3">
            <div class="col-12 col-md-6">
              <input id="schnamep${cardCount}" type="text" class="form-control" placeholder="School/College Name" />
            </div>
            <div class="col-12 col-md-6">
              <input type="text" id="schlocp${cardCount}" class="form-control" placeholder="School/College Location" />
            </div>
            <div class="col-12 col-md-6">
              <input type="text" id="edustrdatep${cardCount}" class="form-control" placeholder="Start Date" />
            </div>
            <div class="col-12 col-md-6">
              <input type="text" id="eduendatep${cardCount}" class="form-control" placeholder="End Date" />
            </div>
            <div class="col-12 col-md-6">
              <input type="text" id="degp${cardCount}" class="form-control" placeholder="Degree" />
            </div>
            <div class="col-12 col-md-6">
              <input type="text" class="form-control" id="fieldp${cardCount}" placeholder="Field of Study" />
            </div>
          </div>
        </div>
      `;

      const ele = document.createElement('div');
      ele.innerHTML = cardToLoad;
      document.getElementById("addnew").appendChild(ele);

      document.getElementById(`deleteElement${cardCount}`).addEventListener("click", () => {
        const cardNumber = document.getElementById(`b${cardcnt + 1}`);
        const cardElement = document.getElementById(`p${cardcnt + 1}`);
        removedElements.push(Number.parseInt(cardNumber.textContent));
        cardElement.style.display = "none";
      });
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
                </div>
                <div className="col-12 col-md-6">
                  <input type="text" id="schlocp0" className="form-control" placeholder="School/College Location" />
                </div>
                <div className="col-12 col-md-6">
                  <input type="text" id="edustrdatep0" className="form-control" placeholder="Start Date" />
                </div>
                <div className="col-12 col-md-6">
                  <input type="text" id="eduendatep0" className="form-control" placeholder="End Date" />
                </div>
                <div className="col-12 col-md-6">
                  <input type="text" id="degp0" className="form-control" placeholder="Degree" />
                </div>
                <div className="col-12 col-md-6">
                  <input type="text" className="form-control" id="fieldp0" placeholder="Field of Study" />
                </div>
              </div>
            </div>
          </div>
          <button type="button" onClick={additem} style={{ width: "100px", float: "right", marginTop: "20px" }} className="addbtn btn btn-outline-success">Add +</button>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "80px", fontFamily: "kanit", marginBottom: "10vh" }}>
          <Link to="/resumeform2" className="btn btn-outline-danger" style={{ marginRight: "50px", width: "180px", fontSize: "18px" }}>Back</Link>
          <Link onClick={loadToLocalStorage} to="/resumeform4" className="btn btn-outline-success" style={{ width: "180px", fontSize: "18px" }}>Next</Link>
        </div>
      </div>
 
    </>
  );
};

export default ResumeForm3;
