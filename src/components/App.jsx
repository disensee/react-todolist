import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [allItems, setAllItems] = useState([]);
  function handleChange(event){
    let newItem = event.target.value;
    setItem(newItem);
  }

  function addItem(event){
    const {name, value} = document.getElementById("txt-input");
    setAllItems((prevValue)=>{
      return[...prevValue, value];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
          id="txt-input"
          type="text"
          name="input" 
          onChange={handleChange}
          value={item}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>{item}</li>
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

