import { useEffect } from "react";

const Profile = ({ name }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("NamasteReact");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <h1>THis is functional Component created by: {name}</h1>;
};

export default Profile2;
