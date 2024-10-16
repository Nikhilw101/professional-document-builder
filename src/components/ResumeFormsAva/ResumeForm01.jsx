import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const ResumeForm01 = () => {
    document.body.style = 'background: white;';

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

    const [profileImg, setProfileImg] = useState(null);

    const handleChange = () => {
        const personalDetails = {
            "firstname": fname.current.value,
            "lastname": lname.current.value,
            "phone": phn.current.value,
            "email": eid.current.value,
            "address": add.current.value,
            "city": city.current.value,
            "postcode": pcode.current.value,
            "state": state.current.value,
            "country": country.current.value,
            "jobtitle": jobtitle.current.value
        };
        localStorage.setItem("personalDetails", JSON.stringify(personalDetails));
    };

    useEffect(() => {
        if (localStorage.getItem("personalDetails")) {
            const personalDetails = JSON.parse(localStorage.getItem("personalDetails"));
            if (personalDetails !== null) {
                fname.current.value = personalDetails.firstname;
                lname.current.value = personalDetails.lastname;
                phn.current.value = personalDetails.phone;
                eid.current.value = personalDetails.email;
                add.current.value = personalDetails.address;
                city.current.value = personalDetails.city;
                pcode.current.value = personalDetails.postcode;
                state.current.value = personalDetails.state;
                country.current.value = personalDetails.country;
                jobtitle.current.value = personalDetails.jobtitle;

                const img = localStorage.getItem("profilePhoto");
                setProfileImg(img);
            } else {
                console.warn("value not present");
            }
        }
    }, []);

    // Image upload
    const handlePhotoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const imageDataUrl = e.target.result;
                localStorage.setItem('profilePhoto', imageDataUrl);
                const img = localStorage.getItem("profilePhoto");
                setProfileImg(img);
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <>
       
            <div style={{ height: "900px", backgroundColor: "white", border: "2px solid white" }}>
                <div className='container' style={{ fontFamily: "Questrial", marginTop: "50px", textAlign: "center" }}>
                    <h2>Personal Details</h2>
                </div>

                <div className="container text-center" style={{ marginTop: "30px" }}>
                    <div className="row g-2"> {/* Reduced gap between rows */}
                        <div className="col-12 col-md-6">
                            <input ref={fname} type="text" className="form-control" placeholder="First Name" />
                        </div>

                        <div className="col-12 col-md-6">
                            <input ref={lname} type="text" className="form-control" placeholder="Last Name" />
                        </div>

                        <div className="col-12 col-md-6">
                            <input ref={phn} type="text" className="form-control" placeholder="Phone" />
                        </div>

                        <div className="col-12 col-md-6">
                            <input ref={eid} type="email" className="form-control" placeholder="Email Address" />
                        </div>

                        <div className="col-12">
                            <input ref={add} type="text" className="form-control" placeholder="Street name, no." />
                        </div>

                        <div className="col-12 col-md-6">
                            <input ref={city} type="text" className="form-control" placeholder="City" />
                        </div>

                        <div className="col-12 col-md-6">
                            <input ref={pcode} type="text" className="form-control" placeholder="Postcode" />
                        </div>

                        <div className="col-12 col-md-6">
                            <input ref={state} type="text" className="form-control" placeholder="State" />
                        </div>

                        <div className="col-12 col-md-6">
                            <input ref={country} type="text" className="form-control" placeholder="Country" />
                        </div>

                        <div className="col-12">
                            <input ref={jobtitle} type="text" className="form-control" placeholder="Job Title" />
                        </div>

                      


                        {/* Adjusted spacing below buttons */}
                        <div className="col-12 d-flex justify-content-center" style={{ marginTop: "80px" }}>
                            <Link to="/resumeform00" className="btn btn-outline-danger" style={{ marginRight: "20px", width: "180px", fontSize: "18px" }}>Back</Link>
                            <Link to="/resumeform02" onClick={handleChange} className="btn btn-outline-success" style={{ width: "180px", fontSize: "18px" }}>Next</Link>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    );
}

export default ResumeForm01;
