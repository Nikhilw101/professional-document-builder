import React, { useState,useRef } from 'react';
import Avatar from 'avataaars';
import html2canvas from 'html2canvas';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useNavigate } from 'react-router-dom'; // Change to useNavigate
import ReactDOM from 'react-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';


const ResumeForm00 = () => {
    document.body.style.background = "white";
    const navigate = useNavigate();

    const [avatarOptions, setAvatarOptions] = useState({
        topType: "ShortHairShortCurly",
        accessoriesType: "Blank",
        hairColor: "BrownDark",
        facialHairType: "Blank",
        clotheType: "Hoodie",
        clotheColor: "PastelBlue",
        eyeType: "Happy",
        eyebrowType: "Default",
        mouthType: "Smile",
        skinColor: "Light"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAvatarOptions(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDownload = () => {
        // Get the SVG element directly from the DOM
        const svgElement = document.querySelector('#avatar svg');

        // Log the reference to see its structure
        console.log('SVG Element:', svgElement);

        // Check if svgElement is defined
        if (svgElement) {
            const svgData = new XMLSerializer().serializeToString(svgElement);

            const canvas = document.createElement('canvas');
            const svgWidth = 200;  // Assuming the SVG width you want
            const svgHeight = 200; // Assuming the SVG height you want
            canvas.width = svgWidth;
            canvas.height = svgHeight;

            const ctx = canvas.getContext('2d');
            const img = new Image();
            const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
            const url = URL.createObjectURL(svgBlob);

            img.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, svgWidth, svgHeight);
                const png = canvas.toDataURL('image/png');

                const link = document.createElement('a');
                link.href = png;
                link.download = 'avatar.png';
                link.click();

                // Cleanup
                URL.revokeObjectURL(url);
            };

            img.src = url; // Assign the URL for the image source
        } else {
            console.error("avatarRef is not defined or does not point to a valid SVG element");
        }
    };

    const generateAvatarImage = async () => {
        // Get the SVG element directly from the DOM
        const svgElement = document.querySelector('#avatar svg');

        // Check if svgElement is defined
        if (svgElement) {
            const svgData = new XMLSerializer().serializeToString(svgElement);

            const canvas = document.createElement('canvas');
            const svgWidth = 200;  // Assuming the SVG width you want
            const svgHeight = 200; // Assuming the SVG height you want
            canvas.width = svgWidth;
            canvas.height = svgHeight;

            const ctx = canvas.getContext('2d');
            const img = new Image();
            const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
            const url = URL.createObjectURL(svgBlob);

            return new Promise((resolve, reject) => {
                img.onload = () => {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0, svgWidth, svgHeight);
                    const png = canvas.toDataURL('image/png');
                    resolve(png); // Resolve the promise with the PNG data URL
                };

                img.onerror = (error) => {
                    reject(error); // Reject the promise on error
                };

                img.src = url; // Assign the URL for the image source
            });
        } else {
            console.error("avatarRef is not defined or does not point to a valid SVG element");
            return null;
        }
    };

    const handleNext = async () => {
        const avatarElement = document.getElementById('avatar');
        avatarElement.style.backgroundColor = 'white'; // Ensure white background

        try {
            const avatarDataUrl = await generateAvatarImage();
            if (avatarDataUrl) {
                localStorage.setItem('avatarImage', avatarDataUrl);
                localStorage.setItem('avatarOptions', JSON.stringify(avatarOptions));
                navigate('/resumeform01');
            }
        } catch (error) {
            console.error('Error generating canvas:', error);
        }
    };
    return (
        <>
        
        <div className="container mt-1">
            <h2 className="text-center mb-3">Avatar Generator</h2>
            <div className="text-center mb-3">
                <div
                    id="avatar"
                    style={{
                        display: 'inline-block',
                        padding: '10px',
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        overflow: 'hidden',
                    }}
                >
                    <Avatar
                        style={{ width: '200px', height: '200px' }}
                        avatarStyle="Circle"
                        {...avatarOptions}
                    />
                </div>
            </div>
            <div className="text-center mb-4">
                <button className="btn btn-primary me-2" onClick={handleDownload}>Download Avatar</button>
                <button className="btn btn-secondary" onClick={handleNext}>Next</button>
            </div>
            <form>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Top Type:</label>
                        <select name="topType" className="form-select" value={avatarOptions.topType} onChange={handleChange}>
                            {/* Add options here */}
                            <option value="NoHair">No Hair</option>
                            <option value="Eyepatch">Eyepatch</option>
                            <option value="Hat">Hat</option>
                            <option value="Hijab">Hijab</option>
                            <option value="Turban">Turban</option>
                            <option value="WinterHat1">Winter Hat 1</option>
                            <option value="WinterHat2">Winter Hat 2</option>
                            <option value="WinterHat3">Winter Hat 3</option>
                            <option value="WinterHat4">Winter Hat 4</option>
                            <option value="LongHairBigHair">Long Hair Big Hair</option>
                            <option value="LongHairBob">Long Hair Bob</option>
                            <option value="LongHairBun">Long Hair Bun</option>
                            <option value="LongHairCurly">Long Hair Curly</option>
                            <option value="LongHairCurvy">Long Hair Curvy</option>
                            <option value="LongHairDreads">Long Hair Dreads</option>
                            <option value="LongHairFrida">Long Hair Frida</option>
                            <option value="LongHairFro">Long Hair Fro</option>
                            <option value="LongHairFroBand">Long Hair Fro Band</option>
                            <option value="LongHairMiaWallace">Long Hair Mia Wallace</option>
                            <option value="LongHairNotTooLong">Long Hair Not Too Long</option>
                            <option value="LongHairShavedSides">Long Hair Shaved Sides</option>
                            <option value="LongHairStraight">Long Hair Straight</option>
                            <option value="LongHairStraight2">Long Hair Straight 2</option>
                            <option value="LongHairStraightStrand">Long Hair Straight Strand</option>
                            <option value="ShortHairDreads01">Short Hair Dreads 01</option>
                            <option value="ShortHairDreads02">Short Hair Dreads 02</option>
                            <option value="ShortHairFrizzle">Short Hair Frizzle</option>
                            <option value="ShortHairShaggyMullet">Short Hair Shaggy Mullet</option>
                            <option value="ShortHairShortCurly">Short Hair Short Curly</option>
                            <option value="ShortHairShortFlat">Short Hair Short Flat</option>
                            <option value="ShortHairShortRound">Short Hair Short Round</option>
                            <option value="ShortHairShortWaved">Short Hair Short Waved</option>
                            <option value="ShortHairSides">Short Hair Sides</option>
                            <option value="ShortHairTheCaesar">Short Hair The Caesar</option>
                            <option value="ShortHairTheCaesarSidePart">Short Hair The Caesar Side Part</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Accessories Type:</label>
                        <select name="accessoriesType" className="form-select" value={avatarOptions.accessoriesType} onChange={handleChange}>
                            <option value="Blank">Blank</option>
                            <option value="Kurt">Kurt</option>
                            <option value="Prescription01">Prescription01</option>
                            <option value="Prescription02">Prescription02</option>
                            <option value="Round">Round</option>
                            <option value="Sunglasses">Sunglasses</option>
                            <option value="Wayfarers">Wayfarers</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Hair Color:</label>
                        <select name="hairColor" className="form-select" value={avatarOptions.hairColor} onChange={handleChange}>
                            <option value="Auburn">Auburn</option>
                            <option value="Black">Black</option>
                            <option value="Blonde">Blonde</option>
                            <option value="BlondeGolden">Blonde Golden</option>
                            <option value="Brown">Brown</option>
                            <option value="BrownDark">Brown Dark</option>
                            <option value="PastelPink">Pastel Pink</option>
                            <option value="Platinum">Platinum</option>
                            <option value="Red">Red</option>
                            <option value="SilverGray">Silver Gray</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Facial Hair Type:</label>
                        <select name="facialHairType" className="form-select" value={avatarOptions.facialHairType} onChange={handleChange}>
                            <option value="Blank">Blank</option>
                            <option value="BeardMedium">Beard Medium</option>
                            <option value="BeardLight">Beard Light</option>
                            <option value="BeardMagestic">Beard Majestic</option>
                            <option value="MoustacheFancy">Moustache Fancy</option>
                            <option value="MoustacheMagnum">Moustache Magnum</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Clothe Type:</label>
                        <select name="clotheType" className="form-select" value={avatarOptions.clotheType} onChange={handleChange}>
                            <option value="BlazerShirt">Blazer Shirt</option>
                            <option value="BlazerSweater">Blazer Sweater</option>
                            <option value="CollarSweater">Collar Sweater</option>
                            <option value="GraphicShirt">Graphic Shirt</option>
                            <option value="Hoodie">Hoodie</option>
                            <option value="Overall">Overall</option>
                            <option value="ShirtCrewNeck">Shirt Crew Neck</option>
                            <option value="ShirtVNeck">Shirt V Neck</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Clothe Color:</label>
                        <select name="clotheColor" className="form-select" value={avatarOptions.clotheColor} onChange={handleChange}>
                            <option value="Black">Black</option>
                            <option value="Blue01">Blue01</option>
                            <option value="Blue02">Blue02</option>
                            <option value="Blue03">Blue03</option>
                            <option value="Gray01">Gray01</option>
                            <option value="Gray02">Gray02</option>
                            <option value="PastelBlue">Pastel Blue</option>
                            <option value="PastelGreen">Pastel Green</option>
                            <option value="PastelOrange">Pastel Orange</option>
                            <option value="PastelRed">Pastel Red</option>
                            <option value="PastelYellow">Pastel Yellow</option>
                            <option value="Red">Red</option>
                            <option value="White">White</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Eye Type:</label>
                        <select name="eyeType" className="form-select" value={avatarOptions.eyeType} onChange={handleChange}>
                            <option value="Happy">Happy</option>
                            <option value="Surprised">Surprised</option>
                            <option value="Sad">Sad</option>
                            <option value="Wink">Wink</option>
                            <option value="Default">Default</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Eyebrow Type:</label>
                        <select name="eyebrowType" className="form-select" value={avatarOptions.eyebrowType} onChange={handleChange}>
                            <option value="Default">Default</option>
                            <option value="Angry">Angry</option>
                            <option value="Flat">Flat</option>
                            <option value="Raised">Raised</option>
                            <option value="Sad">Sad</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Mouth Type:</label>
                        <select name="mouthType" className="form-select" value={avatarOptions.mouthType} onChange={handleChange}>
                            <option value="Smile">Smile</option>
                            <option value="Sad">Sad</option>
                            <option value="Disbelief">Disbelief</option>
                            <option value="Eating">Eating</option>
                            <option value="Grimace">Grimace</option>
                            <option value="Tongue">Tongue</option>
                            <option value="Vomit">Vomit</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Skin Color:</label>
                        <select name="skinColor" className="form-select" value={avatarOptions.skinColor} onChange={handleChange}>
                            <option value="Light">Light</option>
                            <option value="Tanned">Tanned</option>
                            <option value="Yellow">Yellow</option>
                            <option value="Pale">Pale</option>
                            <option value="Brown">Brown</option>
                            <option value="DarkBrown">Dark Brown</option>
                            <option value="Black">Black</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
       
        </>
    );
};

export default ResumeForm00;
