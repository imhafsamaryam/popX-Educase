import React from 'react'
import Button from '../components/button'
import { useNavigate } from 'react-router-dom'

const Splashscreen = () => {

  const navigate = useNavigate();

  return (
    <div className='desktop-screen'>
      <div className='splash-screen '>
        <div className='flex-end'>
          <div style={{color:"#FFFFFF"}} className='heading'>
            Welcome to PopX
          </div>
          <div className='sub-heading'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </div>
          <Button onTap={() => navigate("/signup")} bgColor={"#6C25FF"} textColor={"#FFFFFF"} text={"Create Account"} />
          <Button onTap={() => navigate("/signin")} bgColor={"#CEBAFB"} textColor={"#1D2226"} text={"Already Registered? Login"} />

        </div>
      </div>
    </div>
  )
}

export default Splashscreen
