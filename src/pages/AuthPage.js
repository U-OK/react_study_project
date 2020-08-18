import React from "react";
import { Header } from "../components";
import { SignIn, SignUp } from "../components";
import { useParams } from "react-router-dom";

const AuthPage = () => {
  const { type } = useParams();

  const isRegistration = type === "registration";

  return (
    <div className="App">
      <Header />
      {isRegistration ? <SignUp /> : <SignIn />}
    </div>
  );
};

export default AuthPage;
