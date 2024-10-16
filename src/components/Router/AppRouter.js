import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import FormResume from "../FormResume";
import Home from "../Home";
import Info from "../Info";
import Social from "../Social";
import Slider from "../Slider";
import FormResume2 from "../FormResume2";
import FormResume3 from "../FormResume3";
import FormResume4 from "../FormResume4";
import Resume from "../Templates/Resume";
import Navbar from '../Navbar';
import Footer from '../Footer';

// import forms
//resume
import ResumeForm1 from "../ResumeForms/ResumeForm1"
import ResumeForm2 from "../ResumeForms/ResumeForm2"
import ResumeForm3 from "../ResumeForms/ResumeForm3"
import ResumeForm4 from "../ResumeForms/ResumeForm4"
import ResumeForm5 from "../ResumeForms/ResumeForm5"
import ResumeForm6 from "../ResumeForms/ResumeForm6"

//for avatar
import ResumeForm00 from "../ResumeFormsAva/ResumeForm00";
import ResumeForm01 from "../ResumeFormsAva/ResumeForm01"
import ResumeForm02 from "../ResumeFormsAva/ResumeForm02"
import ResumeForm03 from "../ResumeFormsAva/ResumeForm03"
import ResumeForm04 from "../ResumeFormsAva/ResumeForm04"
import ResumeForm05 from "../ResumeFormsAva/ResumeForm05"
import ResumeForm06 from "../ResumeFormsAva/ResumeForm06"
//business


//template
//resume
import Resume01 from "../templatesResume/Resume01";
import Resume02 from "../templatesResume/Resume02";
import Resume03 from "../templatesResume/Resume03";

//avatar
import ResumeAva01 from "../templatesResumeAva/ResumeAva01";
import ResumeAva02 from "../templatesResumeAva/ResumeAva02";
import ResumeAva03 from "../templatesResumeAva/ResumeAva03";

//business card



export default function AppRouter() {

  

  return (
    <>
     
     <Navbar theme={"dark"} bgcolor={"#151515"} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/formresume" element={<FormResume />} /> */}
        {/* <Route path="/formresume2" element={<FormResume2 />} /> */}
        {/* <Route path="/formresume3" element={<FormResume3 />} /> */}
        {/* <Route path="/formresume4" element={<FormResume4 />} /> */}
        {/* <Route path="/resume" element={<Resume />} /> */}

        {/* Resume Forms for avatar */}
        <Route path="/resumeform00" element={<ResumeForm00 />}/>
        <Route path="/resumeform01" element={<ResumeForm01 />}/>
        <Route path="/resumeform02" element={<ResumeForm02 />}/>
        <Route path="/resumeform03" element={<ResumeForm03 />}/>
        <Route path="/resumeform04" element={<ResumeForm04 />}/>
        <Route path="/resumeform05" element={<ResumeForm05 />}/>
        <Route path="/resumeform06" element={<ResumeForm06 />}/>

        
        <Route path="/resumeform1" element={<ResumeForm1 />} />
        <Route path="/resumeform2" element={<ResumeForm2 />} />
        <Route path="/resumeform3" element={<ResumeForm3 />} />
        <Route path="/resumeform4" element={<ResumeForm4 />} />
        <Route path="/resumeform5" element={<ResumeForm5 />} />
        <Route path="/resumeform6" element={<ResumeForm6 />} />
        {/* business card forms */}
     

        {/* Resume Template */}
        <Route path="/resume01" element={<Resume01 />} />
        <Route path="/resume02" element={<Resume02 />} />
        <Route path="/resume03" element={<Resume03 />} />

        {/* Resume Template  avatar*/}
        <Route path="/resumeava01" element={<ResumeAva01 />} />
        <Route path="/resumeava02" element={<ResumeAva02 />} />
        <Route path="/resumeava03" element={<ResumeAva03 />} />



        <Route path="/about" element={<Info />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/contact" element={<Social />} />

        {/* business templates */}
      


     
        {/* <Route path="/business/layout01" element={<Business01 />} /> */}

      </Routes>
      <Footer />

    </>
  );
}