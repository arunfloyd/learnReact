import { useState } from "react";
const User = (props) => {
  const [count,setCount] = useState(0);
  const [count1] = useState(1);

  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <h1>Count 1 : {count1}</h1>
      <h2>Name : {props.name}</h2>
      <h2>Loaction : {props.place}</h2>
      <h4>Contact : @arunfloyd</h4>
    </div>
  );
};

export default User;
