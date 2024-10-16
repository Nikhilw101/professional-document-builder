import React, { useRef } from 'react'
import Navbar from './Navbar'
import { Link, NavLink } from 'react-router-dom';
import Footer from './Footer';

// 151515

export default function FormResume() {
  document.body.style = 'background: white;';

  // const data = useRef();

  // const handleChange=()=>{
  //   localStorage.setItem("firstName",data.current.value)
  //   let last = document.getElementById("lastname")
  //   last.value= localStorage.getItem("firstName")
  // }

  const fname = useRef();
  const lname = useRef();
  const phn = useRef();
  const eid = useRef();
  const add = useRef();
  const city = useRef();
  const pcode = useRef();
  const state = useRef();
  const country = useRef();
  const jobtitle = useRef();

  const handleChange = () => {
    const personalDetails =  {
    "firstname": fname.current.value ,
    "lastname": lname.current.value ,
    "phone": phn.current.value ,
    "email": eid.current.value ,
    "address": add.current.value ,
    "city": city.current.value ,
    "postcode": pcode.current.value ,
    "state": state.current.value ,
    "country": country.current.value ,
    "jobtitle": jobtitle.current.value 
    }

    localStorage.setItem()
  }

  return (
    <div className="App" style={{}}>
      <Navbar theme={"dark"} bgcolor={"#151515"} />

      <div style={{ height: "900px", backgroundColor: "white", border: "2px solid white" }}>

        <div style={{ fontFamily: "Questrial", marginTop: "50px" }}>
          <h2>Personal Details</h2>
        </div>

        <div class="container text-center " style={{ width: "800px", marginTop: "30px" }}>
          <div class="row row-cols-2">

            <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
              <input ref={fname} type="text" class="form-control" id="idfirstname" placeholder="First Name" /></div>

            <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
              <input ref={lname} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Last Name" /></div>

            <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
              <input ref={phn} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Phone" /></div>

            <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
              <input ref={eid} type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Address" /></div>
          </div>


          <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
            <input ref={add} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Address" /></div>

          <div class="row row-cols-2">

            <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
              <input ref={city} type="text" class="form-control" id="exampleFormControlInput1" placeholder="City" /></div>

            <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
              <input ref={pcode} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Postcode" /></div>

            <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
              <input ref={state} type="text" class="form-control" id="exampleFormControlInput1" placeholder="State" /></div>

            <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
              <input ref={country} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Country" /></div>
          </div>

          <div class="col"><label for="exampleFormControlInput1" class="form-label"></label>
            <input ref={jobtitle} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Job Title" /></div>

          <div class="mb-3" style={{ marginTop: "20px" }}>
            <label for="formFile" class="form-label" style={{ fontFamily: "Questrail", fontSize: "16px", fontStyle: "italic" }}>Upload your photo</label>
            <input class="form-control" type="file" id="formFile" />
          </div>

        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "80px", fontFamily: "kanit" }}>

          <Link to="/" class="btn btn-outline-danger" style={{ marginRight: "50px", width: "180px", fontSize: "18px" }}>Back</Link>

          <Link to="/formresume2" onClick={handleChange} class="btn btn-outline-success" style={{ width: "180px", fontSize: "18px" }}>Next</Link>
        </div>

        {/* <button onClick={handleChange} type="button" class="btn btn-primary">Submit</button> */}

      </div>

      <Footer />
    </div>
  )
}
