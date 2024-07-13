import React, { useState } from "react";
import { Button, Input } from "quarks-ui-components";
import "quarks-ui-components/dist/style.css";
import { login } from "../../features/authentication/AuthenticationSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = () => {
    console.log("login clicked");
    dispatch(login({ username, password }));
  };

  return (
    <div className="bg-gray-200 m-32 p-16 flex items-center justify-center flex-col border-solid border-2">
      <span className="mb-8 text-3xl font-semibold">Login</span>
      <Input
        label="username"
        bgColor="slate-100"
        textColor="slate-900"
        roundness={"md"}
        inputValue={username}
        onInputValueChange={setUsername}
      />
      <Input
        label="password"
        bgColor="slate-100"
        roundness={"md"}
        type="password"
        textColor="slate-900"
        inputValue={password}
        onInputValueChange={setPassword}
      />
      <div className="flex gap-2">
        <Button
          bgColor="slate-900"
          variant="solid"
          textColor="slate-100"
          onClick={handleLogin}
          className="w-32"
        >
          login
        </Button>
        {/* <Button bgColor="blue-400" variant="outline">
          Register
        </Button> */}
      </div>
    </div>
  );
};

export default Login;
