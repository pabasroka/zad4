import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, Zoom } from "react-toastify";
import Notification from "./Notification";
import React, { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="App">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Zoom}
        closeButton={false}
      />
      <Notification isClicked={isClicked} setIsClicked={setIsClicked} />
      <header
        className="App-header"
        onClick={() => {
          setIsClicked(true);
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <div>Click to get notification</div>
      </header>
    </div>
  );
}

export default App;
