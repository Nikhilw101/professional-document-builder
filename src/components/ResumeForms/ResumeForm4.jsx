import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../Navbar';
import Footer from '../Footer';

let cardCount4 = 0;
let cardToLoad4;
let removedElements4 = [];

const ResumeForm4 = () => {
    document.body.style = 'background: white;';

    const [cardcnt, setcardcnt] = useState(0);
    const [errorMessage, setErrorMessage] = useState(""); // State for error message
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        if (localStorage.getItem("skills")) {
            populateFormAgain4();
        }
    }, []);

    const additem = () => {
        if ((cardCount4 - removedElements4.length) < 5) {
            cardCount4 += 1;
            setcardcnt(cardCount4);

            cardToLoad4 = `
                <div id="p${cardCount4}" class="mb-3">
                    <span id="b${cardCount4}" style="display:none">${cardCount4}</span>
                    <div class="row align-items-center">
                        <div class="col">
                            <input id="sk${cardCount4}" type="text" class="form-control" placeholder="Skill - like C++, Java" />
                        </div>
                        <div class="col-auto">
                            <span class="material-symbols-outlined" style="cursor:pointer;" id="deleteElement${cardCount4}">delete</span>
                        </div>
                    </div>
                </div>
            `;

            const ele = document.createElement('div');
            ele.innerHTML = cardToLoad4;
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
    };

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
    };

    const validateForm = () => {
        let isValid = true;
        setErrorMessage(""); // Clear previous error message

        for (let i = 0; i <= cardCount4; i++) {
            if (!(removedElements4.includes(Number.parseInt(document.getElementById(`b${i}`).textContent)))) {
                const skillInput = document.getElementById(`sk${i}`).value.trim();
                if (skillInput === "") {
                    isValid = false;
                    setErrorMessage("Please fill in all skill fields."); // Set error message if any field is empty
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
            navigate("/resumeform5"); // Navigate programmatically if validation passes
        }
    };

    const populateFormAgain4 = () => {
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
            if (!(removedElements4.includes(Number.parseInt(document.getElementById(`b${j}`).textContent)))) {
                document.getElementById(`sk${j}`).value = DataOfElem4[count++].skill;
                if (j !== 0) {
                    document.getElementById(`deleteElement${j}`).addEventListener("click", () => {
                        removedElements4.push(Number.parseInt(document.getElementById(`b${j}`).textContent));
                        document.getElementById(`p${j}`).style.display = "none";
                    });
                }
            }
        }
    };

    return (
        <>
            <div style={{ fontFamily: "Questrial", marginTop: "50px", textAlign: "center" }}>
                <h2>Key Skills</h2>
            </div>
            {errorMessage && <div style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</div>} {/* Display error message */}
            <div id='container' className="container text-center" style={{ maxWidth: "800px", marginTop: "30px", background: "white" }}>
                <div id="addnew4">
                    <div id="p0" className="mb-3">
                        <span id="b0" style={{ display: "none" }}>0</span>
                        <div className="row align-items-center">
                            <div className="col">
                                <input id="sk0" type="text" className="form-control" placeholder="Skill - like C++, Java" />
                            </div>
                            <div className="col-auto">
                                <span className="material-symbols-outlined" style={{ cursor: "pointer" }}></span>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" onClick={additem} style={{ width: "100px", float: "right", marginTop: "20px" }} className="addbtn btn btn-outline-success">Add +</button>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "80px", fontFamily: "kanit", marginBottom: "35vh" }}>
                <Link to="/resumeform3" className="btn btn-outline-danger" style={{ marginRight: "50px", width: "180px", fontSize: "18px" }}>Back</Link>
                <button onClick={handleNext} className="btn btn-outline-success" style={{ width: "180px", fontSize: "18px" }}>Next</button> {/* Changed to button */}
            </div>
        </>
    );
};

export default ResumeForm4;
