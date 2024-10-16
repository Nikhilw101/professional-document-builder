import React from 'react';
import img from './logotemp.svg';
import wlogo from './Logos/whiteLogo.png';
import free from './Logos/flaticon/copy.png';

export default function Footer() {
  return (
    <div style={{
      height: "600px",
      backgroundColor: "#151515",
      color: "white",
      fontFamily: "Kanit",
      border: "2px solid #212529",
      display: "grid",
      gridTemplateRows: "auto 1fr auto", // 3 rows: title, logo/image, copyright
      justifyItems: "center", // Center items horizontally
      padding: "20px"
    }}>
      <div style={{ textAlign: "left", marginBottom: "20px" }}>
        <h2 style={{
          fontSize: "25px",
          margin: "0" // Remove default margin
        }}>
          The Professional Document Builder
        </h2>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "20px"
      }}>
        <img style={{
          height: "250px",
          filter: "invert(100%)",
          width: "auto",
          maxWidth: "100%" // Make the image responsive
        }} src={free} alt="Logo" />
      </div>
      <div style={{ textAlign: "right", marginTop: "20px" }}>
        <span>&copy; 2023 The Professional Document Builder</span>
      </div>
    </div>
  );
}
