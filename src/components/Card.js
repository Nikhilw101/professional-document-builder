import React from 'react';
import { Link } from 'react-router-dom';
import cv from './CVMain/cv.jpg';
import res from './cardimgs/res30002000.jpg';
import card from './cardimgs/card1.jpg';
import more from './cardimgs/more1.jpg';

export default function Card(props) {

  // Clearing the local storage data
  const cleanOlLocalData = () => {
    localStorage.clear();
  };

  return (
    <div className="container" style={{ marginTop: "20px", fontFamily: "Kanit" }}>
      <div className="row">
        <div className="col-lg-6 col-md-6 mb-4">
          <div className="card" style={{ width: "100%", border: "2px solid black" }}>
            <img src={res} className="card-img-top" alt="Resume without Avatar" />
            <div className="card-body" style={{ backgroundColor: "#0F2027", color: "white" }}>
              <h5 className="card-title">Resume (without Avatar)</h5>
              <p className="card-text">Create a beautifully visual resume with exciting designs!</p>
              <Link to="/resumeform1" onClick={cleanOlLocalData} className="btn btn-light">Create Resume</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 mb-4">
          <div className="card" style={{ width: "100%", border: "2px solid black" }}>
            <img src={res} className="card-img-top" alt="Resume with Avatar" />
            <div className="card-body" style={{ backgroundColor: "#0F2027", color: "white" }}>
              <h5 className="card-title">Resume (with Avatar)</h5>
              <p className="card-text">Create a beautifully visual resume with exciting designs!</p>
              <Link to="/resumeform00" onClick={cleanOlLocalData} className="btn btn-light">Create Resume</Link>
            </div>
          </div>
        </div>
        {/* Add more cards here if needed */}
      </div>
    </div>
  );
}
