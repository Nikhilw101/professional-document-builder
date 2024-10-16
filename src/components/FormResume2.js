import React, { useRef } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import Footer from './Footer';

// 151515

export default function FormResume() {
  document.body.style = 'background: white;';
  
  const postitle = useRef();
  const compname = useRef();
  const strdate = useRef();
  const endate = useRef();
  const worksumm = useRef();

  const handleChange=()=>{
    localStorage.setItem("postitle",postitle.current.value);
    localStorage.setItem("compname",compname.current.value);
    localStorage.setItem("strdate",strdate.current.value);
    localStorage.setItem("endate",endate.current.value);
    localStorage.setItem("worksumm",worksumm.current.value);
  }

  return (
    <div className="App" style={{}}>
      <Navbar theme={"dark"} bgcolor={"#151515"}/>
    
    <div style={{height:"900px",backgroundColor:"white", border:"2px solid white"}}>

      <div style={{fontFamily:"Questrial", marginTop:"50px"}}>
        <h2>Professional Details</h2>
      </div>

      <div class="container text-center " style={{width:"800px",marginTop:"30px"}}>
      <div class="row row-cols-2">

    <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={postitle} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Position Title"/></div>

    <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={compname} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Company Name"/></div>

    <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={strdate} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Start Date"/></div>

    <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={endate} type="text" class="form-control" id="exampleFormControlInput1" placeholder="End Date"/></div>
  </div>
   
  
  <div class="mb-3" style={{marginTop:"30px"}}>
  <label for="exampleFormControlTextarea1" class="form-label" style={{fontFamily:"Questrail", fontSize:"16px", fontStyle:"italic"}}>Your Work Summary</label>
  <textarea ref={worksumm} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Work Summary...' style={{height:"300px"}}></textarea>
</div>

   

</div>
  <div style={{display:"flex", justifyContent:"center", marginTop:"80px", fontFamily:"kanit"}}> 

   <Link to="/formresume"  class="btn btn-outline-danger" style={{marginRight:"50px", width:"180px",fontSize:"18px"}}>Back</Link>

   <Link to="/formresume3" onClick={handleChange} class="btn btn-outline-success" style={{width:"180px",fontSize:"18px"}}>Next</Link>
  </div>

</div>

<Footer/>
    </div>
  )
}
