import React, { useRef, useState } from "react";
import List from "./components/List";
import { v4 } from "uuid";
function App() {
  // console.log("Render: App");
  const userInput = useRef();
  const [users, setUsers] = useState([
    { id: "a", name: "John" },
    { id: "b", name: "Doe" }
  ]);
  const [text, setText] = useState("");

  const addUser = () => {
    userInput.current.focus();
    console.log("User Input is", userInput);
    const newUser = {
      id: v4(),
      name: userInput.current.value
    };
    // setText("");
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <input
        type="text"
        ref={userInput}
        placeholder="Username"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={addUser}>Add User</button>
      <List list={users} />
    </div>
  );
}

export default App;

// document.getElementById("");
