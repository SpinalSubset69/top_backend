import React from "react";
import { hot } from "react-hot-loader";

//Components Area
import Home from './pages/Home';

const App = () => {
  return (
    <>
     <Home/>
    </>
  );
};

export default hot(module)(App);
