import React, { useState } from 'react';

function ToDoItem(props){
    const [isComplete, setCompleted] = useState(false);
    
    function toggleComplete(){
        setCompleted(prevValue=>!prevValue);
    }

    return (
    <div>
        <li onClick={toggleComplete} style={{textDecoration : isComplete ? "line-through" : ""}}>{props.item}</li>
    </div>
    );
}

export default ToDoItem;