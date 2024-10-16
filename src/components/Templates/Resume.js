import React, { useRef } from 'react'
// import FormResume from '../FormResume'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


export default function Resume() {

    const pdfRef = useRef(); 

    const downloadPDF = ()=>{
      const mybtn = document.getElementById("mybtn");
      mybtn.style.display = 'none';
      const input = pdfRef.current;
      html2canvas(input).then((canvas)=>{
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'mm', 'a4', true);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          const imgWidth = canvas.width;
          const imgHeight = canvas.height;
          const ratio = Math.min(pdfWidth/ imgWidth, pdfHeight/ imgHeight);
          const imgX = (pdfWidth - imgWidth * ratio) / 2;
          const imgY = 30;
          pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth * ratio, imgHeight * ratio);
          pdf.save('resume.pdf')
          mybtn.style.display = 'block';
      });   
    }
    // let myname = document.getElementById("idfirstname");
    // myname.value = localStorage.getItem("firstname");
    document.body.style = 'background: white;';
    
  return (
    <div ref={pdfRef} style={{backgroundColor:"white",height:"1850px", justifyContent: "center", alignItems:"center", textAlign:"center"}}>

      <div style={{}}>
      <div style={{height:"150px",fontFamily:"Questrial",marginTop:"30px"}}>
         <h1 style={{fontSize:"50px",color:"#5086EC",marginTop:"60px"}}>{localStorage.getItem("firstname")}&nbsp;{localStorage.getItem("lastname")}</h1>
        
         <span style={{fontSize:"32px",color:"grey"}}>{localStorage.getItem("jobtitle")}</span>
         <hr></hr>
      </div>

      <div style={{fontFamily:"Questrial",height:"200px", fontSize:"23px",color:"grey"}}>
        <h3 style={{color:"#5086EC"}}>Personal Information</h3>
         <br />
        <span>{localStorage.getItem("address")}</span>
        <br />
        <span>{localStorage.getItem("city")}&nbsp;{localStorage.getItem("state")}&nbsp;{localStorage.getItem("country")}</span>
        <br />
        <span>{localStorage.getItem("email")}</span>
        <br />
        <span>{localStorage.getItem("phone")}</span>
        
      </div>
     <br />
     <br />
      <hr />

      <div style={{fontFamily:"Questrial",height:"200px", fontSize:"23px",color:"grey"}}>
        <h3 style={{color:"#5086EC"}}>Professional Information</h3>
         <br />
        <span>{localStorage.getItem("postitle")}</span>
        <br />
        <span>{localStorage.getItem("compname")}</span>
        <br />
        <span>{localStorage.getItem("strdate")}-{localStorage.getItem("endate")}</span>
        <br />
        <span>{localStorage.getItem("worksumm")}</span>
        
      </div>

      <br />
     <br />
      <hr />

      <div style={{fontFamily:"Questrial",height:"250px", fontSize:"23px",color:"grey"}}>
        <h3 style={{color:"#5086EC"}}>Educational Information</h3>
         <br />
        <span>{localStorage.getItem("schname")}</span>
        <br />
        <span>{localStorage.getItem("schloc")}</span>
        <br />
        <span>{localStorage.getItem("edustrdate")}&nbsp;-&nbsp;{localStorage.getItem("eduendate")}</span>
        <br />
        <span>{localStorage.getItem("deg")}&nbsp;in&nbsp;{localStorage.getItem("field")}</span>
        <br />
        <span>{localStorage.getItem("desc")}</span>

      </div> 
        
      <br />
     <br />
      <hr />

      <div style={{fontFamily:"Questrial",height:"500px", fontSize:"23px",color:"grey"}}>
        <h3 style={{color:"#5086EC"}}>Key Skills</h3>
         <br />
        <span>{localStorage.getItem("sk1")}</span>
        <br />
        <span>{localStorage.getItem("sk2")}</span>
        <br />
        <span>{localStorage.getItem("sk3")}</span>
        <br />
        <span>{localStorage.getItem("sk4")}</span>
        <br />
        <span>{localStorage.getItem("sk5")}</span>
        <br />
        <br />
        <h3 style={{color:"#5086EC"}}>Summary</h3> 
        <span>{localStorage.getItem("summ")}</span>
         
      </div>
        
        <hr />
       </div>
       
       <div class="d-grid gap-2 col-6 mx-auto" style={{marginTop:"120px",width:"450px"}}>
    <button style={{fontFamily:"Kanit"}} class="btn btn-outline-success" id="mybtn" type="button" onClick={downloadPDF}>Download</button>
       </div>
         
    </div>
  )
}
