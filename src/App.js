import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";

//IMPORT DES CONTAINERS ET COMPONENTS
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import Search from "./containers/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const tokenFromCookie = Cookies.get("userToken");
  const [userToken, setUserToken] = useState(tokenFromCookie || null);
  return (
    <Router>
      <Header userToken={userToken} setUserToken={setUserToken} />

      <Switch>
        <Route path="/sign_up">
          <SignUp />
        </Route>
        <Route path="/log_in">
          <Login setUserToken={setUserToken} />
        </Route>

        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/">
          <Offers />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}
export default App;
