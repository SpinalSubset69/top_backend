import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components Area
import Login from "./components/AreaManager/Login";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";

const HelloWorld = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/area-manager" component={Login} />
            <Route path="/" component={MainPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default hot(module)(HelloWorld);
