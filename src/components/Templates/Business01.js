import React   from 'react'

import '../styleSheets/business01.css'
import x from '../Logos/insta.png'
import Qrmodule from '../Qrcode'

const qrCodeGenerator = () =>{
    let qrContentInput = localStorage.getItem("businessMobile")

    return {
        qrContent: qrContentInput, // input number  
        countryCode: "+91",         // country code 
        width: 200,
        height: 200,
        foreColor: "#000000",
        backColor: "#ffffff"
    }

    
}


const Business01 = () => {


    localStorage.setItem("businessTitle" , "ViswaTech");
    localStorage.setItem("businessTagLine" , "Our goal is to create a easy world");
    localStorage.setItem("businessMobile" , "+91 7620459061");

    return (
        <>

            <Qrmodule  value={qrCodeGenerator()}/>


            <div className="container01">
                <div className="front">
                    <div className="hexagon hex1">
                        <div className="front-contain">
                            <div className="image01">
                                <img src={x} alt="" className="front-img" />
                            </div>
                            <h2 className="title01">{localStorage.getItem("businessTitle")}</h2>
                            <p className="desc01">{localStorage.getItem("businessTagLine")}</p>
                        </div>
                    </div>
                </div>
                <div className="back">
                    <div className="hexagon hex2">

                        <div className="qrcode" id='qr-code'>
                            <ion-icon name="qr-code-outline" style={{ height: '80px', width: '80px' }}></ion-icon>
                        </div>
                    </div>
                    <div className="back-container">
                        <div className="back-detailss">
                            <ion-icon className="back-icon" style={{width: "15px",
    padding: '2px'}} name="phone-portrait-outline"></ion-icon>
                            <p>{localStorage.getItem("businessMobile")}</p>
                        </div>
                        <div className="back-detailss">
                            <ion-icon className="back-icon" style={{width: "15px",
    padding: '2px'}} name="mail-outline"></ion-icon>
                            <p> abc123@gmail.com</p>
                        </div>
                        <div className="back-detailss">
                            <ion-icon className="back-icon" style={{width: "15px",
    padding: '2px'}} name="globe-outline"></ion-icon>
                            <p> www.google.com</p>
                        </div>
                        <div className="back-detailss">
                            <ion-icon className="back-icon" style={{width: "15px",
    padding: '2px'}} name="location-outline"></ion-icon>
                            <p className="back-details01">Government Polytechnic Nashik</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Business01