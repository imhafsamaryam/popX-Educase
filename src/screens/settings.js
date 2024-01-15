import React, { useState } from 'react'

const Settings = () => {

    const [selectedImage, setSelectedImage] = useState('/images/mobile-bg.avif');
    function handleChange(e) {
        console.log(e.target.files);
        setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <div className='desktop-screen'>
            <div className='mobile-screen '>
                <div>
                    <div style={{ fontSize: "16px", color: "#1D2226", fontWeight: "500" }} className='appBar '>
                        Account Settings
                    </div>
                    <div className='flex-gap'>
                        <div className='position-relative '>
                            <div>
                                <img src={selectedImage}
                                    width={"60px"} height={"60px"} style={{ borderRadius: "100px",objectFit:"cover" }} />
                            </div>
                            <div className='absolute-right image-upload' >
                                <label for="file-input">
                                    <img src='/images/camera.svg' width={"20px"} height={"20px"} style={{objectFit:"cover"}} />
                                </label>

                                <input
                                    id="file-input"
                                    type="file"
                                    name="myImage"
                                    onChange={handleChange} />


                            </div>


                        </div>
                        <div>
                            <div style={{ fontSize: "15px", color: "#1D2226", fontWeight: "600" }}>{localStorage.getItem("nameValue") ? localStorage.getItem("nameValue") : "Marry Doe"}</div>
                            <div style={{ fontSize: "13px", color: "#1D2226", fontWeight: "400" }}>{localStorage.getItem("emailValue")}</div>
                        </div>
                    </div>
                    <div style={{ fontSize: "13px", color: "#1D2226", fontWeight: "400", paddingBottom: "1.5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                    </div>
                    <div className='divider'></div>


                </div>
            </div>
        </div>
    )
}

export default Settings
