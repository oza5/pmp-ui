import React from "react";

const Logout = ({ onLogout, setToken }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    onLogout();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
