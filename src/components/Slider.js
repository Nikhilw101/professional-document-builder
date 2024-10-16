import React from 'react';
import img1 from './sliderimages/james.jpg';
import img2 from './cv1.jpg';
import img3 from './sliderimages/paper-7045209_1280 (1).jpg';
import play from './play.webp';

export default function Slider() {
  return (
    <div style={{
      color: "white",
      backgroundColor: "#0F2027",
      minHeight: "100vh", // Adjusted to fill the viewport height
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px"
    }}>
      <div style={{ border: "2px solid #0F2027", textAlign: 'center' }}>
        <h2 style={{ marginTop: "115px", fontFamily: "Questrial", fontSize: "35px", marginBottom: "20px" }}>
          Discover The Document Builder
        </h2>
        <span style={{ fontSize: "18px", fontFamily: "Questrial", fontStyle: "italic" }}>
          Discover the building aspects which make our templates magical and explore the creative world of Professional Document Builder!
        </span>
      </div>

      <div style={{ maxWidth: "1000px", width: "100%", margin: "auto", paddingTop: "20px" }}>
        <div id="carouselExampleFade" className="carousel slide carousel-fade carousel-dark" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img style={{ borderRadius: "10px", width: "100%", height: "auto", objectFit: "cover" }} src={img3} alt="Document Image 1" />
            </div>
            <div className="carousel-item">
              <img style={{ borderRadius: "10px", width: "100%", height: "auto", objectFit: "cover" }} src={img2} alt="Document Image 2" />
            </div>
            <div className="carousel-item">
              <img style={{ borderRadius: "10px", width: "100%", height: "auto", objectFit: "cover" }} src={img1} alt="Document Image 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div style={{ display: "grid", justifyContent: "center", marginTop: "80px", width: "100%" }}>
          <button style={{
            fontFamily: "Questrial",
            fontSize: "18px",
            width: "100%",
            maxWidth: "360px", // Set max width for the button
            backgroundColor: "#FFEA00",
            border: "none",
            borderRadius: "5px",
            padding: "10px",
            margin: "0 auto"
          }} className="btn btn-outline-warning" type="button">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
}
