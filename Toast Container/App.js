import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const buttontoast = () => {
    toast.success('Login Successful', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
 

  return (
    <div>
      <ToastContainer />
      <button onClick={buttontoast}>Login Now</button>
    </div>
  )

  }