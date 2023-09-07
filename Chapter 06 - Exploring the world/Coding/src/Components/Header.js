import { useState } from "react";

export const Title = () => {
    return (
    <h1>Namaste Bhookharo</h1>
    )
};

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
      <div className="header">
    
      <Title />
    
    <div className="nav-items">
    <ul >
      <li>Home</li>
      <li>About</li>
      <li>Cart</li>
      <li>Home</li>
    </ul>
    </div>
    {
      isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Login</button> : <button onClick={() => setIsLoggedIn(true)}>Logout</button>
    }
    
    
    </div>
    );
  };

  export default Header;

  