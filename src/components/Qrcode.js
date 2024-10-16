import React from 'react'


const Qrcode = (props) => {

    let finalURL = `https://chart.googleapis.com/chart?cht=qr&chl=wa.me/${props.contactNumber}&chs=160x160&chld=L|0`
    return (
        <img src={finalURL} />
    )
}

export default Qrcode