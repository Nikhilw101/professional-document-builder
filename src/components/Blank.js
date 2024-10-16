import React from 'react'
import logo from './logotemp.svg'

export default function Blank() {
  return (
    <div style={{height: "45px", fontFamily: "Kanit"}}>
        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <div class="container-fluid" style={{justifyContent: "right", marginBottom: "5px", backgroundColor:"black"}}>
    <span class="navbar-brand mb-0 h1" style={{color:"whitesmoke"}}>The Professional Document Builder</span>
  </div>
</nav>
    </div>
  )
}

// Normal Plain
{/* <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-danger" style="width: 100%"></div>
</div> */}

// Animated Stripped
{/* <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
<div class="progress-bar progress-bar-striped progress-bar-animated bg-dark" style={{width: "100%"}}></div>
</div> */}