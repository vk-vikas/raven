import React, { useState } from "react";
import { Button, Input } from "quarks-ui-components";
import "quarks-ui-components/dist/style.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center flex-col border-solid border-2">
      <Input
        label="username"
        bgColor="slate-900"
        textColor="slate-200"
        roundness={"md"}
        inputValue={username}
        onInputValueChange={setUsername}
      />
      <Input
        label="password"
        bgColor="slate-900"
        roundness={"md"}
        type="password"
        textColor="slate-200"
        inputValue={password}
        onInputValueChange={setPassword}
      />
      <div className="flex gap-2">
        <Button
          bgColor="blue-300"
          variant="solid"
          onClick={() => {
            setUsername("");
          }}
          className="w-20"
        >
          login
        </Button>
        <Button bgColor="blue-400" variant="outline">
          Register
        </Button>
      </div>
    </div>
  );
};

export default Login;
