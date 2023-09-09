import { useState } from "react";
import Logo from "../assets/images/logo-black.png";
import {Link} from "react-router-dom"
import useOnline from "./utils/useOnline";

export const Title = () => {
    return (
      <Link to = "/"> <img className="logo" alt="Logo"  src={Logo} /></Link>
    )
};

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const isOnline = useOnline();
    return (
      <div className="header">
    
      <Title />
    
    <div className="nav-items">
    <ul >
      
      <Link to = "/">
        <li>Home</li>
      </Link>
      <Link to = "/about">
        <li>About</li>
      </Link>
      <Link to = "/contact">
        <li>Contact</li>
      </Link>
      <Link to = "/instamart">
        <li>Instamart</li>
      </Link>
      
    </ul>
    </div>
    <h1>{isOnline ? "✅":"🔴"}</h1>
    {
      isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Login</button> : <button onClick={() => setIsLoggedIn(true)}>Logout</button>
    }
    
    
    </div>
    );
  };

  export default Header;

  