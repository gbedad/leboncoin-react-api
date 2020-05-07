import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import Sign_up from "./containers/Sign-up";

function App() {
  return (
    <Router>
      {/* <Header></Header> */}
      <Switch>
        <Route path="/sign_up">
          <Sign_up />
        </Route>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/">
          <Offers />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
