import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
function Counter() {
  const [count, setC] = useState(0);
  const handle = () => {
    const newC = count + 1;
    setC(newC);
  };
  const handledec = () => {
    const newdecrease = count - 1;
    setC(newdecrease);
  };
  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button className="btn" onClick={handle}>
        Increase
      </button>
      <button onClick={handledec}>Decrease</button>
    </div>
  );
}
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>External Users: {users.length}</h1>
      <div className="userarea">
        {users.map((user) => (
          <User name={user.name} email={user.email} phn={user.phone}></User>
        ))}
      </div>
    </div>
  );
}
function User(props) {
  return (
    <div className="user">
      <h3>Name: {props.name}</h3>
      <h4>Email: {props.email}</h4>
      <h4>Phone: {props.phn}</h4>
    </div>
  );
}

export default App;
