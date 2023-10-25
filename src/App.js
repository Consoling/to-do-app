import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const notify = () =>
    toast.success("Task added Successfully", {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    const errorMsg = () =>
    toast.error('Please enter a task !', {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") {setListTodo([...listTodo, inputText]);
    notify();}
    else if (inputText == '') {
      errorMsg();
    }
    
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  return (
    <div className="app-container">
      <div className="content-container">
        <TodoInput addList={addList} />
        <ToastContainer />
        <h1 className="app-heading">ToDo App</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
