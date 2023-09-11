// import { Outlet } from "react-router-dom";
import React from "react";
import Profile from "./Profile";
import ProfileClass from "./PRofileClass";



class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");

    
  }

componentDidMount() {
    console.log(" Parent - Component Did Mount");
    
  }

  render() {
    console.log("Parent Render");

    return (
      <>
         <h1>This is about us page</h1>
        {" "}
        <p> THis is namaste react live course chapter 07 - Finding the path</p>
         <Profile  name={"Subham Prasad"}/>   
         <ProfileClass child={"First "} />
        {/* // <ProfileClass child={"Second  "} /> */}
        {" "}
      </>
    );
  }
}

export default About2;

/**
 * Parent Constructor
 * Parent Render
 * First Child Constructor
 * First Child Render
 * Second Child Constructor
 * Second Child Render
 *
 *  DOM will be Updated
 *
 * First Child Component Did Mount
 * Second Child Component Did Mount
 * ParentComponent Did Mount
 *
 *
 *
 */
