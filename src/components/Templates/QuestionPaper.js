import React, { useRef } from 'react'
// import FormQuestion from '../FormQuestion'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import img from './Sky.png'

export default function QuestionPaper() {

    const pdfRef = useRef(); 

    const downloadPDF = ()=>{
      const mybtn = document.getElementById("mybtn");
      mybtn.style.display = 'none';
      const input = pdfRef.current;
      html2canvas(input).then((canvas)=>{
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('l', 'mm', 'a3', true);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          const imgWidth = canvas.width;
          const imgHeight = canvas.height;
          const ratio = Math.min(pdfWidth/ imgWidth, pdfHeight/ imgHeight);
          const imgX = (pdfWidth - imgWidth * ratio) / 2;
          const imgY = 5;
          pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth * ratio, imgHeight * ratio);
          pdf.save('questionpaper.pdf')
          mybtn.style.display = 'block';
      });   
    } 

    document.body.style = 'background: white;';
  return (
    <div ref={pdfRef}  style={{border:"2px solid white",backgroundColor:"white"}}>
      <div style={{height:"1000px",width:"100%", display:"flex", flexDirection:"row"}}>
         
        
       
        <div style={{border:"2px soild black",width:"50%", textAlign:"center", marginTop:"30px"}}>

        

        <div style={{textAlign:"right",marginRight:"50px"}}>
          <span style={{fontFamily:"Roboto Slab", fontSize:"22px"}}>{localStorage.getItem("code")}</span>  
            </div>
            <br />

            <div style={{display:"flex"}}>

            <img style={{height:"60px",marginLeft:"70px"}} src={img} alt="" />
          <h6 style={{fontFamily:"Roboto",marginLeft:"70px",marginTop:"20px"}}>&nbsp;GOVERNMENT POLYTECHNIC, NASHIK</h6>

            </div>
           
          <span style={{fontFamily:"Roboto", fontSize:"13px"}}>Academically autonomous Institute of Government of Maharashtra</span>  
          <h4 style={{fontFamily:"Roboto", fontSize:"21px"}}>Periodic Test - {localStorage.getItem("testno")}</h4>
          <h5 style={{fontFamily:"Roboto", fontSize:"18px"}}>Diploma Programme In {localStorage.getItem("prog")}</h5>

          <span>------------------------------------------------------------------------------------------------------</span>

          <div class="container">
          <div class="row row-cols-2">
              <span style={{fontFamily:"Roboto", fontSize:"17"}}><b>Course : {localStorage.getItem("course")}</b></span>
              <span style={{fontFamily:"Roboto", fontSize:"17"}}><b>Term : {localStorage.getItem("term")}</b></span>
              <span style={{fontFamily:"Roboto", fontSize:"17"}}><b>Marks : {localStorage.getItem("marks")}</b></span>
              <span style={{fontFamily:"Roboto", fontSize:"17"}}><b>Duration : {localStorage.getItem("durationpaper")}</b></span>
              <span style={{fontFamily:"Roboto", fontSize:"17"}}><b>Date : {localStorage.getItem("datepaper")}</b></span>
              <span style={{fontFamily:"Roboto", fontSize:"17"}}><b>Time : {localStorage.getItem("timepaper")}</b></span>
          </div>
          </div>
          <span>------------------------------------------------------------------------------------------------------</span>
          
         <div>
           <div class="container" style={{textAlign:"left",fontFamily:"Roboto"}}>
             <span style={{marginLeft:"10px"}}> <b>Instructions:</b></span>
           </div>

            <div style={{textAlign:"left", marginLeft:"80px",fontFamily:"Roboto", fontSize:"13px"}}>
                 <span> 1.	All Questions are compulsory.</span> <br />					
                 <span>2.	Illustrate your answers with neat sketches wherever necessary.</span><br />	
                 <span>3.	Figures to the right indicate full marks and CO means Course Outcome. </span><br />	
                 <span> 4.	Assume suitable additional data if necessary.</span><br />	
                 <span>5.	Communication instruments such as pager, mobile etc. are not allowed in the exam hall.
                 </span><br />	
            </div> 
         </div> 

         <span>------------------------------------------------------------------------------------------------------</span>

            <br />
            <br />
          
           <div style={{textAlign:"left"}}>

              <span style={{marginLeft:"30px",fontFamily:"Roboto",fontStyle:"italic"}}> <b>Q.1 ATTEMPTS ANY TWO </b></span>
              <div style={{textAlign:"right", marginRight:"40px"}}>
                <span style={{fontFamily:"Roboto", fontStyle:"italic"}}><b>(08)</b></span>
              </div>


              <div style={{marginLeft:"60px", fontFamily:"Roboto", fontSize:"17px"}}>
              <span>{localStorage.getItem("coa")} &nbsp; a. &nbsp;{localStorage.getItem("q1a")} </span>
              <br />
              <span>{localStorage.getItem("cob")} &nbsp; b. &nbsp;{localStorage.getItem("q1b")} </span>
              <br />
              <span>{localStorage.getItem("coc")} &nbsp; c. &nbsp;{localStorage.getItem("q1c")} </span>
              <br />
              </div>
           </div>
           
           <br />
           <br />
           <div style={{textAlign:"left"}}>
              <span style={{marginLeft:"30px",fontFamily:"Roboto",fontStyle:"italic"}}><b>Q.2 ATTEMPTS ANY THREE </b></span>
              <div style={{textAlign:"right", marginRight:"40px"}}>
                <span style={{fontFamily:"Roboto", fontStyle:"italic"}}> <b>(12)</b></span>
              </div>
              
              <div style={{marginLeft:"60px", fontFamily:"Roboto", fontSize:"17px"}}>
              <span>{localStorage.getItem("co2a")} &nbsp; a. &nbsp;{localStorage.getItem("q2a")} </span>
              <br />
              <span>{localStorage.getItem("co2b")} &nbsp; b. &nbsp;{localStorage.getItem("q2b")} </span>
              <br />
              <span>{localStorage.getItem("co2c")} &nbsp; c. &nbsp;{localStorage.getItem("q2c")} </span>
              <br />
              <span>{localStorage.getItem("co2d")} &nbsp; d. &nbsp;{localStorage.getItem("q2d")} </span>
              <br />
              <span>{localStorage.getItem("co2e")} &nbsp; e. &nbsp;{localStorage.getItem("q2e")} </span>
              <br />
              </div>
           </div>

        </div>

          {/* part 2 */}

        <div style={{border:"2px soild purple",width:"50%",textAlign:"center", marginTop:"30px"}}>

        <div style={{textAlign:"right",marginRight:"50px"}}>
          <span style={{fontFamily:"Roboto Slab", fontSize:"22px"}}>{localStorage.getItem("code")}</span>  
            </div>
            <br />

            <div style={{display:"flex"}}>

            <img style={{height:"60px",marginLeft:"70px"}} src={img} alt="" />
          <h6 style={{fontFamily:"Roboto",marginLeft:"70px",marginTop:"20px"}}>&nbsp;GOVERNMENT POLYTECHNIC, NASHIK</h6>

            </div>

          <span style={{fontFamily:"Roboto", fontSize:"13px"}}>Academically autonomous Institute of Government of Maharashtra</span>  
          <h4 style={{fontFamily:"Roboto", fontSize:"21px"}}>Periodic Test - {localStorage.getItem("testno")}</h4>
          <h5 style={{fontFamily:"Roboto", fontSize:"18px"}}>Diploma Programme In {localStorage.getItem("prog")}</h5>

          <span>------------------------------------------------------------------------------------------------------</span>

          <div class="container">
          <div class="row row-cols-2">
              <span style={{fontFamily:"Roboto", fontSize:"17"}}><b>Course : {localStorage.getItem("course")}</b></span>
              <span style={{fontFamily:"Roboto", fontSize:"17"}}><b>Term : {localStorage.getItem("term")}</b></span>
              <span style={{fontFamily:"Roboto", fontSize:"17"}}><b>Marks : {localStorage.getItem("marks")}</b></span>
              <span style={{fontFamily:"Roboto", fontSize:"17"}}><b>Duration : {localStorage.getItem("durationpaper")}</b></span>
              <span style={{fontFamily:"Roboto", fontSize:"17"}}><b>Date : {localStorage.getItem("datepaper")}</b></span>
              <span style={{fontFamily:"Roboto", fontSize:"17"}}><b>Time : {localStorage.getItem("timepaper")}</b></span>
          </div>
          </div>
          <span>------------------------------------------------------------------------------------------------------</span>
          
         <div>
           <div class="container" style={{textAlign:"left",fontFamily:"Roboto"}}>
             <span style={{marginLeft:"10px"}}> <b>Instructions:</b></span>
           </div>

            <div style={{textAlign:"left", marginLeft:"80px",fontFamily:"Roboto", fontSize:"13px"}}>
                 <span> 1.	All Questions are compulsory.</span> <br />					
                 <span>2.	Illustrate your answers with neat sketches wherever necessary.</span><br />	
                 <span>3.	Figures to the right indicate full marks and CO means Course Outcome. </span><br />	
                 <span> 4.	Assume suitable additional data if necessary.</span><br />	
                 <span>5.	Communication instruments such as pager, mobile etc. are not allowed in the exam hall.
                 </span><br />	
            </div> 
         </div> 

         <span>------------------------------------------------------------------------------------------------------</span>

            <br />
            <br />
          
           <div style={{textAlign:"left"}}>

              <span style={{marginLeft:"30px",fontFamily:"Roboto",fontStyle:"italic"}}> <b>Q.1 ATTEMPTS ANY TWO </b></span>
              <div style={{textAlign:"right", marginRight:"40px"}}>
                <span style={{fontFamily:"Roboto", fontStyle:"italic"}}><b>(08)</b></span>
              </div>


              <div style={{marginLeft:"60px", fontFamily:"Roboto", fontSize:"17px"}}>
              <span>{localStorage.getItem("coa")} &nbsp; a. &nbsp;{localStorage.getItem("q1a")} </span>
              <br />
              <span>{localStorage.getItem("cob")} &nbsp; b. &nbsp;{localStorage.getItem("q1b")} </span>
              <br />
              <span>{localStorage.getItem("coc")} &nbsp; c. &nbsp;{localStorage.getItem("q1c")} </span>
              <br />
              </div>
           </div>
           
           <br />
           <br />
           <div style={{textAlign:"left"}}>
              <span style={{marginLeft:"30px",fontFamily:"Roboto",fontStyle:"italic"}}><b>Q.2 ATTEMPTS ANY THREE </b></span>
              <div style={{textAlign:"right", marginRight:"40px"}}>
                <span style={{fontFamily:"Roboto", fontStyle:"italic"}}> <b>(12)</b></span>
              </div>
              
              <div style={{marginLeft:"60px", fontFamily:"Roboto", fontSize:"17px"}}>
              <span>{localStorage.getItem("co2a")} &nbsp; a. &nbsp;{localStorage.getItem("q2a")} </span>
              <br />
              <span>{localStorage.getItem("co2b")} &nbsp; b. &nbsp;{localStorage.getItem("q2b")} </span>
              <br />
              <span>{localStorage.getItem("co2c")} &nbsp; c. &nbsp;{localStorage.getItem("q2c")} </span>
              <br />
              <span>{localStorage.getItem("co2d")} &nbsp; d. &nbsp;{localStorage.getItem("q2d")} </span>
              <br />
              <span>{localStorage.getItem("co2e")} &nbsp; e. &nbsp;{localStorage.getItem("q2e")} </span>
              <br />
              </div>
           </div>
        </div>

      </div>

      <div class="d-grid gap-2 col-6 mx-auto" style={{marginTop:"10px",width:"200px"}}>
    <button style={{fontFamily:"Kanit", marginBottom:"100px"}} class="btn btn-outline-success" id="mybtn" type="button" onClick={downloadPDF}>Download</button>
       </div>
    </div>
  )
}
