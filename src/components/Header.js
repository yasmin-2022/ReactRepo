import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus'
const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login")
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header flex justify-between bg-pink-100 shadow-lg ">
      <div className="logo-img m-6">
        <img className='logo w-11' src={LOGO_URL} />
      </div>
      <div className=' flex items-center'>
        <ul className="flex ">
          <li className="m-4 p-4 hover:bg-pink-500">
            Online Status: {(onlineStatus) ? "green" : "Red"}
          </li>
          <li className="m-4 p-4 hover:bg-pink-500">
            <Link to="/">
            Home
            </Link>
          </li>
          <li className="m-4 p-4 text-center hover:bg-pink-500 " >
            <Link to="/about">
            About
            </Link>
          </li>
          <li className="m-4 p-4 hover:bg-pink-500">
            <Link to="/create">
            Create
            </Link>
          </li>
           <li className="m-4 p-4 hover:bg-pink-500">
            <Link to="/grocery">
            Grocery
            </Link>
          </li>
          <li className="m-4 p-4 hover:bg-pink-500">Cart</li>
          <button className="loginBtn m-4 p-4 hover:bg-pink-500" onClick={() => {
            loginBtn==='Login'?setloginBtn("Logout"):setloginBtn("Login")
          }}>{loginBtn}</button>
        </ul>

      </div>
    </div>
  )
}
export default Header;