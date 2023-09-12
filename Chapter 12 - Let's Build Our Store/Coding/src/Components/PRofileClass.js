import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
        userInfo:{
        name: "Dummy Name",
        id: 0,
        location: "not available",
    }
}
    console.log(this.props.child + "Child - Constructor");
  }

  async componentDidMount() {

    
    console.log(this.props.child + " Child - Component Did Mount");
    const data = await fetch("https://api.github.com/users/subham-prasad");
    const json = await data.json();
    console.log(json);
    this.setState({
        userInfo: json,
    })

    this.timer = setInterval(() =>{
        console.log("NamasteReact")
    },1000)
  }

  componentDidUpdate(){
    console.log("Compnent Did Update")
  }

  componentWillUnmount(){
    clearInterval(this.timer)
    console.count("Component Will Unmount")
  }
   
  render() {

    const {name, id, blog} = this.state.userInfo;
    
    console.log(this.props.child + " Child - Render")

    return (
        
      <div>
        <h1>{name}</h1>
        <h1>{id}</h1>
        <h1>{blog}</h1>
     

        
      </div>
    );
  }
}

export default ProfileClass;
