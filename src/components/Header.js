import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus'
const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login")
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-img">
        <img className='logo' src={LOGO_URL} />
      </div>
      <div className='nav-items'>
        <ul>
          <li>
            Online Status: {(onlineStatus) ? "green" : "Red"}
          </li>
          <li>
            <Link to="/">
            Home
            </Link>
          </li>
          <li>
            <Link to="/about">
            About
            </Link>
          </li>
          <li>
            <Link to="/create">
            Create
            </Link>
          </li>
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