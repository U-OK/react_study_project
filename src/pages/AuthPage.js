import React from "react";
import { Header } from "../components";
import SignIn from "../components/authorization/signIn"; //поменять
import SignUp from "../components/authorization/sighUp";
import { useParams } from "react-router-dom";

const AuthPage = () => {
  const { type } = useParams();

  const isRegistration = type === "registration" ? true : false;

  return (
    <div className="App">
      <Header />
      {isRegistration ? <SignUp /> : <SignIn />}
    </div>
  );
};

export default AuthPage;
