import React from 'react';
import Card from './Card';

export default function Category2(props) {
  let pageUrl = "/src/components/FormResume.js";

  return (
    <div className="container mt-4">
       <div className="row" style={{ 
        height: "auto", // Set height to auto to allow content to determine height
        borderRadius: "8px", 
        backgroundColor: "#21D4FD", 
        backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
        marginTop: "-25px", // Adjust this value to move the cards upwards
        padding: "20px" ,
       
      }}>
        <div className="col-12 d-flex justify-content-center align-items-center">
          <Card pageUrl={pageUrl} />
        </div>
      </div>
    </div>
  );
}
