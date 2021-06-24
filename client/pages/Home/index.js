import React, { useState } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeContainer } from "./HomeElements";
import { HomeUsers } from "../../components/UsersMain";
import  UsersPlan  from '../../components/UsersPlan';
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import login from "../login";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <Router>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HomeContainer>
          <Switch>
              <Route exact path="/" component={ HomeUsers }/>
              <Route exact path="/planes" component={ UsersPlan }/>
              <Route exact path="/login" component={login}/>
          </Switch>        
      </HomeContainer>
      </Router>
    </>
  );
};

export default hot(module)(Home);
