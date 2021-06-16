import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components Area
import Login from "./components/AreaManager/Login";
import Home from './pages';

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>                        
            <Route exact path="/" component={Home} />                 
            <Route path="/entrena-con-nosotros" component={Home}/>        
            <Route exact path="/area-manager" component={Login} />        
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default hot(module)(App);
