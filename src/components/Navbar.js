import React from 'react';
import { Link } from 'react-router-dom';
import free from './Logos/flaticon/copy.png';


export default function Navbar(props) {
  return (
    <div>  
      <nav className="navbar navbar-expand-lg" data-bs-theme={props.theme} style={{ backgroundColor: props.bgcolor }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ fontFamily: "Italianno", display: "flex", flexDirection: "row" }}>
            <img style={{ height: "40px", filter: "invert(100%)" }} src={free} alt="" />
            <span style={{ fontSize: "30px" }}>&nbsp;Document Builder</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ borderColor: "rgba(0, 0, 0, 0.1)" }} // Change the border color if needed
          >
            <span
              className="navbar-toggler-icon"
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`
              }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ fontFamily: "Kanit", fontSize: "18px", display: "flex", alignItems: "center" }}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/slider">Slider</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
