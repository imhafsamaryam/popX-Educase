import React, { useState } from 'react'
import Button from '../components/button';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate()

    const [isDisabled, setIsDisabled] = useState(true);

    const [emailValue, setEmailValue] = useState();

    const handleEmail = (e) => {
        setEmailValue(e.target.value)
        localStorage.setItem("emailValue", e.target.value)
        if (emailValue && passwordValue) {
            setIsDisabled(false)
        }
    }

    const [passwordValue, setPasswordValue] = useState();
    const handlePassword = (e) => {
        setPasswordValue(e.target.value)

        if (emailValue && passwordValue) {
            setIsDisabled(false)
        }
    }
    return (
        <div className='desktop-screen'>
            <div style={{ padding: "1.5rem" }} className='mobile-screen pt-4 '>
                <div className='heading'>
                    Signin to your <br></br> PopX account
                </div>
                <div className='sub-heading'>
                    Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit,
                </div>
                <div className='input-box-wrap'>
                    <div className='input-box-label'>
                        Email Address
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
                        Password
                    </div>
                    <input
                        value={passwordValue}
                        onChange={(e) => handlePassword(e)}
                        className='inputfield'
                        placeholder='Enter password'
                        type='password'
                    />
                </div>
                <Button
                    onTap={() => navigate("/settings")}
                    bgColor={isDisabled ? "#CBCBCB" : "#6C25FF"}
                    textColor={"#FFFFFF"}
                    text={"Login"}
                    disable={isDisabled ? true : false}
                />

            </div>
        </div>
    )
}

export default Signin
