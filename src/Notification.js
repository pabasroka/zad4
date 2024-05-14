import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Notification = ({ isClicked, setIsClicked }) => {
  const [notification, setNotification] = useState({
    title: "Current Date",
    body: `${new Date()}`,
  });
  const notify = () => toast(<ToastDisplay />);

  function ToastDisplay() {
    return (
      <div>
        <p>
          <b>{notification?.title}</b>
        </p>
        <p>{notification?.body}</p>
      </div>
    );
  }

  useEffect(() => {
    if (isClicked) {
      setNotification({ title: "Current Date", body: `${new Date()}` });
      notify();
      setIsClicked(false);
    }
  }, [isClicked, notification, setIsClicked]);
};

export default Notification;
