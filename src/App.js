import React from "react";
import { useSelector } from "react-redux";
import NotLoggedIn from "./pages/authentication/not_login/NotLoggedIn";
import LoggedIn from "./pages/authentication/login/LoggedIn";

const App = () => {
  const loggedIn = useSelector((state) => state.logIn.loggedIn);

  return loggedIn ? <LoggedIn /> : <NotLoggedIn />;
};

export default App;
