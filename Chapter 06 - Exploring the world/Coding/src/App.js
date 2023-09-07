import React  from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";


// React.createElement => Object => HTML(DOM)

// JSX => React.createElement => Object => HTML(DOM)  babel converts JSX to React.createElement










const AppLayout = () => {
  return (
    <>
    <Header />
    <Body />
    <Footer />
    </>
  )
}




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
