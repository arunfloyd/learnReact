import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
   // console.log("Parent Constructor");
  }
  componentDidMount(){
   // console.log("Parent Component Mount ")
  }
  render() {
   // console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        {/* <User name={"ArUn FloYd (Function component)"} place={"Manjeri"}/> */}
        <UserClass name={"ArUn FloYd (Class component)"} />

      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       {/* <User name={"ArUn FloYd (Function component)"} place={"Manjeri"}/> */}
//       <UserClass name={"ArUn FloYd (Class component)"}/>

//     </div>
//   );
// };

export default About;
