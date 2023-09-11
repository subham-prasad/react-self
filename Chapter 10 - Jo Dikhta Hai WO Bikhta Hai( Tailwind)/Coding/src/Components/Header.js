import { useState, useContext } from "react";
import Logo from "../assets/images/logo-black.png";
import {Link} from "react-router-dom"
import useOnline from "./utils/useOnline";
import UserContext from "./utils/userContext";

export const Title = () => {
    return (
      <Link to = "/"> <img className="w-28" alt="Logo"  src={Logo} /></Link>
    )
};

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const {user} = useContext(UserContext);

  const isOnline = useOnline();
    return (
      <div className="flex justify-between">
      <Title />
    
    <div >
    <ul className="flex">
      
      <Link to = "/">
        <li key="1" className="px-2">Home</li>
      </Link>
      <Link to = "/about">
        <li className="px-2" key="2">About</li>
      </Link>
      <Link to = "/contact">
        <li className="px-2" key="3">Contact</li>
      </Link>
      <Link to = "/instamart">
        <li className="px-2" key="4">Instamart</li>
      </Link>
      
    </ul>
    </div>
    <h1>{user.name}</h1>
    <h1>{isOnline ? "✅":"🔴"}</h1>
    {
      isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Login</button> : <button onClick={() => setIsLoggedIn(true)}>Logout</button>
    }
    
    
    </div>
    );
  };

  export default Header;

  