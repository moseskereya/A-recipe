import React from 'react';
import Nav from "./Components/Nav"
import Home from "./Home"
import Data from "./Components/Data"
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import App2 from './Components/App2';
import App1 from './Components/App1';

function App() {
  return (
    <Router>
    <div className="App">
        <Nav/>
        <Switch>
           <Route path="/" exact component={App1}/>
           <Route path="/App2" exact component={App2}/>
           <Route path="/App2/:id" component={Data}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
