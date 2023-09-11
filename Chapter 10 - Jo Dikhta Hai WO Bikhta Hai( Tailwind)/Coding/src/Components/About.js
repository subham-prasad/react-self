// import { Outlet } from "react-router-dom";
import React from "react";
import Profile from "./Profile";
import ProfileClass from "./PRofileClass";

const About = () => {
  return (
    <>
      <h1>This is about us page</h1>
      <p> THis is namaste react live course chapter 07 - Finding the path</p>
      <Profile  name={"Subham Prasad"}/>   
      {/* <ProfileClass  name={"Subham Prasad"}/> */}
    </>
  );
};



export default About;

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
