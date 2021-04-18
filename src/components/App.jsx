import React, { useState } from "react";
import ToDoItem from './ToDoItem';

function App() {
  const [item, setItem] = useState("");
  const [allItems, setAllItems] = useState([]);
  
  function handleChange(event){
    const newItem = event.target.value;
    setItem(newItem);
  }

  function addItem(){
    setAllItems((prevValues)=>[...prevValues, item]);
    setItem("");
  }

  function deleteItem(id){
    setAllItems((prevValues) => {
      return prevValues.filter(
        (item, index)=>{
          return index !== id;    
        }
      );
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
          {allItems.map((item, index)=>{
            return (
              <ToDoItem 
                key={index}
                id={index}
                item={item}
                onChecked={deleteItem}
              />);
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;