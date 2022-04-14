import React, { useState } from 'react'
import './App.css';

const App = () => {

  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [fullPass, setFullPass] = useState ("");

  const passEvent = (e)  => {
    setPassword(e.target.value);
  };

const inputEvent = (event) => {
  setName(event.target.value);
};

const onSubmit = (event) => {
  event.preventDefault();
  setFullName(name);
  setFullPass(password);
  alert("Submitted 🥳");
  
}

  return(
 <>
 <form onSubmit={onSubmit}>
 <div>
   <h1> Welcome {fullName} {fullPass} </h1>
   <input type="text" placeholder="Enter Your Name" onChange={inputEvent} value={name}  required/>
   <input type="text" placeholder="Enter Lastname" onChange={passEvent} value={password} required/>
   <button type="submit">Click Me 👍</button>
 </div>
 </form>

 </>
  );
};

export default App;
