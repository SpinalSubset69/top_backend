import React from "react";
import { render } from "react-dom";
import HelloWorld from "./HelloWorld";

//Css
import "./App.css";
import "./styles/main-page.css";
import "./styles/nav-bar.css";
import "./styles/footer.css";
import "./styles/login.css";

render(<HelloWorld />, document.getElementById("root"));
