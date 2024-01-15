import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../components/button';

const Signup = () => {

    const navigate = useNavigate()

    const [isDisabled, setIsDisabled] = useState(true);

    const [nameValue, setNameValue] = useState();
    const handleName = (e) => {
        setNameValue(e.target.value)
        localStorage.setItem("nameValue", e.target.value)
        if (nameValue && numberValue && emailValue && passwordValue) {
            setIsDisabled(false)
        }
    }
    const [numberValue, setNumberValue] = useState();
    const handleNumber = (e) => {
        setNumberValue(e.target.value)
        if (nameValue && numberValue && emailValue && passwordValue) {
            setIsDisabled(false)
        }
    }

    const [emailValue, setEmailValue] = useState();
    const handleEmail = (e) => {
        setEmailValue(e.target.value)
        localStorage.setItem("emailValue", e.target.value)
        if (nameValue && numberValue && emailValue && passwordValue) {
            setIsDisabled(false)
        }
    }

    const [passwordValue, setPasswordValue] = useState();
    const handlePassword = (e) => {
        setPasswordValue(e.target.value)

        if (nameValue && numberValue && emailValue && passwordValue) {
            setIsDisabled(false)
        }
    }
    const [companyValue, setCompanyValue] = useState();
    const handleCompany = (e) => {
        setCompanyValue(e.target.value)
        if (nameValue && numberValue && emailValue && passwordValue) {
            setIsDisabled(false)
        }
    }
    return (
        <div className='desktop-screen'>
            <div  style={{padding:"1.5rem"}} className='mobile-screen pt-4  flex-between'>
                <div>
                    <div className='heading'>
                        Create your <br></br> PopX account
                    </div>

                    <div className='input-box-wrap'>
                        <div className='input-box-label'>
                            Full Name<span style={{ color: "#DD4A3D" }}>*</span>
                        </div>
                        <input
                            value={nameValue}
                            onChange={(e) => handleName(e)}
                            className='inputfield'
                            placeholder='Enter your full name'
                            type='text'
                        />
                    </div>
                    <div className='input-box-wrap'>
                        <div className='input-box-label'>
                            Phone Number<span style={{ color: "#DD4A3D" }}>*</span>
                        </div>
                        <input
                            value={numberValue}
                            onChange={(e) => handleNumber(e)}
                            className='inputfield'
                            placeholder='Enter phone number'
                            type='tel'
                        />
                    </div>
                    <div className='input-box-wrap'>
                        <div className='input-box-label'>
                            Email Address<span style={{ color: "#DD4A3D" }}>*</span>
                        </div>
                        <input
                            value={emailValue}
                            onChange={(e) => handleEmail(e)}
                            className='inputfield'
                            placeholder='Enter email address'
                            type='email'
                        />
                    </div>
                    <div className='input-box-wrap mb-3'>
                        <div className='input-box-label'>
                            Password<span style={{ color: "#DD4A3D" }}>*</span>
                        </div>
                        <input
                            value={passwordValue}
                            onChange={(e) => handlePassword(e)}
                            className='inputfield'
                            placeholder='Enter password'
                            type='password'
                        />
                    </div>
                    <div className='input-box-wrap'>
                        <div className='input-box-label'>
                            Company Name
                        </div>
                        <input
                            value={companyValue}
                            onChange={(e) => handleCompany(e)}
                            className='inputfield'
                            placeholder='Enter your company name'
                            type='text'
                        />
                    </div>
                    <div>
                        <div style={{ fontSize: "14px", color: "#1D2226", fontWeight: "500" }} className='mt-3'>
                            Are you an agency?
                        </div>
                        <div className='d-flex gap-4'>
                            <div>
                                <input className='me-1 ' type="radio" id="Yes" name="agency" value="Yes" />
                                <label style={{ fontSize: "14px", color: "#1D2226", fontWeight: "500" }} for="Yes">Yes</label>
                            </div>
                            <div>
                                <input style={{ backgroundColor: "red" }} className='me-1 ' type="radio" id="No" name="agency" value="No" />
                                <label style={{ fontSize: "14px", color: "#1D2226", fontWeight: "500" }} for="No">No</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Button
                        onTap={() => navigate("/settings")}
                        bgColor={isDisabled ? "#CBCBCB" : "#6C25FF"}
                        textColor={"#FFFFFF"}
                        text={"Create Account"}
                        disable={isDisabled ? true : false}
                    />
                </div>

            </div>
        </div>
    )
}

export default Signup
