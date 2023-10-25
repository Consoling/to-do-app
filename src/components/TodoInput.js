import React, { useState } from "react";



const TodoInput = (props) => {
  const [inputText, setInputText] = useState("");
  const handleEnterPress = (e) => {
    if(e.keyCode === 13){
      props.addList(inputText);
      setInputText("");
    }
  }
  // let addTask = [..., inputText];
  
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your Task ..."
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
          // console.log(inputText)
        }}
        onKeyDown={handleEnterPress}
      />
      <button
        className="add-btn"
        onClick={() => {
          
          props.addList(inputText);
          setInputText("");
          // handleEnterPress();
        }}
        
      >
        +
      </button>
      
    </div>
  );
};

export default TodoInput;
