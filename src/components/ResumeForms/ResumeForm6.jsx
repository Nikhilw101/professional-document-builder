import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const ResumeForm6 = () => {
    document.body.style.background = "white";

    const ResumeDesc = useRef();
    
    const loadToLocalStorage = () => {
        localStorage.setItem("ResumeDescription", ResumeDesc.current.value);
    };

    useEffect(() => {
        if (localStorage.getItem("ResumeDescription")) {
            ResumeDesc.current.value = localStorage.getItem("ResumeDescription");
        }
    }, []);
    
    return (
        <>
     
            <div style={{ fontFamily: "Questrial", marginTop: "50px", textAlign: "center" }}>
                <h2>Summary</h2>
            </div>
            <div id='container' className="container text-center" style={{ marginTop: "30px", background: "white" }}>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <div className="mb-3">
                            <label htmlFor="DescResume" className="form-label">Describe your resume here!</label>
                            <textarea 
                                ref={ResumeDesc} 
                                className="form-control fs-5" 
                                placeholder='Describe your resume here' 
                                id="DescResume" 
                                rows="10" 
                                required>
                            </textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center" style={{ marginTop: "80px", fontFamily: "kanit", marginBottom: "5vh" }}>
                <Link to="/resumeform5" className="btn btn-outline-danger" style={{ marginRight: "50px", width: "180px", fontSize: "18px" }}>Back</Link>
                <Link onClick={loadToLocalStorage} to="/resume01" className="btn btn-outline-success" style={{ width: "180px", fontSize: "18px" }}>Next</Link>
            </div>
         
        </>
    );
};

export default ResumeForm6;
