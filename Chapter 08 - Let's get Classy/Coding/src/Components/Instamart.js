import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <>
      <h3>{title}</h3>

      {isVisible ? (
        <button onClick={() => setIsVisible(false)}>Hide</button>
      ) : (
        <button onClick={() => setIsVisible(true)}>Show</button>
      )}
      {isVisible && <p>{description}</p>}
    </>
  );
};

const Instamart = () => {
  const [isVisibleSection, setIsVisibleSection] = useState("");

  return (
    <>
      <h1>Instamart</h1>
      <Section 
        title={"Career Instamart"}
        description={
          "This is Career Section"  
        }
        
        isVisible={isVisibleSection === "career"}

        setIsVisible={isTrue => {
          if(isTrue){
            setIsVisibleSection("career")
          }
          else{
            setIsVisibleSection("")
          }
        }}
        // setIsVisible={ isTrue ? setIsVisibleSection("career") : setIsVisibleSection("")}
        
      />
      <Section
        title={"Team Instamart"}
        description={
          "This is Team Section"
        }
        
        isVisible={isVisibleSection === "team"}
        setIsVisible={isTrue => {
          if(isTrue){
            setIsVisibleSection("team")
          }
          else{
            setIsVisibleSection("")
          }
        }}
        
      />
      <Section
        title={"About Instamart"}
        description={
        "This is about Section"  
        }
        
        isVisible={isVisibleSection === "about"}
        setIsVisible={isTrue => {
          if(isTrue){
            setIsVisibleSection("about")
          }
          else{
            setIsVisibleSection("")
          }
        }}
        
      />
    </>
  );
};

export default Instamart;
