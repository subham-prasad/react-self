import { useState } from "react";
import Logo from "../assets/images/logo-black.png";
import {Link} from "react-router-dom"

export const Title = () => {
    return (
      <Link to = "/"> <img className="logo" alt="Logo"  src={Logo} /></Link>
    )
};

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
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
      
    </ul>
    </div>
    {
      isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Login</button> : <button onClick={() => setIsLoggedIn(true)}>Logout</button>
    }
    
    
    </div>
    );
  };

  export default Header;

  