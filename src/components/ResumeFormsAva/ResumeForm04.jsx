import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

let cardCount4 = 0;
let cardToLood4;
let removedElements4 = [];

const ResumeForm04 = () => {
  document.body.style = 'background: white;';

  const [cardcnt, setcardcnt] = useState(0)

  useEffect(() => {
    if (localStorage.getItem("skills")) {
      populateFormAgain4();
    }
  }, [])

  const additem = () => {
    if ((cardCount4 - removedElements4.length) < 4) {
      cardCount4 += 1;
      setcardcnt(cardCount4);

      cardToLood4 = `
        <div id="p${cardCount4}" class="row mb-3">
            <span id="b${cardCount4}" style="display:none">${cardCount4}</span>
            <div class="col">
                <input id="sk${cardCount4}" type="text" class="form-control" placeholder="Skill" />
            </div>
            <div class="col-auto" style="margin-top: 28px; cursor:pointer;"> 
                <span class="material-symbols-outlined" id="deleteElement${cardCount4}">delete</span>
            </div>
        </div>
      `

      const ele = document.createElement('div');
      ele.innerHTML = cardToLood4;
      document.getElementById("addnew4").appendChild(ele);

      document.getElementById(`deleteElement${cardCount4}`).addEventListener("click", () => {
        const cardNumber = document.getElementById(`b${cardcnt + 1}`);
        const cardElement = document.getElementById(`p${cardcnt + 1}`);

        removedElements4.push(Number.parseInt(cardNumber.textContent));
        cardElement.style.display = "none";
      });
    } else {
      alert("More than 5 Skills are not allowed in current version");
    }
  }

  const loadToLocalStorage = () => {
    const ObjOfElements4 = [];

    for (let i = 0; i <= cardCount4; i++) {
      if (!(removedElements4.includes(Number.parseInt(document.getElementById(`b${i}`).textContent)))) {
        ObjOfElements4.push({
          skill: document.getElementById(`sk${i}`).value
        });
      }
    }

    localStorage.setItem("skills", JSON.stringify(ObjOfElements4));
    localStorage.setItem("ResumeFrom4HTML", document.getElementById("addnew4").innerHTML);
    localStorage.setItem("PageValuesItemsForm4", JSON.stringify({
      deletedItems: removedElements4,
      cardCount: cardCount4
    }));
  }

  const populateFormAgain4 = () => {
    if (localStorage.getItem("skills")) {
      const TotalElementHTMLCode4 = localStorage.getItem("ResumeFrom4HTML");
      const TotalElementHTMLCode4Count = JSON.parse(localStorage.getItem("skills")).length - 1;

      document.getElementById("addnew4").innerHTML = TotalElementHTMLCode4;

      cardCount4 = TotalElementHTMLCode4Count;
      setcardcnt(TotalElementHTMLCode4Count);
      const DataOfElem4 = JSON.parse(localStorage.getItem("skills"));

      let LoadObj = JSON.parse(localStorage.getItem("PageValuesItemsForm4"));

      cardCount4 = LoadObj.cardCount;
      removedElements4 = LoadObj.deletedItems;

      let count = 0;
      for (let j = 0; j <= cardCount4; j++) {
        if ((removedElements4.includes(Number.parseInt(document.getElementById(`b${j}`).textContent)))) {
        } else {
          document.getElementById(`sk${j}`).value = DataOfElem4[count++].skill;
          if (j !== 0) {
            document.getElementById(`deleteElement${j}`).addEventListener("click", () => {
              removedElements4.push(Number.parseInt(document.getElementById(`b${j}`).textContent));
              document.getElementById(`p${j}`).style.display = "none";
            });
          }
        }
      }
    }
  }

  return (
    <>
   
      <div className="container text-center" style={{ fontFamily: "Questrial", marginTop: "50px" }}>
        <h2>Key Skills</h2>
      </div>
      <div id='container' className="container text-center mt-3 mb-5" style={{ maxWidth: "800px", background: "white" }}>
        <div id="addnew4">
          <div id="p0" className="row mb-3">
            <span id="b0" style={{ display: "none" }}>0</span>
            <div className="col">
              <input id="sk0" type="text" className="form-control" placeholder="Skill - like C++, Java" />
            </div>
            <div className="col-auto" style={{ marginTop: "28px" }}>
              <span className=""></span>
            </div>
          </div>
        </div>
        <button type="button" onClick={additem} className="addbtn btn btn-outline-success" style={{ width: "100px", float: "right", marginTop: "17px" }}>Add +</button>
      </div>

      <div className="container d-flex justify-content-center mt-5" style={{ fontFamily: "kanit", marginBottom: "35vh" }}>
        <Link to="/resumeform03" className="btn btn-outline-danger me-3" style={{ width: "180px", fontSize: "18px" }}>Back</Link>
        <Link onClick={loadToLocalStorage} to="/resumeform05" className="btn btn-outline-success" style={{ width: "180px", fontSize: "18px" }}>Next</Link>
      </div>

    </>
  )
}

export default ResumeForm04;
