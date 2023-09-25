import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
const Header = () => {
  const [loginBtn,setloginBtn]=useState("Login")
  return (
    <div className="header">
      <div className="logo-img">
        <img className='logo' src={LOGO_URL} />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>
            About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="loginBtn" onClick={() => {
            loginBtn==='Login'?setloginBtn("Logout"):setloginBtn("Login")
          }}>{loginBtn}</button>
        </ul>

      </div>
    </div>
  )
}
export default Header;