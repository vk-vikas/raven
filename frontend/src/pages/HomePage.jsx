import React, { useState } from "react";
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";

const Homepage = () => {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <div className="flex items-center justify-center">
      {showRegister ? <Signup /> : <Login />}
    </div>
  );
};

export default Homepage;
