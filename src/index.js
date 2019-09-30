import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import "./styles.css";
import Registeration from "./components/Registeration";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

function App() {
  return(
    <div>
  <Router>
 <Route exact path="/" component={Registeration} />
 <Route exact path="/home" component={Home} />
 </Router>
 </div>
)


}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
