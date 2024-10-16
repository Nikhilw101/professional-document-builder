import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const ResumeForm1 = () => {
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
            firstname: fname.current.value,
            lastname: lname.current.value,
            phone: phn.current.value,
            email: eid.current.value,
            address: add.current.value,
            city: city.current.value,
            postcode: pcode.current.value,
            state: state.current.value,
            country: country.current.value,
            jobtitle: jobtitle.current.value,
        };
        localStorage.setItem('personalDetails', JSON.stringify(personalDetails));
    };

    useEffect(() => {
        const personalDetails = localStorage.getItem("personalDetails");
        if (personalDetails) {
            const data = JSON.parse(personalDetails);
            fname.current.value = data.firstname;
            lname.current.value = data.lastname;
            phn.current.value = data.phone;
            eid.current.value = data.email;
            add.current.value = data.address;
            city.current.value = data.city;
            pcode.current.value = data.postcode;
            state.current.value = data.state;
            country.current.value = data.country;
            jobtitle.current.value = data.jobtitle;

            const img = localStorage.getItem("profilePhoto");
            setProfileImg(img);
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
                setProfileImg(imageDataUrl);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
       
            <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <div style={{ flex: "1 0 auto", minHeight: "80vh", backgroundColor: "white", border: "2px solid white", paddingBottom: "50px" }}>
                    <div className='container' style={{ fontFamily: "Questrial", marginTop: "50px", textAlign: "center" }}>
                        <h2>Personal Details</h2>
                    </div>
                    <div className="container text-center" style={{ maxWidth: "800px", marginTop: "30px" }}>
                        <div className="row row-cols-1 row-cols-md-2 g-3">
                            <div className="col">
                                <label htmlFor="idfirstname" className="form-label">First Name</label>
                                <input ref={fname} type="text" className="form-control" id="idfirstname" placeholder="First Name" />
                            </div>
                            <div className="col">
                                <label htmlFor="idlastname" className="form-label">Last Name</label>
                                <input ref={lname} type="text" className="form-control" id="idlastname" placeholder="Last Name" />
                            </div>
                            <div className="col">
                                <label htmlFor="idphone" className="form-label">Phone</label>
                                <input ref={phn} type="text" className="form-control" id="idphone" placeholder="Phone" />
                            </div>
                            <div className="col">
                                <label htmlFor="idemail" className="form-label">Email Address</label>
                                <input ref={eid} type="email" className="form-control" id="idemail" placeholder="Email Address" />
                            </div>
                        </div>
                        <div className="col">
                            <label htmlFor="idaddress" className="form-label">Address</label>
                            <input ref={add} type="text" className="form-control" id="idaddress" placeholder="Street name, no." />
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 g-3">
                            <div className="col">
                                <label htmlFor="idcity" className="form-label">City</label>
                                <input ref={city} type="text" className="form-control" id="idcity" placeholder="City" />
                            </div>
                            <div className="col">
                                <label htmlFor="idpostcode" className="form-label">Postcode</label>
                                <input ref={pcode} type="text" className="form-control" id="idpostcode" placeholder="Postcode" />
                            </div>
                            <div className="col">
                                <label htmlFor="idstate" className="form-label">State</label>
                                <input ref={state} type="text" className="form-control" id="idstate" placeholder="State" />
                            </div>
                            <div className="col">
                                <label htmlFor="idcountry" className="form-label">Country</label>
                                <input ref={country} type="text" className="form-control" id="idcountry" placeholder="Country" />
                            </div>
                        </div>
                        <div className="col">
                            <label htmlFor="idjobtitle" className="form-label">Job Title</label>
                            <input ref={jobtitle} type="text" className="form-control" id="idjobtitle" placeholder="Job Title" />
                        </div>
                        <div className="mb-3" style={{ marginTop: "20px" }}>
                            <label htmlFor="formFile" className="form-label" style={{ fontFamily: "Questrail", fontSize: "16px", fontStyle: "italic" }}>
                                Upload your photo <span>Note: Image size should be 1:1.</span>
                            </label>
                            <input className="form-control" type="file" accept='image/*' onChange={handlePhotoUpload} id="formFile" />
                        </div>
                        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {profileImg && <img src={profileImg} alt="Profile" height="150" style={{ borderRadius: "50%" }} />}
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "80px", fontFamily: "kanit" }}>
                        <Link to="/" className="btn btn-outline-danger" style={{ marginRight: "50px", width: "180px", fontSize: "18px" }}>Back</Link>
                        <Link to="/resumeform2" onClick={handleChange} className="btn btn-outline-success" style={{ width: "180px", fontSize: "18px" }}>Next</Link>
                    </div>
                </div>
             
            </div>
        </>
    );
};

export default ResumeForm1;
