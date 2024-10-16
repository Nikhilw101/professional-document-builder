import React, { useRef } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import Footer from './Footer';

// 151515

export default function FormResume() {
  document.body.style = 'background: white;';
  
  const sk1 = useRef();
  const sk2 = useRef();
  const sk3 = useRef();
  const sk4 = useRef();
  const sk5 = useRef();
  const summ = useRef();


  const handleChange=()=>{
    localStorage.setItem("sk1",sk1.current.value);
    localStorage.setItem("sk2",sk2.current.value);
    localStorage.setItem("sk3",sk3.current.value);
    localStorage.setItem("sk4",sk4.current.value);
    localStorage.setItem("sk5",sk5.current.value);
    localStorage.setItem("summ",summ.current.value);

  }

  return (
    <div className="App" style={{}}>
      <Navbar theme={"dark"} bgcolor={"#151515"}/>
    
    <div style={{height:"1050px",backgroundColor:"white", border:"2px solid white"}}>

      <div style={{fontFamily:"Questrial", marginTop:"50px"}}>
        <h2>Key Skills & Summary</h2>
      </div>

      <div class="container text-center " style={{width:"800px",marginTop:"30px"}}>


      <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={sk1} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Skill 1"/></div>

  <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={sk2} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Skill 2"/></div>

  <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={sk3} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Skill 3"/></div>

  <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={sk4} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Skill 4"/></div>

  <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
  <input ref={sk5} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Skill 5"/></div>
   
  
  <div class="mb-3" style={{marginTop:"30px"}}>
  <label for="exampleFormControlTextarea1" class="form-label" style={{fontFamily:"Questrail", fontSize:"16px", fontStyle:"italic"}}>Summary</label>
  <textarea ref={summ} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Summary...' style={{height:"300px"}}></textarea>
</div>

   

</div>
  <div style={{display:"flex", justifyContent:"center", marginTop:"80px", fontFamily:"kanit"}}> 

   <Link to="/formresume3"  class="btn btn-outline-danger" style={{marginRight:"50px", width:"180px",fontSize:"18px"}}>Back</Link>

   <Link to="/resume" onClick={handleChange} class="btn btn-outline-success" style={{width:"180px",fontSize:"18px"}}>Next</Link>
  </div>

</div>

<Footer/>
    </div>
  )
}
