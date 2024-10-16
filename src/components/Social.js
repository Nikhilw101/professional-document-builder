import React from 'react';
import x from './Logos/tw.webp';
import fb from './Logos/face.webp';
import insta from './Logos/ins.webp';

export default function Social() {
  return (
    <div style={{
      border: "2px solid white",
      backgroundColor: "#F8F9FA",
      padding: "20px",
      display: "grid",
      gridTemplateRows: "auto 1fr",
      alignItems: "center",
      height: "500px"
    }}>
      <h2 style={{
        marginTop: "30px",
        fontFamily: "Kanit",
        fontSize: "32px",
        textAlign: "center"
      }}>
        Follow us on social media
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", // Responsive grid columns
        justifyItems: "center", // Center items horizontally
        gap: "20px", // Space between icons
        marginTop: "20px"
      }}>
        <a href="#" aria-label="Twitter">
          <img style={{ height: "140px", width: "auto", maxWidth: "100%" }} src={x} alt="Twitter" />
        </a>
        <a href="#" aria-label="Facebook">
          <img style={{ height: "140px", width: "auto", maxWidth: "100%" }} src={fb} alt="Facebook" />
        </a>
        <a href="#" aria-label="Instagram">
          <img style={{ height: "140px", width: "auto", maxWidth: "100%" }} src={insta} alt="Instagram" />
        </a>
      </div>
    </div>
  );
}
