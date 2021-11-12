import React from "react";
import { useSelector } from "react-redux";
import NotLoggedIn from "./pages/customer/not_login/NotLoggedIn";
import LoggedIn from "./pages/customer/login/LoggedIn";

const App = () => {
  const loggedIn = useSelector((state) => state.logIn);

  return loggedIn ? <LoggedIn /> : <NotLoggedIn />;
};

export default App;
