import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoList = (props) => {

  const errorMsg = () =>
  toast.success('Task deleted successfully ✅', {
    position: "bottom-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

  return (
    <li className='list-item'>
    {props.item}
    <span className='icons'>
    <i 
    className="fa-solid fa-trash icon-delete"
    onClick={e => {
      props.deleteItem(props.index)
      errorMsg();
    }}
    ></i>
    </span></li>
  )
}

export default TodoList