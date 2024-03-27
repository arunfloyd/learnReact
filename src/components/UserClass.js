import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    // console.log(this.props.name + "Child constructor");
  }
  async componentDidMount() {
    //  console.log(this.props.name + "Child Component Mount ");
    const data = await fetch("https://api.github.com/users/arunfloyd");
    const json = await data.json();
    this.setState ( {
      userInfo: json,
    });
  }
  componentDidUpdate(){
    console.log("Component Updates")
  }
  componentWillUnmount(){
    console.log("Component Unmount the data")

  }
  render() {
    // debugger;

    //  console.log(this.props.name + "Child render");
    const { name, bio,avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name : {name}</h2>
        <h2>Loaction : {bio}</h2>
        <h4>Contact : @arunfloyd</h4>
      </div>
    );
  }
}

export default UserClass;

//  >>>>>>>>>>>   Part 1        <<<<<<<<<<<<<<<<<<<<<<

// import React from "react";
// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//     console.log(this.props.name+"Child constructor");
//   }
//   componentDidMount(){
//     console.log(this.props.name+"Child Component Mount ")
//   }
//   render() {
//     console.log(this.props.name+"Child render");

//     const { name } = this.props;
//     const { count } = this.state;
//     return (
//       <div className="user-card">
//         <h1>Count :{count} </h1>
//         <button
//           onClick={() => {
//             //Never Update State Variables Directly create errors
//             this.setState({
//               count: this.state.count + 1,
//             });
//           }}
//         >
//           + Count
//         </button>
//         <button
//           onClick={() => {
//             //Never Update State Variables Directly create errors
//             this.setState({
//               count: this.state.count - 1,
//             });
//           }}
//         >
//           - Count
//         </button>
//         <h2>Name : {name}</h2>
//         <h2>Loaction : Malappuram</h2>
//         <h4>Contact : @arunfloyd</h4>
//       </div>
//     );
//   }
// }

// export default UserClass;
