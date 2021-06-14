import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components Area
import Login from "./components/AreaManager/Login";
import MainPage from "./components/MainPage";
import UsersMainPage from "./components/Users/UsersMainPage";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>                        
            <Route exact path="/" component={MainPage} />                 
            <Route path="/entrena-con-nosotros" component={UsersMainPage}/>        
            <Route exact path="/area-manager" component={Login} />        
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default hot(module)(App);
