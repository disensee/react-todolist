import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  
  function handleChange(event){
    let newTask = event.target.value;
    setTask(newTask);
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
          type="text" 
          onChange={handleChange}
        />
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>{task}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;

//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

