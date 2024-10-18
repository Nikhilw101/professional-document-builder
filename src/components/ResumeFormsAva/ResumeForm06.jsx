import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ResumeForm06 = () => {
    document.body.style.background = "white";

    const linkedinRef = useRef();
    const githubRef = useRef();
    const [additionalLinks, setAdditionalLinks] = useState([]);
    const [linkCount, setLinkCount] = useState(0);

    const loadToLocalStorage = () => {
        localStorage.setItem("LinkedInLink", linkedinRef.current.value);
        localStorage.setItem("GitHubLink", githubRef.current.value);
        
        // Store additional links
        additionalLinks.forEach((link, index) => {
            localStorage.setItem(`AdditionalLink${index}`, link.value);
        });
        localStorage.setItem("linkCount", linkCount);
    };

    const addLinkField = () => {
        if (linkCount < 2) {
            setLinkCount(linkCount + 1);
            setAdditionalLinks([...additionalLinks, { id: linkCount, value: '' }]);
        } else {
            alert("Only 2 additional links are allowed.");
        }
    };

    const handleLinkChange = (id, value) => {
        setAdditionalLinks(additionalLinks.map(link => link.id === id ? { ...link, value } : link));
    };

    const handleDeleteLink = (id) => {
        // Filter out the deleted link and update state
        const updatedLinks = additionalLinks.filter(link => link.id !== id);
        setAdditionalLinks(updatedLinks);
        
        // Decrease link count if needed
        if (linkCount > 0) setLinkCount(linkCount - 1);
    };

    useEffect(() => {
        // Load links from local storage
        if (localStorage.getItem("LinkedInLink")) {
            linkedinRef.current.value = localStorage.getItem("LinkedInLink");
        }
        if (localStorage.getItem("GitHubLink")) {
            githubRef.current.value = localStorage.getItem("GitHubLink");
        }
        const savedLinkCount = localStorage.getItem("linkCount");
        if (savedLinkCount) {
            setLinkCount(parseInt(savedLinkCount, 10));
            const savedLinks = [];
            for (let i = 0; i < savedLinkCount; i++) {
                savedLinks.push({ id: i, value: localStorage.getItem(`AdditionalLink${i}`) });
            }
            setAdditionalLinks(savedLinks);
        }
    }, []);

    return (
        <>
            <div style={{ fontFamily: "Questrial", marginTop: "50px", textAlign: "center" }}>
                <h2>Important Links</h2>
            </div>
            <div id='container' className="container text-center" style={{ marginTop: "30px", background: "white" }}>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <div className="mb-3">
                            <label htmlFor="LinkedInLink" className="form-label">LinkedIn</label>
                            <input 
                                ref={linkedinRef} 
                                type="text" 
                                className="form-control fs-5" 
                                placeholder='LinkedIn Profile URL' 
                                id="LinkedInLink" 
                                 defaultValue="https://www.linkedin.com/in/prem-jadhav-pj/"
                                required
                               
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="GitHubLink" className="form-label">GitHub</label>
                            <input 
                                ref={githubRef} 
                                type="text" 
                                className="form-control fs-5" 
                                placeholder='GitHub Profile URL' 
                                id="GitHubLink" 
                                 defaultValue="https://github.com/premj01"
                                required
                            />
                        </div>
                        {additionalLinks.map(link => (
                            <div key={link.id} className="mb-3">
                                <label htmlFor={`OtherLink${link.id}`} className="form-label">Other Platform</label>
                                <div className="input-group">
                                    <input 
                                        type="text" 
                                        className="form-control fs-5" 
                                        placeholder='Other Platform URL' 
                                        id={`OtherLink${link.id}`} 
                                        value={link.value}
                                        onChange={(e) => handleLinkChange(link.id, e.target.value)}
                                        required
                                    />
                                    <button 
                                        type="button" 
                                        className="btn btn-danger" 
                                        onClick={() => handleDeleteLink(link.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                        <button type="button" onClick={addLinkField} className="btn btn-outline-success">Add Link</button>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center" style={{ marginTop: "80px", fontFamily: "kanit", marginBottom: "5vh" }}>
                <Link to="/resumeform05" className="btn btn-outline-danger" style={{ marginRight: "50px", width: "180px", fontSize: "18px" }}>Back</Link>
                <Link onClick={loadToLocalStorage} to="/resumeAva01" className="btn btn-outline-success" style={{ width: "180px", fontSize: "18px" }}>Next</Link>
            </div>
        </>
    );
};

export default ResumeForm06;
