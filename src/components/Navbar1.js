import React from 'react'

export default function Navbar() {
  return (
    <div>

      <nav class="nav-extended" style={{backgroundColor: "#EE6E73", fontFamily: "Bricolage Grotesque"}}>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo"><img src="..." alt="..." /></a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
     <div>
      <ul id="nav-mobile" class="right hide-on-med-and-down" >
        <li><a  style={{fontSize: "17px", marginLeft: "15px"}} href="sass.html">Home</a></li>
        <li><a  style={{fontSize: "17px", marginLeft: "15px" }} href="badges.html">Learn</a></li>
        <li><a  style={{fontSize: "17px", marginRight: "30px", marginLeft: "15px"}} href="collapsible.html">About</a></li>
        
      </ul>
      </div>
    </div>
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab"><a style={{fontSize: "15px"}} class="active" href="#test2">Resume</a></li>
        <li class="tab"><a style={{fontSize: "15px"}} class="active" href="#test3">Business Card</a></li>
        <li class="tab"><a style={{fontSize: "15px"}} class="active" href="#test1">CV</a></li>
        <li class="tab"><a style={{fontSize: "15px"}} class="active" href="#test4">More</a></li>
      </ul>
    </div>
  </nav>


    </div>
  )
}
