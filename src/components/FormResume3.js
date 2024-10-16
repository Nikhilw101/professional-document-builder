import React, { useRef } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import Footer from './Footer';

// 151515

export default function FormResume() {
  document.body.style = 'background: white;';

  const schname = useRef();
  const schloc = useRef();
  const edustrdate = useRef();
  const eduendate = useRef();
  const deg = useRef();
  const field = useRef();
  const desc = useRef();

  const handleChange=()=>{
    localStorage.setItem("schname",schname.current.value);
    localStorage.setItem("schloc",schloc.current.value);
    localStorage.setItem("edustrdate",edustrdate.current.value);
    localStorage.setItem("eduendate",eduendate.current.value);
    localStorage.setItem("deg",deg.current.value);
    localStorage.setItem("field",field.current.value);
    localStorage.setItem("desc",desc.current.value);
  }

  return (
    <div className="App" style={{}}>
      <Navbar theme={"dark"} bgcolor={"#151515"}/>
    
    <div style={{height:"900px",backgroundColor:"white", border:"2px solid white"}}>

      <div style={{fontFamily:"Questrial", marginTop:"50px"}}>
        <h2>Educational Details</h2>
      </div>

      <div class="container text-center " style={{width:"800px",marginTop:"30px"}}>
      <div class="row row-cols-2">

    <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={schname} type="text" class="form-control" id="exampleFormControlInput1" placeholder="School/College Name"/></div>

    <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={schloc} type="text" class="form-control" id="exampleFormControlInput1" placeholder="School/College Location"/></div>

    <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={edustrdate} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Start Date"/></div>

    <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={eduendate} type="text" class="form-control" id="exampleFormControlInput1" placeholder="End Date"/></div>

  <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={deg} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Degree"/></div>

    <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input  ref={field} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Field of Study"/></div>

  </div>
   
   
  
  <div class="mb-3" style={{marginTop:"30px"}}>
  <label for="exampleFormControlTextarea1" class="form-label" style={{fontFamily:"Questrail", fontSize:"16px", fontStyle:"italic"}}>Description</label>
  <textarea ref={desc} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Description...' style={{height:"300px"}}></textarea>
</div>

   

</div>
  <div style={{display:"flex", justifyContent:"center", marginTop:"80px", fontFamily:"kanit"}}> 

   <Link to="/formresume2"  class="btn btn-outline-danger" style={{marginRight:"50px", width:"180px",fontSize:"18px"}}>Back</Link>

   <Link to="/formresume4" onClick={handleChange} class="btn btn-outline-success" style={{width:"180px",fontSize:"18px"}}>Next</Link>
  </div>

</div>

<Footer/>
    </div>
  )
}
