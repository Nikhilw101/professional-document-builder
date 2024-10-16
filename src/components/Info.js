import React from 'react';
import landimg from './top.jpg';
import bigimg from './bigimg.png';

// #F5F7FA
export default function Info() {
  return (
    <div 
      style={{
        backgroundColor: "#F8F9FA", 
        border: "2px solid white", 
        minHeight: "880px", // Change height to minHeight for responsiveness
        marginTop: "100px", 
        color: "black", 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '20px' // Add some padding
      }}
    >
      <img 
        style={{
          height: "auto", // Make height auto for responsiveness
          maxHeight: "300px", // Set a max height to avoid overflow
          width: "100%", // Full width for responsive image
          objectFit: "contain", // Maintain aspect ratio
          margin: "20px 0" // Adjust margin
        }} 
        src={bigimg} 
        alt="Big Representation" 
      />
      
      <h2 style={{
        fontFamily: "Questrial", 
        fontSize: "30px", 
        marginBottom: "30px", 
        marginTop: "70px", 
        textAlign: 'center' // Center align the heading
      }}>
        The Professional Document Builder
      </h2>  
    
      <p style={{
        fontFamily: "Questrial", 
        fontSize: "20px", 
        fontStyle: "italic", 
        textAlign: 'center', // Center align the paragraph
        maxWidth: '800px', // Set a max width for the text
        margin: '0 auto' // Center align with auto margins
      }}>
        The goal of improving lives is an important reason behind the birth of document builder. <br />
        The Professional Document Builder provides the most efficient, free and exotic services to students, 
        business professionals, educational institutes, industries, etc. Professional Document Builder comes 
        with a rich set of templates to design the documents like Resume, CV, Cards, Educational Docs & more. <br /> 
        Learn more about our magical tools and services! 
      </p>

      <div className="d-grid gap-2 col-6 mx-auto" style={{ fontFamily: "Questrial", fontSize: "18px", marginTop: "45px" }}>
        <button className="btn btn-outline-primary" type="button">Learn More</button>
      </div>
    </div>
  );
}
